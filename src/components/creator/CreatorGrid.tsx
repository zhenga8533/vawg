import CardContainer from "../general/CardContainer";
import CreatorCard from "./CreatorCard";
import { Creator } from "../../hooks/useCreators";
import CardGrid from "../general/CardGrid";

interface CreatorGridProps {
  creatorData: {
    data: Creator[];
    error: string | null;
    loading: boolean;
  };
}

const CreatorGrid = ({ creatorData }: CreatorGridProps) => {
  const { data, error, loading } = creatorData;

  const cards = data.map((creator: Creator) => (
    <CardContainer key={creator.id}>
      <CreatorCard creator={creator} />
    </CardContainer>
  ));

  return <CardGrid cards={cards} error={error} loading={loading} />;
};

export default CreatorGrid;
