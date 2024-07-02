import { HStack, Heading, Image, List, ListItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import useData from "../../../hooks/useData";
import ShowButton from "../../general/ShowButton";
import SkeletonListItem from "../../general/SkeletonListItem";

interface GameRedditProps {
  slug: string;
}

interface Post {
  id: number;
  name: string;
  text: string;
  image: string;
  url: string;
  username: string;
  username_url: string;
  created: string;
}

const GameReddit = ({ slug }: GameRedditProps) => {
  const skeletons = Array.from({ length: 5 }, (_, i) => <SkeletonListItem key={i} size="32px" />);
  const { results, error, loading } = useData<Post>(`/games/${slug}/reddit`);
  const [showAll, setShowAll] = useState(false);

  if (error) return null;
  return (
    <>
      <Heading size="md" mt={5}>
        Reddit Posts
      </Heading>
      {loading && <List>{skeletons}</List>}
      <List>
        {results.slice(0, showAll ? results.length : 5).map((achievement) => (
          <ListItem key={achievement.id} my={1}>
            <HStack>
              <Image src={achievement.image} alt={achievement.name} boxSize="32px" />
              <Text fontWeight="bold">{achievement.name}:</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
      {results.length > 5 && <ShowButton showAll={showAll} setShowAll={setShowAll} />}
    </>
  );
};

export default GameReddit;
