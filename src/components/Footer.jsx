import { Center, HStack, Stack } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Center
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      justifyContent={"center"}
      width={"100%"}
      position={"absolute"}
      right={0}
      color={"white"}
    >
      <HStack
        w={["100%", "70%"]}
        bgColor={"black"}
        color={"white"}
        height={"20"}
        display={"flex"}
        p={4}
        justifyContent={"space-between"}
      >
        <Stack color={"white"}>10</Stack>
        <Stack>dfgshfsdfh</Stack>
      </HStack>
    </Center>
  );
};

export default Footer;
