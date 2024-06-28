import { HStack, Heading } from "@chakra-ui/react";
import { useState } from "react";
import Pagination from "../components/general/Pagination";
import BrowseGrid from "../components/main/browse/BrowseGrid";
import useBrowses from "../hooks/useBrowses";

interface BrowsesProps {
  endpoint: string;
  title: string;
}

const Browses = ({ endpoint, title }: BrowsesProps) => {
  const [browsePage, setBrowsePage] = useState(1);
  const browseData = useBrowses(browsePage, endpoint);

  return (
    <>
      <HStack justifyContent="space-between">
        <Heading as="h1" fontSize="5xl" marginY={5}>
          {title}
        </Heading>
        <Pagination count={browseData.count} onPageChange={(page) => setBrowsePage(page)} page={browsePage} />
      </HStack>
      <BrowseGrid browseData={browseData} />
      <HStack justifyContent="center" marginTop={5}>
        <Pagination count={browseData.count} onPageChange={(page) => setBrowsePage(page)} page={browsePage} />
      </HStack>
    </>
  );
};

export default Browses;
