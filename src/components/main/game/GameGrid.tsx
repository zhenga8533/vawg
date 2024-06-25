import GameCard from "./GameCard";
import { Game } from "../../../hooks/useGames";
import CardGrid from "../../general/CardGrid";
import CardContainer from "../../general/CardContainer";

interface GameGridProps {
  gameData: {
    data: Game[];
    error: string | null;
    loading: boolean;
  };
}

const GameGrid = ({ gameData }: GameGridProps) => {
  const { data, error, loading } = gameData;
  const cards = data.map((game: Game) => (
    <CardContainer key={game.id}>
      <GameCard game={game} />
    </CardContainer>
  ));

  return <CardGrid cards={cards} error={error} loading={loading} />;
};

export default GameGrid;
