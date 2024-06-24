import { HStack, Heading } from "@chakra-ui/react";
import useBrowses from "../hooks/useBrowses";
import Pagination from "../components/general/Pagination";
import BrowseGrid from "../components/main/browse/BrowseGrid";
import { useState } from "react";

interface BrowsesProps {
  endpoint: string;
  title: string;
}

const Browses = ({ endpoint, title }: BrowsesProps) => {
  const [browseQuery, setBrowseQuery] = useState({ page: 1 });
  const browseData = useBrowses(browseQuery, endpoint);

  return (
    <>
      <HStack justifyContent="space-between">
        <Heading as="h1" fontSize="5xl" marginY={5}>
          {title}
        </Heading>
        <Pagination
          count={browseData.count}
          onPageChange={(page) => setBrowseQuery({ ...browseQuery, page })}
          page={browseQuery.page}
        />
      </HStack>
      <BrowseGrid browseData={browseData} />
      <HStack justifyContent="center" marginTop={5}>
        <Pagination
          count={browseData.count}
          onPageChange={(page) => setBrowseQuery({ ...browseQuery, page })}
          page={browseQuery.page}
        />
      </HStack>
    </>
  );
};

export default Browses;
