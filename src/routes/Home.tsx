import { Box, Button, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { BiSolidRocket } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" fontSize="xl" height="75vh" display="flex" alignItems="center" justifyContent="center">
      <VStack spacing={8}>
        <Heading>Welcome to VAWG!</Heading>
        <Text>Get started by checking out some popular games.</Text>
        <Button colorScheme="blue" rightIcon={<BiSolidRocket />} size="lg" onClick={() => navigate("/games")}>
          Explore
        </Button>
        <Text>
          Credits to the{" "}
          <Link color="teal" href="https://rawg.io/" isExternal>
            RAWG API
          </Link>
          .
        </Text>
      </VStack>
    </Box>
  );
};

export default Home;
