import { Game } from "../../../hooks/useGames";
import { Button, Card, CardBody, HStack, Image } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import cropImageURL from "../../../services/image-url";
import GameStars from "./GameStars";
import { useNavigate } from "react-router-dom";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const navigate = useNavigate();

  return (
    <Card>
      <Image src={cropImageURL(game.background_image)} alt={game.name} />
      <CardBody display="flex" flexDirection="column" justifyContent="space-between">
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIcons platforms={game.parent_platforms.map((p) => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Button
          color="white"
          fontSize="2xl"
          onClick={() => navigate(`games/${game.slug}`)}
          variant="link"
          whiteSpace="normal"
        >
          {game.name}
        </Button>
        <GameStars rating={game.rating} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
