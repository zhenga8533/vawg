import { Button, HStack, Heading, Image, List, ListItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import useData from "../../../hooks/useData";
import SkeletonListItem from "../../general/SkeletonListItem";

interface GameAchievementsProps {
  slug: string;
}

interface Achievement {
  id: number;
  name: string;
  description: string;
  image: string;
  percent: number;
}

const GameAchievements = ({ slug }: GameAchievementsProps) => {
  const skeletons = Array.from({ length: 5 }, (_, i) => <SkeletonListItem key={i} size="32px" />);
  const { results, error, loading } = useData<Achievement>(`/games/${slug}/achievements`);
  const [showAll, setShowAll] = useState(false);

  if (error) return null;
  return (
    <>
      <Heading size="md" mt={5}>
        Achievements
      </Heading>
      {loading && <List>{skeletons}</List>}
      <List>
        {results.slice(0, showAll ? results.length : 5).map((achievement) => (
          <ListItem key={achievement.id} marginY={1}>
            <HStack>
              <Image src={achievement.image} alt={achievement.name} boxSize="32px" />
              <Text fontWeight="bold">{achievement.name}:</Text>
              <Text>{achievement.description}</Text>
              <Text color="gray">({achievement.percent}%)</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
      <Button
        color="gray"
        leftIcon={showAll ? <BsChevronUp /> : <BsChevronDown />}
        onClick={() => setShowAll(!showAll)}
        padding={0}
        variant="link"
      >
        {showAll ? "Hide" : "Show all"}
      </Button>
    </>
  );
};

export default GameAchievements;
