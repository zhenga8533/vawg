import { Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ErrorMessage from "../components/general/ErrorMessage";
import useBrowse from "../hooks/useBrowse";

interface BrowseDetailProps {
  endpoint: string;
  setBgImage: (bgImage: string) => void;
}

const BrowseDetail = ({ endpoint, setBgImage }: BrowseDetailProps) => {
  const { slug } = useParams();
  if (!slug) return <ErrorMessage error="No slug provided" />;

  const { data, error, loading } = useBrowse(endpoint, slug);

  useEffect(() => {
    if (data && data.image_background) {
      setBgImage(data.image_background);
    }

    return () => {
      setBgImage("");
    };
  }, [data]);

  return <Text dangerouslySetInnerHTML={{ __html: data.description }} />;
};

export default BrowseDetail;
