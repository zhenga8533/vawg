import { Box, Button, HStack, Heading, Image, List, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Creator } from "../../../hooks/useCreators";
import useData from "../../../hooks/useData";
import { capitalize } from "../../../services/formatting";
import ShowButton from "../../general/ShowButton";
import SkeletonListItem from "../../general/SkeletonListItem";

interface GameDevelopersProps {
  slug: string;
}

const GameDevelopers = ({ slug }: GameDevelopersProps) => {
  const navgiate = useNavigate();
  const { results, error, loading } = useData<Creator>(`/games/${slug}/development-team`);
  const [showAll, setShowAll] = useState(false);
  const skeletons = Array.from({ length: 5 }, (_, i) => <SkeletonListItem key={i} size="48px" />);

  return (
    <>
      <Heading size="md" mb={3} mt={5}>
        Top Developers
      </Heading>
      {(loading || error) && <List>{skeletons}</List>}
      {!loading &&
        !error &&
        results.slice(0, showAll ? results.length : 5).map((contributor) => (
          <Box key={contributor.id}>
            <HStack justifyContent="space-between" spacing={3}>
              <HStack>
                <Image
                  src={contributor.image || contributor.image_background}
                  alt={contributor.name}
                  boxSize="48px"
                  borderRadius="full"
                  cursor="pointer"
                  onClick={() => navgiate(`/creators/${contributor.slug}`)}
                />
                <Button variant="link" onClick={() => navgiate(`/creators/${contributor.slug}`)}>
                  {contributor.name}
                </Button>
              </HStack>
              <Text whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                {contributor.positions.map((position) => capitalize(position.name)).join(", ")}
              </Text>
            </HStack>
            <hr />
          </Box>
        ))}
      {results.length > 5 && <ShowButton showAll={showAll} setShowAll={setShowAll} />}
    </>
  );
};

export default GameDevelopers;
