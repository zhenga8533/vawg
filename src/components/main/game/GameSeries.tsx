import { Button, HStack, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useData, { Info } from "../../../hooks/useData";

interface GameSeriesProps {
  slug: string;
}

const GameSeries = ({ slug }: GameSeriesProps) => {
  const navigate = useNavigate();
  const { results, error, loading } = useData<Info>(`/games/${slug}/game-series`);

  if (error || loading || results.length === 0) return null;
  return (
    <>
      <Heading mt={5} size="md">
        Games in the Series
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

export default GameSeries;
