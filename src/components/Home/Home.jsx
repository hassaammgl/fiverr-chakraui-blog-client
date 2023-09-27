import { Center, Box,Grid,GridItem } from "@chakra-ui/react";


const Home = () => {
  return (
    <Center display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      justifyContent={"center"}>

      <Box
        bgColor={"white"}
        w={"70%"}
        p={4}
        border={"2px"}
      >
        <Grid templateColumns={'1fr 2fr'} templateRows={"600px 300px 300px"}>
          <GridItem border={'1px'} width={'300px'}/>
          <GridItem border={'1px'} width={'300px'}/>
          <GridItem border={'1px'} width={'300px'}/>
        </Grid>
      </Box>
    </Center>
  )
}

export default Home
