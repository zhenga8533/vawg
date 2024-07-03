import { Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BaseQuery } from "../App";
import ErrorMessage from "../components/general/ErrorMessage";
import ExpandableText from "../components/general/ExpandableText";
import LoadingWheel from "../components/general/LoadingWheel";
import useBrowse from "../hooks/useBrowse";
import { capitalize } from "../services/formatting";
import Games, { GamesProps } from "./Games";

interface BrowseDetailProps extends GamesProps {
  endpoint: string;
  setBgImage: (bgImage: string) => void;
}

const BrowseDetail = ({ endpoint, gameQuery, setBgImage, setGameQuery }: BrowseDetailProps) => {
  const { slug } = useParams();
  if (!slug) return <ErrorMessage error="No slug provided" />;

  const { data, error, loading } = useBrowse(endpoint, slug);

  useEffect(() => {
    if (data && data.image_background) {
      setBgImage(data.image_background);

      const parameter = endpoint.substring(0, endpoint.length - 1);
      setGameQuery({ ...BaseQuery, [parameter]: data });
    }

    return () => {
      setBgImage("");
    };
  }, [data]);

  if (error) return <ErrorMessage error={error} />;
  else if (loading) return <LoadingWheel />;
  return (
    <>
      <Heading size="2xl">{capitalize(endpoint) + ": " + data.name}</Heading>
      <ExpandableText cutoff={500} text={data.description} />
      <Games gameQuery={gameQuery} setGameQuery={setGameQuery} />
    </>
  );
};

export default BrowseDetail;
