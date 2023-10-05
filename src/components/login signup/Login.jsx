import { Link } from "react-router-dom";
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
  const handleSubmit = () => {};
  const handleVisibilityPassword = () => {
    setShowPassword(showPassword === "password" ? "text" : "password");
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
              <InputGroup>
                <InputLeftElement>
                  <PersonRoundedIcon />
                </InputLeftElement>
                <Input
                  boxShadow={"2xl"}
                  focusBorderColor="white"
                  border={"none"}
                  outline={"none"}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement>
                  <KeyRoundedIcon />
                </InputLeftElement>
                <InputRightElement>
                  <Button onClick={handleVisibilityPassword}>
                    {showPassword === "text" ? (
                      <VisibilityOffRoundedIcon />
                    ) : (
                      <VisibilityRoundedIcon />
                    )}
                  </Button>
                </InputRightElement>
                <Input
                  boxShadow={"2xl"}
                  focusBorderColor="white"
                  border={"none"}
                  outline={"none"}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword}
                  placeholder="Password"
                />
              </InputGroup>
              <InputGroup>
                <InputRightElement>
                  <Button onClick={handleVisibilityPassword}>
                    {showPassword === "text" ? (
                      <VisibilityOffRoundedIcon />
                    ) : (
                      <VisibilityRoundedIcon />
                    )}
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
                  onChange={(e) => setCpassword(e.target.value)}
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
              onClick={handleSubmit}
              type="submit"
            >
              Login
            </Button>

            <Text>
              Don&apso;t have an acount{" "}
              <Link to={"/signup"} style={{ color: "rgba(246, 33, 75, 1)" }}>
                Sign up
              </Link>
            </Text>
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
