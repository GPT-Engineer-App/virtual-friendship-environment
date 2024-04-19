import React, { Component } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error caught by Error Boundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
          <Heading fontSize="xl">Something went wrong.</Heading>
          <Text mt={4}>We're having trouble loading this content. Please try again later.</Text>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
