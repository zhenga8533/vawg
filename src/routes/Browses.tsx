import { HStack, Heading } from "@chakra-ui/react";
import useBrowses from "../hooks/useBrowses";
import Pagination from "../components/general/Pagination";
import BrowseGrid from "../components/main/browse/BrowseGrid";

interface BrowsesProps {
  endpoint: string;
  title: string;
}

const Browses = ({ endpoint, title }: BrowsesProps) => {
  const browseData = useBrowses(endpoint);

  return (
    <>
      <HStack justifyContent="space-between">
        <Heading as="h1" fontSize="5xl" marginY={5}>
          {title}
        </Heading>
        <Pagination
          count={browseData.count}
          onPageChange={(page) => console.log(page)}
          page={1}
        />
      </HStack>
      <BrowseGrid browseData={browseData} />
      <HStack justifyContent="center" marginTop={5}>
        <Pagination
          count={browseData.count}
          onPageChange={(page) => console.log(page)}
          page={1}
        />
      </HStack>
    </>
  );
};

export default Browses;
