import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { MdCancel, MdQuestionMark, MdRecommend, MdSentimentDissatisfied, MdStar } from "react-icons/md";
import { GameData } from "../../../hooks/useGame";
import { commafy } from "../../../services/formatting";

interface GameRatingProps {
  data: GameData;
}

const GameRating = ({ data }: GameRatingProps) => {
  const ratings = data.ratings || [];

  const ratingColors: { [key: string]: string } = {
    exceptional: "green",
    recommended: "blue",
    meh: "yellow",
    skip: "red",
  };
  const ratingIcons: { [key: string]: IconType } = {
    exceptional: MdStar,
    recommended: MdRecommend,
    meh: MdSentimentDissatisfied,
    skip: MdCancel,
  };

  const ratingsOrder = ["exceptional", "recommended", "meh", "skip"];
  const sortedRatings = ratings.sort((a, b) => {
    return ratingsOrder.indexOf(a.title.toLowerCase()) - ratingsOrder.indexOf(b.title.toLowerCase());
  });

  return (
    <>
      <Box display="flex" width="100%" height="48px" borderRadius="sm" overflow="hidden">
        {sortedRatings.map((rating) => (
          <Box
            key={rating.id}
            flexBasis={`${rating.percent}%`}
            bgGradient={`linear(to-b, ${ratingColors[rating.title]}.300, ${ratingColors[rating.title]}.700)`}
            height="100%"
            position="relative"
          >
            <Icon as={ratingIcons[rating.title] ?? MdQuestionMark} position="absolute" bottom="0" left="0" m="2" />
          </Box>
        ))}
      </Box>
      <HStack spacing={3}>
        {ratings.map((rating) => (
          <Box key={rating.id} display="flex" alignItems="center">
            <Icon as={ratingIcons[rating.title] ?? MdQuestionMark} color={ratingColors[rating.title] + ".400"} />
            <Text ml={1} mr={2}>
              {rating.title}
            </Text>
            <Text>{commafy(rating.count)}</Text>
          </Box>
        ))}
      </HStack>
    </>
  );
};

export default GameRating;
