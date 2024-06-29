import { Button, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const GameRoutes = () => {
  const navigate = useNavigate();
  const slug = location.pathname.split("/")[2];

  return (
    <VStack spacing={4}>
      <Button variant="link" onClick={() => navigate(`/games/${slug}`)}>
        About
      </Button>
    </VStack>
  );
};

export default GameRoutes;
