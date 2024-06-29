import { Grid, GridItem } from "@chakra-ui/react";
import GameRoutes from "./GameRoutes";

interface GameDetailGridProps {
  left: React.ReactNode;
}

const GameDetailGrid = ({ left }: GameDetailGridProps) => {
  return (
    <Grid
      gap={50}
      marginTop={5}
      templateColumns={{ base: "1fr", md: "70% 25%" }}
      templateAreas={{ base: '"left" "right"', md: '"left right"' }}
    >
      <GridItem area="left">{left}</GridItem>
      <GridItem area="right">
        <GameRoutes />
      </GridItem>
    </Grid>
  );
};

export default GameDetailGrid;
