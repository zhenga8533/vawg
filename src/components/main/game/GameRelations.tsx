import { Button, HStack, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useData, { Info } from "../../../hooks/useData";

interface GameRelationsProps {
  endpoint: string;
  heading: string;
  slug: string;
}

const GameRelations = ({ endpoint, heading, slug }: GameRelationsProps) => {
  const navigate = useNavigate();
  const { results, error, loading } = useData<Info>(`/games/${slug}/${endpoint}`);

  if (error || loading || results.length === 0) return null;
  return (
    <>
      <Heading mt={5} size="md">
        {heading}
      </Heading>
      <HStack mt={3} wrap="wrap">
        {results.map((item, index) => (
          <HStack key={item.id} spacing={0}>
            <Button onClick={() => navigate(`/games/${item.slug}`)} variant="link">
              {item.name}
            </Button>
            <Text>{index < results.length - 1 ? ", " : ""}</Text>
          </HStack>
        ))}
      </HStack>
    </>
  );
};

export default GameRelations;
