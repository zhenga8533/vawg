import { SimpleGrid, Text } from "@chakra-ui/react";
import CardContainer from "./CardContainer";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import { Game } from "../hooks/useGames";

interface GameGridProps {
  gameData: {
    data: Game[];
    error: string | null;
    loading: boolean;
  };
}

const GameGrid = ({ gameData }: GameGridProps) => {
  const { data, error, loading } = gameData;
  const skeletons = Array.from({ length: 20 }, (_, i) => (
    <CardContainer key={i}>
      <SkeletonCard />
    </CardContainer>
  ));

  if (error)
    return (
      <Text color="red" marginTop={3} textAlign="center">
        {error}
      </Text>
    );
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={5}
      padding={10}
    >
      {loading && skeletons}
      {data.map((game: Game) => (
        <CardContainer key={game.id}>
          <GameCard game={game} />
        </CardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
