import { Center, Heading } from "@chakra-ui/react";
import MostViewed from "./MostViewed";
// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  document.title = "Home Page";

  // const navigate = useNavigate();
  // function getCookie(cname) {
  //   let name = cname + "=";
  //   let ca = document.cookie.split(";");
  //   for (let i = 0; i < ca.length; i++) {
  //     let c = ca[i];
  //     while (c.charAt(0) == " ") {
  //       c = c.substring(1);
  //     }
  //     if (c.indexOf(name) == 0) {
  //       return c.substring(name.length, c.length);
  //     }
  //   }
  //   return "";
  // }

  useEffect(() => {
    // fiverrChakrauiBlogCookie
    // const ans = getCookie("fiverrChakrauiBlogCookie");
    // if (ans === "") {
    //   navigate("/login");
    // }
  });

  return (
    <Center
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Heading
        bgColor={"black"}
        color={"white"}
        p={"3"}
        w="70%"
        m={3}
        textAlign={"center"}
        as={"h1"}
      >
        Trendings
      </Heading>

      <MostViewed />
    </Center>
  );
};

export default Home;
