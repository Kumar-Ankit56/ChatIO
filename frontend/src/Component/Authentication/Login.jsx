import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  function postDetails(pics) {}

  function submitHandler() {}
  return (
    <div>
      <VStack spacing={"5px"} color="black">
        <FormControl id="First Name" isRequired>
          <FormLabel mx={2}>Email</FormLabel>
          <Input
            placeholder="Enter Your Name"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl id="Password" isRequired>
          <FormLabel mx={2}>Password</FormLabel>
          <InputGroup>
            <Input
              placeholder="Enter Your Password"
              type={show ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="5rem">
              <Button
                colorScheme="blue"
                h="1.75rem"
                size="sm"
                w="3rem"
                onClick={handleClick}
              >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button
          colorScheme="blue"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={submitHandler}
        >
          Login
        </Button>
        <Button
          variant="solid"
          colorScheme="red"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={() => {
            setEmail("guest@example.com");
            setPassword("123456");
          }}
        >
          Get Guest User Login
        </Button>
      </VStack>
    </div>
  );
}

export default Login;
