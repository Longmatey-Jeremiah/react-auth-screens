import { Box, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Box
        w="100%"
        h={"100vh"}
        p={4}
        display={"flex"}
        flexDirection={["column", "row"]}
        justifyContent={"space-between"}
        gap={6}
      >
        <Box
          h={"100%"}
          w={"100%"}
          display={["none", "block"]}
          alignSelf={"center"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={20}
          flex={[0, 0.45]}
        >
          <Box
            w={"100%"}
            h={"100%"}
            display={"flex"}
            flexDirection={"column"}
            bgPosition={"center"}
            bgSize={"cover"}
            bgImage={require("../assets/background/auth-bg.jpg")}
            borderRadius={20}
            justifyContent={"flex-end"}
            alignContent={"flex-end"}
            alignItems={"flex-end"}
            pb={[4, 10]}
          >
            {/* <Image
              zIndex={1}
              src={require("../assets/background/auth-bg.jpg")}
              alt="Auth bg"
              h={"100%"}
              w={"100%"}
              borderRadius={20}
            /> */}
            <Box
              h={["130px", "200px"]}
              w={"90%"}
              mx="auto"
              bg={"gray.600"}
              opacity={0.9}
              borderRadius={15}
              gap={4}
              color={"white"}
              justifyContent={"center"}
              textAlign={"center"}
              p={[3, 8]}
            >
              <Text fontSize={["lg", "2xl"]} fontWeight={"medium"}>
                Architecure should speak of its time and place, but yearn for
                timelessness.
              </Text>
              <Text>~ Frank Gehry</Text>
            </Box>
          </Box>
        </Box>
        <Box flex={[1, 0.55]}>{children}</Box>
      </Box>
    </>
  );
}
