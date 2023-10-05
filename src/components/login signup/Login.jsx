import {
  Center,
  Box,
  Stack,
  VStack,
  HStack,
  Heading,
  Button,
  Text,
  Input,
} from "@chakra-ui/react";

const Login = () => {
  const width = window.innerWidth;
  const getBoxwidth = () => {
    if (width > 1020) {
      return "70%";
    } else if (width < 1020) {
      return "400px";
    }
  };
  return (
    <Center>
      <Box m={23} width={getBoxwidth}>
        <Heading textAlign={"center"} m={5}>
          Login
        </Heading>
        <HStack
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={["column-reverse", "row"]}
        >
          <VStack w={"100%"} p={2}>
            <Stack display={"flex"} w={"100%"} p={2}>
              <Input
                boxShadow={"2xl"}
                focusBorderColor="white"
                border={"none"}
                outline={"none"}
                type="text"
                placeholder="Email"
              />
              <Input
                boxShadow={"2xl"}
                focusBorderColor="white"
                border={"none"}
                outline={"none"}
                type="password"
                placeholder="Password"
              />
              <Input
                boxShadow={"2xl"}
                focusBorderColor="white"
                border={"none"}
                outline={"none"}
                type="password"
                placeholder="Confirm Password"
              />
            </Stack>
            <Button
              bgColor={"rgba(246, 33, 75, 1)"}
              borderRadius={"0"}
              color={"white"}
              _hover={{ opacity: 0.8 }}
              _active={{ fontSize: "17" }}
              fontWeight={"hairline"}
              type="submit"
            >
              Login
            </Button>
          </VStack>
          <VStack
            bgGradient={"linear(to-b,rgba(246, 33, 75, 1), #FF0080)"}
            w={"100%"}
            h={"100%"}
            color={"white"}
            p={2}
          >
            <Heading fontWeight={"hairline"}>Glad to see you!</Heading>
            <Text>Hi, I&apos;m Hassaam and I&apos;m happy to see you.</Text>
          </VStack>
        </HStack>
      </Box>
    </Center>
  );
};

export default Login;
