import { Text } from "@chakra-ui/react";

interface GameRatingProps {
  rating: number;
}

const GameRating = ({ rating }: GameRatingProps) => {
  return <Text>{rating}</Text>;
};

export default GameRating;
