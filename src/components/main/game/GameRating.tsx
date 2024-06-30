import { Box, HStack, Heading, Icon, Text, Tooltip } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { MdCancel, MdQuestionMark, MdRecommend, MdSentimentDissatisfied, MdStar } from "react-icons/md";
import { GameData } from "../../../hooks/useGame";
import { capitalize, commafy } from "../../../services/formatting";

interface GameRatingProps {
  ratings: GameData["ratings"];
}

const GameRating = ({ ratings }: GameRatingProps) => {
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
      <HStack mt={3} spacing={3}>
        <Heading size="md">Ratings</Heading>
        <Text color="gray" fontSize="md">
          {commafy(ratings.reduce((acc, rating) => acc + rating.count, 0))}
        </Text>
      </HStack>
      <Box display="flex" width="100%" height="48px" borderRadius="sm" mt={3} overflow="hidden">
        {sortedRatings.map((rating) => (
          <Tooltip label={`${rating.percent}%`} key={rating.id} hasArrow placement="top">
            <Box
              flexBasis={`${rating.percent}%`}
              bgGradient={`linear(to-b, ${ratingColors[rating.title]}.400, ${ratingColors[rating.title]}.900)`}
              height="100%"
              position="relative"
            >
              <Icon as={ratingIcons[rating.title] ?? MdQuestionMark} position="absolute" bottom="0" left="0" m="2" />
            </Box>
          </Tooltip>
        ))}
      </Box>
      <HStack mt={1} spacing={3} wrap="wrap">
        {ratings.map((rating) => (
          <Box key={rating.id} display="flex" alignItems="center">
            <Icon as={ratingIcons[rating.title] ?? MdQuestionMark} color={ratingColors[rating.title] + ".400"} />
            <Text fontWeight="bold" ml={1} mr={2}>
              {capitalize(rating.title)}
            </Text>
            <Text color="gray">{commafy(rating.count)}</Text>
          </Box>
        ))}
      </HStack>
    </>
  );
};

export default GameRating;
