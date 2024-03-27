import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, firestore } from "../firebase/firebase";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
const useLogin = () => {
  const loginUser = useAuthStore((state) => state.login);
  const showToast = useShowToast();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const login = async (inputs) => {
    if (!inputs.email || !inputs.password) {
      showToast("Error", "Enter all Fields", "error");
      return;
    }
    try {
      const validUser = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!validUser && error) {
        showToast("Error", error.message, "error");
        return;
      }
      if (validUser) {
        const docRef = doc(firestore, "users", validUser.user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          loginUser(docSnap.data());
          localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { login, error, loading };
};
export default useLogin;
