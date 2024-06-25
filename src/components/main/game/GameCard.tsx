import { Game } from "../../../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import cropImageURL from "../../../services/image-url";
import GameStars from "./GameStars";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image src={cropImageURL(game.background_image)} alt={game.name} />
      <CardBody display="flex" flexDirection="column" justifyContent="space-between">
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIcons platforms={game.parent_platforms.map((p) => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
        <GameStars rating={game.rating} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
