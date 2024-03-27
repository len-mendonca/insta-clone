import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";

const SingUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, signup } = useSignUpWithEmailAndPassword();
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  return (
    <>
      <Input
        type="email"
        onChange={(e) => {
          setInputs({ ...inputs, email: e.target.value });
        }}
        variant="filled"
        placeholder="Email"
        focusBorderColor="pink.400"
        value={inputs.email}
      />
      <Input
        type="text"
        onChange={(e) => {
          setInputs({ ...inputs, username: e.target.value });
        }}
        variant="filled"
        placeholder="Username"
        focusBorderColor="pink.400"
        value={inputs.username}
      />
      <Input
        type="text"
        onChange={(e) => {
          setInputs({ ...inputs, fullName: e.target.value });
        }}
        variant="filled"
        placeholder="Full Name"
        focusBorderColor="pink.400"
        value={inputs.fullName}
      />
      <InputGroup>
        <Input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          onChange={(e) => {
            setInputs({ ...inputs, password: e.target.value });
          }}
          variant="filled"
          focusBorderColor="pink.400"
          value={inputs.password}
        />

        <InputRightElement h={"full"}>
          <Button
            variant={"ghost"}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      )}
      <Button
        colorScheme="twitter"
        w={"100%"}
        isLoading={loading}
        onClick={() => signup(inputs)}
      >
        Sign Up
      </Button>
    </>
  );
};
export default SingUp;
