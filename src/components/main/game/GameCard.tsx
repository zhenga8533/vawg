import { useState } from "react";
import { Box, Button, Card, CardBody, HStack, Image } from "@chakra-ui/react";
import { Game } from "../../../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import cropImageURL from "../../../services/image-url";
import GameStars from "./GameStars";
import { useNavigate } from "react-router-dom";
// import RatingEmoji from "./RatingEmoji";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const navigate = useNavigate();
  const [ssIndex, setSsIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const screenshotCount = game.short_screenshots?.length || 0;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!screenshotCount) return;
    const cardWidth = event.currentTarget.offsetWidth * 1.05;
    const mouseX = event.clientX - event.currentTarget.getBoundingClientRect().left;
    const newScreenshotIndex = Math.floor((mouseX / cardWidth) * screenshotCount);

    setSsIndex(newScreenshotIndex % screenshotCount);
  };

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setSsIndex(0);
        setIsHovered(false);
      }}
      onMouseMove={handleMouseMove}
    >
      <Box position="relative">
        <Image src={cropImageURL(game.short_screenshots?.[ssIndex]?.image || game.background_image)} alt={game.name} />
        {isHovered && (
          <HStack justifyContent="center" paddingInline={3} position="absolute" bottom={3} left={0} right={0}>
            {screenshotCount &&
              game.short_screenshots?.map((_, index) => (
                <Box
                  key={index}
                  width={`${100 / screenshotCount}%`}
                  height="3px"
                  backgroundColor={ssIndex === index ? "blue.500" : "gray.300"}
                  marginX="1px"
                />
              ))}
          </HStack>
        )}
      </Box>
      <CardBody display="flex" flexDirection="column" justifyContent="space-between">
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIcons platforms={game.parent_platforms?.map((p) => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Button
          color="white"
          fontSize="2xl"
          onClick={() => navigate(`/games/${game.slug}`)}
          variant="link"
          whiteSpace="normal"
        >
          {game.name}
        </Button>
        <HStack justifyContent="space-between">
          <GameStars rating={game.rating} />
          {/* <RatingEmoji rating={game.rating_top} /> */}
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
