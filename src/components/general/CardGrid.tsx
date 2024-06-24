import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import CardContainer from "../general/CardContainer";
import SkeletonCard from "./SkeletonCard";

interface CardGridProps {
  cards: JSX.Element[];
  error: string | null;
  loading: boolean;
}

const CardGrid = ({ cards, error, loading }: CardGridProps) => {
  const skeletons = Array.from({ length: 20 }, (_, i) => (
    <CardContainer key={i}>
      <SkeletonCard />
    </CardContainer>
  ));

  if (error)
    return (
      <Text color="red" margin={5} textAlign="center">
        {error}
      </Text>
    );
  return (
    <Flex alignItems="center" justifyContent="center" width="100%">
      <SimpleGrid
        width="auto"
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={5}
      >
        {loading && skeletons}
        {cards}
      </SimpleGrid>
    </Flex>
  );
};

export default CardGrid;
