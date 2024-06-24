import { Box, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import cropImageURL from "../../services/image-url";
import { Creator } from "../../hooks/useCreators";

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
        <Heading fontSize="2xl">{creator.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default CreatorCard;
