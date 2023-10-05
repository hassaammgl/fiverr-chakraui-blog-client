import logo from "../assets/logo.png";
import { Center, Box, Image, HStack, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Center
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Center bgColor={"white"} w={"70%"} p={4}>
        <Image height={"10"} src={logo} alt="Logo" />
      </Center>
      <HStack
        w={["100%", "70%"]}
        bgColor={"black"}
        color={"white"}
        height={"20"}
        display={"flex"}
        p={4}
        justifyContent={"space-between"}
      >
        <Box>
          <Link style={{ padding: "0px 10px" }} to={"/"}>
            Home
          </Link>
          <Link style={{ padding: "0px 10px" }} to={"/category"}>
            Category
          </Link>
          <Link style={{ padding: "0px 10px" }} to={"/about"}>
            About
          </Link>
          <Link style={{ padding: "0px 10px" }} to={"/contact"}>
            Contact
          </Link>
        </Box>
        <Box
          width={"96"}
          display={["none", "flex"]}
          p={"0px 5px"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Input
            p={"1"}
            variant={"flushed"}
            color={"red.400"}
            focusBorderColor="red.700"
          />
          <button className="search-btn" type="submit">
            <span className="material-symbols-outlined">search</span>
          </button>
        </Box>
      </HStack>
    </Center>
  );
};

export default Header;
