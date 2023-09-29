import { Center, Box, Stack, VStack,HStack, Heading } from "@chakra-ui/react";

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
      <Box border={"1px"} m={23} width={getBoxwidth}>
        <Heading textAlign={'center'}>Login</Heading>
        <HStack >
            <VStack w={'60%'} border={'2px'}>
                <Stack>
                    <input type="text" placeholder="Email" />
                </Stack>
                <Stack>
                    <input type="password" placeholder="Password" />
                </Stack>
            </VStack>
            <VStack w={'40%'} border={'2px'}>
            </VStack>
        </HStack>
      </Box>
    </Center>
  );
};

export default Login;
