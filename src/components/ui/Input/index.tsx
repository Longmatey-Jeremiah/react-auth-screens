import {
  Input as BaseInput,
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputProps,
  IconButton,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

interface Props extends InputProps {
  label?: string;
  errorMessage?: string;
  register?: any;
}

export function Input({
  label,
  isInvalid,
  name = "",
  errorMessage,
  type = "text",
  register = {},
  ...rest
}: Props) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  if (type === "password") {
    return (
      <Box position="relative" w={"full"}>
        <Box>
          <FormControl isInvalid={isInvalid}>
            {label ? <FormLabel>{label}</FormLabel> : null}
            <InputGroup>
              <BaseInput
                w={"full"}
                {...register}
                _focus={{ borderWidth: "2px", borderColor: "primary.200" }}
                type={show ? "text" : "password"}
                {...rest}
                _placeholder={{ color: "gray.300" }}
                borderColor={"gray.200"}
                borderWidth={"2px"}
                borderRadius={8}
                p={2}
              />
              <InputRightElement>
                <IconButton
                  py={"2px"}
                  variant="outline"
                  colorScheme="teal"
                  aria-label="Call Sage"
                  border={0}
                  bg={"transparent"}
                  _hover={{ background: "transparent", color: "teal.200" }}
                  onClick={handleClick}
                  // icon={!show ? <FaEye /> : <FaEyeSlash />}
                />
              </InputRightElement>
            </InputGroup>

            {errorMessage ? (
              <FormErrorMessage>{errorMessage}</FormErrorMessage>
            ) : null}
          </FormControl>
        </Box>
      </Box>
    );
  }

  return (
    <FormControl isInvalid={isInvalid}>
      {label ? <FormLabel>{label}</FormLabel> : null}
      <BaseInput
        w={"full"}
        {...register}
        _focus={{ borderWidth: "2px", borderColor: "primary.200" }}
        type={type}
        {...rest}
        _placeholder={{ color: "gray.300" }}
        borderColor={"gray.200"}
        borderWidth={"2px"}
        borderRadius={8}
        p={2}
      />
      {errorMessage ? (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      ) : null}
    </FormControl>
  );
}
