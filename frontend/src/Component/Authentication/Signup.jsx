import React from "react";
import {
  Stack,
  HStack,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();
  const [picLoading, setPicLoading] = useState(false);
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
          <FormLabel mx={2}>Name</FormLabel>
          <Input
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
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

        <FormControl id="Password" isRequired>
          <FormLabel mx={2}>Confirm Password</FormLabel>
          <InputGroup>
            <Input
              placeholder="Enter Your Password Again"
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

        <FormControl>
          <FormLabel>Upload Your Picture</FormLabel>
          <Input
            type="file"
            p="1.5"
            accept="image/*"
            onChange={(e) => postDetails(e.target.file[0])}
          />
        </FormControl>

        <Button
          colorScheme="blue"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={submitHandler}
        >
          Sign Up
        </Button>
      </VStack>
    </div>
  );
}

export default Signup;
