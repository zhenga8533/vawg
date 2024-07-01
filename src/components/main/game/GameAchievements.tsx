import { Heading, List, ListItem } from "@chakra-ui/react";
import useData from "../../../hooks/useData";

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
  const { results, error, loading } = useData<Achievement>(`/games/${slug}/achievements`);

  return (
    <>
      <Heading size="md" mt={5}>
        Achievements
      </Heading>
      <List>
        {results.map((achievement) => (
          <ListItem key={achievement.id}>
            {achievement.name} - {achievement.percent}% complete
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GameAchievements;
