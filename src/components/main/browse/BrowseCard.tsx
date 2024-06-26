import { Box, Button, Card, CardBody, HStack, Icon, Image, Text } from "@chakra-ui/react";
import cropImageURL from "../../../services/image-url";
import { IoPersonOutline } from "react-icons/io5";
import { commafy } from "../../../services/formatting";
import { Browse } from "../../../hooks/useBrowses";
import { useNavigate } from "react-router-dom";

interface BrowseCardProps {
  browse: Browse;
}

const BrowseCard = ({ browse }: BrowseCardProps) => {
  const navigate = useNavigate();

  return (
    <Card>
      <Image src={cropImageURL(browse.image_background)} alt={browse.name} />
      <CardBody display="flex" flexDirection="column" justifyContent="space-between">
        <Box marginBottom={3} textAlign="center">
          <Button color="white" fontSize="2xl" onClick={() => navigate(browse.slug)} variant="link" whiteSpace="normal">
            {browse.name}
          </Button>
        </Box>
        <Box>
          <HStack justifyContent="space-between">
            <Text fontWeight="bold">Games</Text>
            <Text color="gray">{commafy(browse.games_count)}</Text>
          </HStack>
          <hr />
          {browse.games.map((game) => (
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

export default BrowseCard;
