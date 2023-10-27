import { Box, Center, Button, Image, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  document.title = "Blog Page";

  return (
    <Center width={"100%"}>
      <Blog />
    </Center>
  );
};

const Blog = () => {
  const title = "Naruto and Sasuke in his Sage of Six Paths Mode";
  const author = "Naruto Paths";
  const time = "16 dec 2014 12:34:44";
  return (
    <Center width={"70%"} p={4} flexDirection={"column"}>
      <Image
        width={["80", "100%"]}
        src="https://wallpaperset.com/w/full/c/8/b/156757.jpg"
      ></Image>
      <Heading width={["80", "100%"]} as={"h2"} pt={3} pb={3}>
        {title}
      </Heading>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        width={["80", "100%"]}
      >
        <Text
          color={"red.300"}
          textDecoration={"underline"}
          fontWeight={"bold"}
        >
          <Link to={"/author/:author_id"}>{author}</Link>
        </Text>
        <Text
          color={"blackAlpha.700"}
          textDecoration={"underline"}
          fontWeight={"bold"}
        >
          {time}
        </Text>
      </Box>
      <Article />
      <MoreBlogs />
    </Center>
  );
};

const Article = () => {
  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
  obcaecati eligendi perspiciatis, esse rem tempora mollitia error harum
  nostrum necessitatibus reiciendis nesciunt facilis iusto quia a dolore
  repudiandae rerum. Beatae? Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Deleniti obcaecati eligendi perspiciatis, esse rem
  tempora mollitia error harum nostrum necessitatibus reiciendis nesciunt
  facilis iusto quia a dolore repudiandae rerum. Beatae? Lorem ipsum dolor
  sit amet consectetur adipisicing elit. Deleniti obcaecati eligendi
  perspiciatis, esse rem tempora mollitia error harum nostrum necessitatibus
  reiciendis nesciunt facilis iusto quia a dolore repudiandae rerum. Beatae?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
  obcaecati eligendi perspiciatis, esse rem tempora mollitia error harum
  nostrum necessitatibus reiciendis nesciunt facilis iusto quia a dolore
  repudiandae rerum. Beatae? Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Deleniti obcaecati eligendi perspiciatis, esse rem
  tempora mollitia error harum nostrum necessitatibus reiciendis nesciunt
  facilis iusto quia a dolore repudiandae rerum. Beatae? Lorem ipsum dolor
  sit amet consectetur adipisicing elit. Deleniti obcaecati eligendi
  perspiciatis, esse rem tempora mollitia error harum nostrum necessitatibus
  reiciendis nesciunt facilis iusto quia a dolore repudiandae rerum. Beatae?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
  obcaecati eligendi perspiciatis, esse rem tempora mollitia error harum
  nostrum necessitatibus reiciendis nesciunt facilis iusto quia a dolore
  repudiandae rerum. Beatae? Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Deleniti obcaecati eligendi perspiciatis, esse rem
  tempora mollitia error harum nostrum necessitatibus reiciendis nesciunt
  facilis iusto quia a dolore repudiandae rerum. Beatae? Lorem ipsum dolor
  sit amet consectetur adipisicing elit. Deleniti obcaecati eligendi
  perspiciatis, esse rem tempora mollitia error harum nostrum necessitatibus
  reiciendis nesciunt facilis iusto quia a dolore repudiandae rerum. Beatae?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
  obcaecati eligendi perspiciatis, esse rem tempora mollitia error harum
  nostrum necessitatibus reiciendis nesciunt facilis iusto quia a dolore
  repudiandae rerum. Beatae? Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Deleniti obcaecati eligendi perspiciatis, esse rem
  tempora mollitia error harum nostrum necessitatibus reiciendis nesciunt
  facilis iusto quia a dolore repudiandae rerum. Beatae? Lorem ipsum dolor
  sit amet consectetur adipisicing elit. Deleniti obcaecati eligendi
  perspiciatis, esse rem tempora mollitia error harum nostrum necessitatibus
  reiciendis nesciunt facilis iusto quia a dolore repudiandae rerum. Beatae?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
  obcaecati eligendi perspiciatis, esse rem tempora mollitia error harum
  nostrum necessitatibus reiciendis nesciunt facilis iusto quia a dolore
  repudiandae rerum. Beatae? Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Deleniti obcaecati eligendi perspiciatis, esse rem
  tempora mollitia error harum nostrum necessitatibus reiciendis nesciunt
  facilis iusto quia a dolore repudiandae rerum. Beatae? Lorem ipsum dolor
  sit amet consectetur adipisicing elit. Deleniti obcaecati eligendi
  perspiciatis, esse rem tempora mollitia error harum nostrum necessitatibus
  reiciendis nesciunt facilis iusto quia a dolore repudiandae rerum. Beatae?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
  obcaecati eligendi perspiciatis, esse rem tempora mollitia error harum
  nostrum necessitatibus reiciendis nesciunt facilis iusto quia a dolore
  repudiandae rerum. Beatae? Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Deleniti obcaecati eligendi perspiciatis, esse rem
  tempora mollitia error harum nostrum necessitatibus reiciendis nesciunt
  facilis iusto quia a dolore repudiandae rerum. Beatae? Lorem ipsum dolor
  sit amet consectetur adipisicing elit. Deleniti obcaecati eligendi
  perspiciatis, esse rem tempora mollitia error harum nostrum necessitatibus
  reiciendis nesciunt facilis iusto quia a dolore repudiandae rerum. Beatae?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
  obcaecati eligendi perspiciatis, esse rem tempora mollitia error harum
  nostrum necessitatibus reiciendis nesciunt facilis iusto quia a dolore
  repudiandae rerum. Beatae? Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Deleniti obcaecati eligendi perspiciatis, esse rem
  tempora mollitia error harum nostrum necessitatibus reiciendis nesciunt
  facilis iusto quia a dolore repudiandae rerum. Beatae? Lorem ipsum dolor
  sit amet consectetur adipisicing elit. Deleniti obcaecati eligendi
  perspiciatis, esse rem tempora mollitia error harum nostrum necessitatibus
  reiciendis nesciunt facilis iusto quia a dolore repudiandae rerum. Beatae?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
  obcaecati eligendi perspiciatis, esse rem tempora mollitia error harum
  nostrum necessitatibus reiciendis nesciunt facilis iusto quia a dolore
  repudiandae rerum. Beatae? Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Deleniti obcaecati eligendi perspiciatis, esse rem
  tempora mollitia error harum nostrum necessitatibus reiciendis nesciunt
  facilis iusto quia a dolore repudiandae rerum. Beatae? Lorem ipsum dolor
  sit amet consectetur adipisicing elit. Deleniti obcaecati eligendi
  perspiciatis, esse rem tempora mollitia error harum nostrum necessitatibus
  reiciendis nesciunt facilis iusto quia a dolore repudiandae rerum. Beatae?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
  obcaecati eligendi perspiciatis, esse rem tempora mollitia error harum
  nostrum necessitatibus reiciendis nesciunt facilis iusto quia a dolore
  repudiandae rerum. Beatae?`;
  return (
    <Box
      width={["80", "100%"]}
      pt={"4"}
      className="article"
      textAlign={"justify"}
    >
      {text.substring(0, text.length / 2)}
      <Image
        width={["80", "100%"]}
        p={3}
        src="https://wallpaperset.com/w/full/c/8/b/156757.jpg"
      ></Image>
      {text.substring(text.length / 2, text.length)}
    </Box>
  );
};

const MoreBlogs = () => {
  return (
    <Center width={"100%"} p={4} flexDirection={"column"}>
      <Heading as={"h4"} p={4}>
        Related
      </Heading>
      <Box
        w={["80", "100%"]}
        display={"flex"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        p={3}
        gap={"10"}
      >
        <More />
        <More />
        <More />
        <More />
        <More />
        <More />
        <More />
      </Box>
    </Center>
  );
};

const More = () => {
  const title = "Naruto and Sasuke in his Sage of Six Paths Mode";
  return (
    <Box
      w={400}
      bgPos={"center"}
      backgroundSize={"cover"}
      bgImage={"https://wallpaperset.com/w/full/c/8/b/156757.jpg"}
      h={200}
      p={5}
    >
      <Link>
        <Heading
          as={"h3"}
          color={"white"}
          bgColor={"blackAlpha.800"}
          fontSize={"large"}
          p={2}
          position={"relative"}
          top={["55px", "80px"]}
          fontWeight={"light"}
        >
          {title.length > 40 ? `${title.substring(0, 40)}...` : title}
        </Heading>
        <Button
          position={"relative"}
          top={["55px", "80px"]}
          mt={2}
          color={"white"}
          fontWeight={"hairline"}
          _hover={{ opacity: 0.8 }}
          _active={{ fontSize: "17" }}
          borderRadius={"0"}
          border={"none"}
          bgGradient={"linear(to-b,rgba(246, 33, 75, 1), #FF0080)"}
        >
          Read More {">>"}
        </Button>
      </Link>
    </Box>
  );
};
export default BlogPage;
