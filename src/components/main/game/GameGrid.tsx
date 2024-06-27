import GameCard from "./GameCard";
import { Game } from "../../../hooks/useGames";
import CardGrid from "../../general/CardGrid";
import CardContainer from "../../general/CardContainer";
import { Data } from "../../../hooks/useData";

interface GameGridProps {
  gameData: Data;
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
