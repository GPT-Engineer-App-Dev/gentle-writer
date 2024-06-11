import { Container, VStack, Heading, Text, Box, Image, Link, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to My Blog</Heading>
          <Text fontSize="lg">Sharing my thoughts and experiences</Text>
        </Box>
        <Box>
          <Button as={RouterLink} to="/add-post" colorScheme="teal" mb={4}>Add New Post</Button>
        </Box>
        {posts.map((post, index) => (
          <Box key={index} borderWidth="1px" borderRadius="md" overflow="hidden" mb={4}>
            <Image src={post.image} alt={post.title} />
            <Box p={4}>
              <Heading as="h2" size="lg" mb={2}>{post.title}</Heading>
              <Text fontSize="md" mb={4}>{post.content}</Text>
            </Box>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;