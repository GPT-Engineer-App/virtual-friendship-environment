import React from "react";
import { Box, Button, Container, Heading, VStack } from "@chakra-ui/react";

function WelcomePage() {
  return (
    <Container maxW="container.xl">
      <VStack spacing={8} align="stretch">
        <Box h="50%" p={5}>
          <Heading as="h1" size="2xl">
            Welcome to the Digital ReaLLMs
          </Heading>
          <Heading as="h2" size="lg" mt={4}>
            Where your everyday AI tool becomes an interactive friend.
          </Heading>
        </Box>
        <Box h="50%" p={5} d="flex" justifyContent="space-around">
          <Button colorScheme="blue" size="lg">
            Create or Modify Avatar
          </Button>
          <Button colorScheme="teal" size="lg">
            Select Model
          </Button>
        </Box>
      </VStack>
    </Container>
  );
}

export default WelcomePage;
