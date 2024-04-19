// Digital ReaLLMs - A Virtual Environment Web Application
import { Box, Container, Heading, Text, Button, Image, Flex, Spacer } from "@chakra-ui/react";
import { FaRobot, FaPaintBrush, FaUsers, FaCloud } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW={{ base: "container.sm", md: "container.md", lg: "container.xl" }}>
      <Flex direction="column" align="center" my={10}>
        <Heading as="h1" size="2xl" mb={2}>
          Digital ReaLLMs
        </Heading>
        <Text fontSize="xl" mb={6}>
          Envisioning a virtual environment with AI companions.
        </Text>
        <Image src="https://images.unsplash.com/photo-1699127435882-1333813a846f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwZW52aXJvbm1lbnR8ZW58MHx8fHwxNzEzNDk0NTY4fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" mb={6} />

        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Heading as="h3" size="lg" mb={4}>
            Features
          </Heading>
          <Flex direction={{ base: "column", md: "row" }} align="center">
            <Box p={4} flex="1">
              <FaRobot size="3em" />
              <Heading as="h4" size="md" my={2}>
                AI Companions
              </Heading>
              <Text>Customizable AI companions that interact in real-time.</Text>
            </Box>
            <Spacer />
            <Box p={4} flex="1">
              <FaPaintBrush size="3em" />
              <Heading as="h4" size="md" my={2}>
                Visual Inputs
              </Heading>
              <Text>AI can perceive and respond to visual elements.</Text>
            </Box>
            <Spacer />
            <Box p={4} flex="1">
              <FaUsers size="3em" />
              <Heading as="h4" size="md" my={2}>
                Shared Spaces
              </Heading>
              <Text>Interact in shared virtual spaces with your AI.</Text>
            </Box>
            <Spacer />
            <Box p={4} flex="1">
              <FaCloud size="3em" />
              <Heading as="h4" size="md" my={2}>
                Real-time Interaction
              </Heading>
              <Text>Optimized for real-time interaction without delays.</Text>
            </Box>
          </Flex>
        </Box>

        <Button rightIcon={<FaRobot />} colorScheme="blue" mt={10} size="lg" onClick={() => (window.location.href = "/welcome")}>
          Start Your Journey
        </Button>
      </Flex>
    </Container>
  );
};

export default Index;
