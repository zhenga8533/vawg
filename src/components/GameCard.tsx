import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import cropImageURL from "../services/image-url";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image src={cropImageURL(game.background_image)} alt={game.name} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
