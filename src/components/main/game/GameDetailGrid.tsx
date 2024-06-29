import { Grid } from "@chakra-ui/react";
import GameRoutes from "./GameRoutes";

interface GameDetailGridProps {
  left: React.ReactNode;
}

const GameDetailGrid = ({ left }: GameDetailGridProps) => {
  return (
    <Grid gap={4} marginTop={5} templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}>
      {left}
      <GameRoutes />
    </Grid>
  );
};

export default GameDetailGrid;
