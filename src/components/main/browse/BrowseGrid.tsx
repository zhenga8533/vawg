import { Browse } from "../../../hooks/useBrowses";
import { Data } from "../../../hooks/useData";
import CardContainer from "../../general/CardContainer";
import CardGrid from "../../general/CardGrid";
import BrowseCard from "./BrowseCard";

interface BrowseGridProps {
  browseData: Data;
}

const BrowseGrid = ({ browseData }: BrowseGridProps) => {
  const { results, error, loading } = browseData;

  const cards = results.map((browse: Browse) => (
    <CardContainer key={browse.id}>
      <BrowseCard browse={browse} />
    </CardContainer>
  ));

  return <CardGrid cards={cards} error={error} loading={loading} />;
};

export default BrowseGrid;
