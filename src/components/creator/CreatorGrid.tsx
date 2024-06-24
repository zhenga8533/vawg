import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import CardContainer from "../general/CardContainer";
import CreatorCard from "./CreatorCard";
import SkeletonCard from "../general/SkeletonCard";
import { Creator } from "../../hooks/useCreators";

interface CreatorGridProps {
  creatorData: {
    data: Creator[];
    error: string | null;
    loading: boolean;
  };
}

const CreatorGrid = ({ creatorData }: CreatorGridProps) => {
  const { data, error, loading } = creatorData;
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
        {data.map((creator: Creator) => (
          <CardContainer key={creator.id}>
            <CreatorCard creator={creator} />
          </CardContainer>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default CreatorGrid;
