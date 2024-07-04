import { Box, HStack, Heading } from "@chakra-ui/react";
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
        <Heading as="h1" fontSize="5xl">
          {title}
        </Heading>
        <Box display={{ base: "none", md: "flex" }}>
          <Pagination count={browseData.count} onPageChange={(page) => setBrowsePage(page)} page={browsePage} />
        </Box>
      </HStack>
      <HStack display={{ base: "flex", md: "none" }} justifyContent="center" mb={3}>
        <Pagination count={browseData.count} onPageChange={(page) => setBrowsePage(page)} page={browsePage} />
      </HStack>
      <BrowseGrid browseData={browseData} />
      <HStack justifyContent="center" mt={5}>
        <Pagination count={browseData.count} onPageChange={(page) => setBrowsePage(page)} page={browsePage} />
      </HStack>
    </>
  );
};

export default Browses;
