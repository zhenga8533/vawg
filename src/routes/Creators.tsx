import { HStack, Heading } from "@chakra-ui/react";
import { useState } from "react";
import Pagination from "../components/general/Pagination";
import CreatorGrid from "../components/main/creator/CreatorGrid";
import useCreator from "../hooks/useCreators";

const Creators = () => {
  const [creatorPage, setCreatorPage] = useState(1);
  const creatorData = useCreator(creatorPage);

  return (
    <>
      <HStack justifyContent="space-between">
        <Heading as="h1" fontSize="5xl" marginY={5}>
          Creators
        </Heading>
        <Pagination count={creatorData.count} onPageChange={(page) => setCreatorPage(page)} page={creatorPage} />
      </HStack>
      <CreatorGrid creatorData={creatorData} />
      <HStack justifyContent="center" marginTop={5}>
        <Pagination count={creatorData.count} onPageChange={(page) => setCreatorPage(page)} page={creatorPage} />
      </HStack>
    </>
  );
};

export default Creators;
