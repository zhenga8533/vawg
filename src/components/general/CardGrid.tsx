import { Box, Button, Flex, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import SkeletonCard from "./SkeletonCard";
import CardContainer from "./CardContainer";
import noResults from "../../assets/no-results.webp";

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
      <SimpleGrid width="auto" columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
        {loading && skeletons}
        {cards}
      </SimpleGrid>
      {cards.length === 0 && !loading && (
        <Box marginRight="5%">
          <Image alt="No results found" boxSize="244px" src={noResults} />
          <HStack>
            <Text>No results found.</Text>
            <Button color="gray.300" onClick={() => window.location.reload()} variant="link">
              Reset all filters?
            </Button>
          </HStack>
        </Box>
      )}
    </Flex>
  );
};

export default CardGrid;
