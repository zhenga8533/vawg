import { SimpleGrid, Text } from "@chakra-ui/react";
import CardContainer from "./CardContainer";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import useGames from "../hooks/useGames";
import { GameQuery } from "../App";

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { data, error, loading } = useGames(gameQuery);
  const skeletons = Array.from({ length: 12 }, (_, i) => (
    <CardContainer key={i}>
      <SkeletonCard />
    </CardContainer>
  ));

  return (
    <>
      {error && (
        <Text color="red" marginTop={3} textAlign="center">
          {error}
        </Text>
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        padding={10}
      >
        {loading && skeletons}
        {data.map((game) => (
          <CardContainer key={game.id}>
            <GameCard game={game} />
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
