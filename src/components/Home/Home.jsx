import { Center, Box, HStack, VStack, Tag, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <Center
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Heading as={"h1"}>Trendings</Heading>
      <Box w={"70%"} bgColor={"white"} p={4}>
        <HStack gap={"3rem"}>
          <Box
            bgPosition={"center"}
            opacity={".9"}
            bgSize={"cover"}
            bgImage={"https://images.alphacoders.com/605/605592.png"}
            width={"650px"}
            height={"380"}
            display={"flex"}
            alignItems={"flex-start"}
            flexDirection={"column"}
            p={"3"}
            pt={"64"}
          >
            <Tag
              borderRadius={"none"}
              fontSize={"medium"}
              variant={"solid"}
              bgColor={"red.600"}
            >
              Sage of Six Path
            </Tag>
            <Heading
              as={"h3"}
              bgColor={"rgba(0, 0, 0, 0.4)"}
              size={"lg"}
              color={"white"}
              noOfLines={"1"}
            >
              Naruto and Sasuke vs Madara Uchiha
            </Heading>
          </Box>
          <VStack>
            <Center flexDirection={"column"} gap={"22"}>
              <Box
                bgPosition={"center"}
                opacity={".9"}
                bgSize={"cover"}
                bgImage={"https://cdn.wallpapersafari.com/56/26/aLIKek.png"}
                width={"25rem"}
                height={"11rem"}
                display={"flex"}
                alignItems={"flex-start"}
                flexDirection={"column"}
                p={"3"}
                pt={"24"}
              >
                <Tag
                  borderRadius={"none"}
                  fontSize={"medium"}
                  variant={"solid"}
                  bgColor={"red.600"}
                >
                  Naruto Baryon mode
                </Tag>
                <Heading
                  as={"h3"}
                  bgColor={"rgba(0, 0, 0, 0.4)"}
                  size={"lg"}
                  color={"white"}
                  noOfLines={"1"}
                >
                  Naruto unlocks His Baryon mode
                </Heading>
              </Box>
              <Box
                bgPosition={"center"}
                bgSize={"cover"}
                bgImage={
                  "https://e0.pxfuel.com/wallpapers/688/540/desktop-wallpaper-baryon-mode-naruto-ultra.jpg"
                }
                opacity={".9"}
                width={"25rem"}
                height={"11rem"}
                display={"flex"}
                alignItems={"flex-start"}
                flexDirection={"column"}
                p={"3"}
                pt={"24"}
              >
                <Tag
                  borderRadius={"none"}
                  fontSize={"medium"}
                  variant={"solid"}
                  bgColor={"red.600"}
                >
                  Naruto Baryon mode
                </Tag>
                <Heading
                  as={"h3"}
                  bgColor={"rgba(0, 0, 0, 0.4)"}
                  size={"lg"}
                  color={"white"}
                  noOfLines={"1"}
                >
                  Naruto unlocks His Baryon mode
                </Heading>
              </Box>
            </Center>
          </VStack>
        </HStack>
      </Box>
    </Center>
  );
};

export default Home;
