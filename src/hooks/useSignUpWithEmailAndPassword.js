import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
import { collection, query, where, getDocs } from "firebase/firestore";

const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast();
  const loginUser = useAuthStore((state) => state.login);
  const logOutUser = useAuthStore((state) => state.logout);
  const signup = async (inputs) => {
    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.username ||
      !inputs.fullName
    ) {
      showToast("Error", "Enter all Fields", "error");
      return;
    }
    const q = query(
      collection(firestore, "users"),
      where("username", "==", inputs.username)
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot) {
      let flag = 0;
      if (querySnapshot) {
        let flag = false; // Initialize flag to false

        for (const doc of querySnapshot.docs) {
          const username2 = (await doc.data()).username;
          if (username2 === inputs.username) {
            flag = true; // Set flag to true if username exists
            break; // Exit the loop early since username already exists
          }
        }

        if (flag) {
          showToast("Error", "Username already exists", "error");
          return;
        }

        // If username doesn't exist, proceed with signup
        // Your signup logic goes here
      }
    }

    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser && error) {
        showToast("Error", error.message, "error");
        return;
      }
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.username,
          fullName: inputs.fullName,
          bio: "",
          profilePicURL: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { loading, error, signup };
};
export default useSignUpWithEmailAndPassword;
