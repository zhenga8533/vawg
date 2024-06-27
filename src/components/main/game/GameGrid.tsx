import { Data } from "../../../hooks/useData";
import { Game } from "../../../hooks/useGame";
import CardContainer from "../../general/CardContainer";
import CardGrid from "../../general/CardGrid";
import GameCard from "./GameCard";

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
