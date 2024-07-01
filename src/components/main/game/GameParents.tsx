import { Button, HStack, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useData, { Info } from "../../../hooks/useData";

interface GameParentsProps {
  slug: string;
}

const GameParents = ({ slug }: GameParentsProps) => {
  const navigate = useNavigate();
  const { results, error, loading } = useData<Info>(`/games/${slug}/parent-games`);

  if (error || loading || results.length === 0) return null;
  return (
    <>
      <Heading mt={5} size="md">
        Parent Games
      </Heading>
      <HStack wrap="wrap">
        {results.map((item) => (
          <Button key={item.id} onClick={() => navigate(`/games/${item.slug}`)} variant="link">
            {item.name}
          </Button>
        ))}
      </HStack>
    </>
  );
};

export default GameParents;
