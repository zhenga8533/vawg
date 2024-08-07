import { Box, Button, Card, CardBody, HStack, Heading, Icon, Image, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Creator } from "../../../hooks/useCreators";
import { capitalize, commafy } from "../../../services/formatting";
import cropImageURL from "../../../services/image-url";

interface CreatorCardProps {
  creator: Creator;
}

const CreatorCard = ({ creator }: CreatorCardProps) => {
  const navigate = useNavigate();
  const boxRef = useRef<HTMLDivElement>(null);
  const [imageSize, setImageSize] = useState("0px");

  useEffect(() => {
    const updateSize = () => {
      if (boxRef.current) {
        const width = boxRef.current.offsetWidth;
        setImageSize(`${width / 2}px`);
      }
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Card>
      <Box position="relative" ref={boxRef}>
        <Image src={cropImageURL(creator.image_background)} alt={creator.name} />
        <Box position="absolute" top="0" right="0" bottom="0" left="0" bg="black" opacity="0.5" />
        <Image
          src={creator.image}
          alt={creator.name}
          boxSize={imageSize}
          borderRadius="full"
          position="absolute"
          left="50%"
          top="50%"
          transform="translate(-50%, -50%)"
        />
      </Box>
      <CardBody display="flex" flexDirection="column" justifyContent="space-between">
        <Box mb={3} textAlign="center">
          <Heading fontSize="2xl">{creator.name}</Heading>
          <Text color="gray.300" fontSize="small">
            {creator.positions.map((position) => capitalize(position.name)).join(", ")}
          </Text>
        </Box>
        <Box>
          <HStack justifyContent="space-between">
            <Text fontWeight="bold">Known for</Text>
            <Text color="gray">{creator.games_count}</Text>
          </HStack>
          <hr />
          {creator.games.map((game) => (
            <HStack justifyContent="space-between" key={game.id}>
              <Button onClick={() => navigate(`/games/${game.slug}`)} variant="link">
                <Box textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">
                  {game.name}
                </Box>
              </Button>
              <HStack spacing={1}>
                <Text color="gray">{commafy(game.added)}</Text>
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
