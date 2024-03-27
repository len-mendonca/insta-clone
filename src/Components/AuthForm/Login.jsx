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
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { loading, error, login } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Input
        value={inputs.email}
        type="text"
        onChange={(e) => {
          setInputs({ ...inputs, email: e.target.value });
        }}
        variant="filled"
        placeholder="Email"
        focusBorderColor="pink.400"
      />

      <InputGroup>
        <Input
          value={inputs.password}
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          onChange={(e) => {
            setInputs({ ...inputs, password: e.target.value });
          }}
          variant="filled"
          focusBorderColor="pink.400"
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
        isLoading={loading}
        w={"100%"}
        onClick={() => {
          login(inputs);
        }}
      >
        Log In
      </Button>
    </>
  );
};
export default Login;
