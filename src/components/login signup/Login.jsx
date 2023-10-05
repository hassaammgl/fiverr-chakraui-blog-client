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
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import { useState } from "react";

const Login = () => {
  const width = window.innerWidth;
  const getBoxwidth = () => {
    if (width > 1020) {
      return "70%";
    } else if (width < 1020) {
      return "400px";
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [showPassword, setShowPassword] = useState("password");

  const handleVisibilityPassword = () => {}
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
              <InputGroup>
                <InputLeftElement>
                  <PersonRoundedIcon />
                </InputLeftElement>
                <Input
                  boxShadow={"2xl"}
                  focusBorderColor="white"
                  border={"none"}
                  outline={"none"}
                  type="text"
                  placeholder="Email"
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement>
                  <KeyRoundedIcon />
                </InputLeftElement>
                <InputRightElement>
                  <Button></Button>
                </InputRightElement>
                <Input
                  boxShadow={"2xl"}
                  focusBorderColor="white"
                  border={"none"}
                  outline={"none"}
                  type={showPassword}
                  placeholder="Password"
                />
              </InputGroup>
              <InputGroup>
                <InputRightElement>
                  <Button onClick={handleVisibilityPassword}>
                    <VisibilityOffRoundedIcon/>
                  </Button>
                </InputRightElement>
                <InputLeftElement>
                  <KeyRoundedIcon />
                </InputLeftElement>
                <Input
                  boxShadow={"2xl"}
                  focusBorderColor="white"
                  border={"none"}
                  outline={"none"}
                  type={showPassword}
                  placeholder="Confirm Password"
                />
              </InputGroup>
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
