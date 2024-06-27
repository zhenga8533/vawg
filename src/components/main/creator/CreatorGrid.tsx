import { Creator } from "../../../hooks/useCreators";
import { Data } from "../../../hooks/useData";
import CardContainer from "../../general/CardContainer";
import CardGrid from "../../general/CardGrid";
import CreatorCard from "./CreatorCard";

interface CreatorGridProps {
  creatorData: Data;
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
