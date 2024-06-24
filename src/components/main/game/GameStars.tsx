import { HStack, Icon } from "@chakra-ui/react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

interface GameStarsProps {
  rating: number;
}

const GameStars = ({ rating }: GameStarsProps) => {
  const renderStars = (rating: number) => {
    const roundedRating = Math.round(rating * 2) / 2;
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const icon =
        roundedRating >= i
          ? FaStar
          : roundedRating + 0.5 === i
          ? FaStarHalfAlt
          : FaRegStar;
      stars.push(<Icon as={icon} color="yellow.500" fontSize="xl" key={i} />);
    }
    return stars;
  };

  return <HStack marginTop={3}>{renderStars(rating)}</HStack>;
};

export default GameStars;
