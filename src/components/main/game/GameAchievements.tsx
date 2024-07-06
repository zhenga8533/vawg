import { HStack, Heading, Image, List, ListItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import useData from "../../../hooks/useData";
import ShowButton from "../../general/ShowButton";
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

  if (error || results.length === 0) return null;
  return (
    <>
      <Heading size="md" mt={5}>
        Achievements
      </Heading>
      {loading && <List>{skeletons}</List>}
      <List>
        {results.slice(0, showAll ? results.length : 5).map((achievement) => (
          <ListItem key={achievement.id} my={1}>
            <HStack>
              <Image src={achievement.image} alt={achievement.name} boxSize="32px" />
              <Text fontWeight="bold">{achievement.name}:</Text>
              <Text color="gray">({achievement.percent}%)</Text>
            </HStack>
            <Text fontSize="sm" mb={2}>
              {achievement.description}
            </Text>
          </ListItem>
        ))}
      </List>
      {results.length > 5 && <ShowButton showAll={showAll} setShowAll={setShowAll} />}
    </>
  );
};

export default GameAchievements;
