import BrowseCard from "./BrowseCard";
import { Browse } from "../../../hooks/useBrowses";
import CardGrid from "../../general/CardGrid";
import CardContainer from "../../general/CardContainer";
import { Data } from "../../../hooks/useData";

interface BrowseGridProps {
  browseData: Data;
}

const BrowseGrid = ({ browseData }: BrowseGridProps) => {
  const { data, error, loading } = browseData;

  const cards = data.map((browse: Browse) => (
    <CardContainer key={browse.id}>
      <BrowseCard browse={browse} />
    </CardContainer>
  ));

  return <CardGrid cards={cards} error={error} loading={loading} />;
};

export default BrowseGrid;
