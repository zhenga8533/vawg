import BrowseCard from "./BrowseCard";
import { Browse } from "../../../hooks/useBrowses";
import CardGrid from "../../general/CardGrid";
import CardContainer from "../../general/CardContainer";

interface BrowseGridProps {
  browseData: {
    data: Browse[];
    error: string | null;
    loading: boolean;
  };
}

const BrowseGrid = ({ browseData }: BrowseGridProps) => {
  const { data, error, loading } = browseData;

  const cards = data.map((Browse: Browse) => (
    <CardContainer key={Browse.id}>
      <BrowseCard browse={Browse} />
    </CardContainer>
  ));

  return <CardGrid cards={cards} error={error} loading={loading} />;
};

export default BrowseGrid;
