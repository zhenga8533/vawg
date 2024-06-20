import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import CardContainer from "./CardContainer";

const GameGrid = () => {
  const { games, error, loading } = useGames();
  const skeletons = Array.from({ length: 12 }, (_, i) => (
    <CardContainer>
      <SkeletonCard key={i} />
    </CardContainer>
  ));

  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={10}
      >
        {loading && skeletons}
        {games.map((game) => (
          <CardContainer>
            <GameCard key={game.id} game={game} />
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
