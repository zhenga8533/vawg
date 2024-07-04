import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const BadRoute = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" fontSize="xl" height="75vh" display="flex" alignItems="center" justifyContent="center">
      <VStack spacing={8}>
        <Heading>404, page not found!</Heading>
        <Text>Whoops! We couldn't find that page.</Text>
        <Button colorScheme="red" size="lg" onClick={() => navigate("/")}>
          Home Page
        </Button>
      </VStack>
    </Box>
  );
};

export default BadRoute;
