import React from "react";
import { AuthLayout } from "../../layout";
import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import { Button, Heading, Input } from "../../components";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <AuthLayout>
      <VStack
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
        h={"full"}
        w={["full", 350]}
        px={[6, 0]}
      >
        <Box textAlign={"center"}>
          <Heading fontSize={["3xl", "4xl"]}>Login Page</Heading>
          <Text fontSize={["14px"]} pt={2} color={"gray.500"}>
            Hey! we missed you, Welcome back
          </Text>
        </Box>
        <Box w={"full"} gap={6} display={"flex"} flexDirection={"column"}>
          <Input placeholder="name" type="text" />
          <Input placeholder="password" type="password" />
          <Box>
            <Button w={"full"}>Login</Button>
          </Box>
          <Box>
            <Center>
              <HStack fontSize="14px" fontWeight={600}>
                <Text color={"gray.400"}>Don't have an account?</Text>
                <Text color="primary.200">
                  <Link to="/register">Sign Up</Link>
                </Text>
              </HStack>
            </Center>
          </Box>
        </Box>
      </VStack>
    </AuthLayout>
  );
}
