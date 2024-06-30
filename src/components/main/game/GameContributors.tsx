import { Button, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Creator } from "../../../hooks/useCreators";
import useData from "../../../hooks/useData";

interface GameContributorsProps {
  slug: string;
}

const GameContributors = ({ slug }: GameContributorsProps) => {
  const navgiate = useNavigate();
  const { results, loading } = useData<Creator>(`/games/${slug}/development-team`);
  const [showAll, setShowAll] = useState(false);

  if (loading) return <Text>Loading...</Text>;
  return (
    <>
      <Heading size="md" marginBottom={3}>
        Top Contributors
      </Heading>
      {results.slice(0, showAll ? results.length : 5).map((contributor) => (
        <>
          <HStack justifyContent="space-between" key={contributor.id} spacing={3}>
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
              {contributor.positions
                .map((position) => position.name.charAt(0).toUpperCase() + position.name.slice(1))
                .join(", ")}
            </Text>
          </HStack>
          <hr />
        </>
      ))}
      {results.length > 5 && (
        <Button
          color="gray"
          leftIcon={showAll ? <BsChevronUp /> : <BsChevronDown />}
          onClick={() => setShowAll(!showAll)}
          padding={0}
          variant="link"
        >
          {showAll ? "Hide" : "Show all"}
        </Button>
      )}
    </>
  );
};

export default GameContributors;
