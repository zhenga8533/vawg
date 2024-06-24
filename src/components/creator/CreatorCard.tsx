import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import cropImageURL from "../../services/image-url";
import { Creator } from "../../hooks/useCreators";
import { IoPersonOutline } from "react-icons/io5";

interface CreatorCardProps {
  creator: Creator;
}

const CreatorCard = ({ creator }: CreatorCardProps) => {
  return (
    <Card>
      <Box position="relative">
        <Image
          src={cropImageURL(creator.image_background)}
          alt={creator.name}
        />
        <Box
          position="absolute"
          top="0"
          right="0"
          bottom="0"
          left="0"
          bg="black"
          opacity="0.5"
        />
        <Image
          src={creator.image}
          alt={creator.name}
          boxSize="144px"
          borderRadius="full"
          position="absolute"
          left="50%"
          top="50%"
          transform="translate(-50%, -50%)"
        />
      </Box>
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box marginBottom={3} textAlign="center">
          <Heading fontSize="2xl">{creator.name}</Heading>
          <Text color="gray.300" fontSize="small">
            {creator.positions
              .map(
                (position) =>
                  position.name.charAt(0).toUpperCase() + position.name.slice(1)
              )
              .join(", ")}
          </Text>
        </Box>
        <Box>
          <HStack justifyContent="space-between">
            <Text fontWeight="bold">Known for</Text>
            <Text color="gray">{creator.games_count}</Text>
          </HStack>
          <hr />
          {creator.games.map((game) => (
            <HStack justifyContent="space-between">
              <Text
                key={game.id}
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="nowrap"
              >
                {game.name}
              </Text>
              <HStack spacing={1}>
                <Text color="gray">{game.added}</Text>
                <Icon as={IoPersonOutline} />
              </HStack>
            </HStack>
          ))}
        </Box>
      </CardBody>
    </Card>
  );
};

export default CreatorCard;
