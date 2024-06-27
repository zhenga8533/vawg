import { HStack, Heading } from "@chakra-ui/react";
import { useState } from "react";
import Pagination from "../components/general/Pagination";
import CreatorGrid from "../components/main/creator/CreatorGrid";
import useCreator from "../hooks/useCreators";

const Creators = () => {
  const [creatoryQuery, setCreatoryQuery] = useState({ page: 1 });
  const creatorData = useCreator(creatoryQuery);

  return (
    <>
      <HStack justifyContent="space-between">
        <Heading as="h1" fontSize="5xl" marginY={5}>
          Creators
        </Heading>
        <Pagination
          count={creatorData.count}
          onPageChange={(page) => setCreatoryQuery({ ...creatoryQuery, page })}
          page={creatoryQuery.page}
        />
      </HStack>
      <CreatorGrid creatorData={creatorData} />
      <HStack justifyContent="center" marginTop={5}>
        <Pagination
          count={creatorData.count}
          onPageChange={(page) => setCreatoryQuery({ ...creatoryQuery, page })}
          page={creatoryQuery.page}
        />
      </HStack>
    </>
  );
};

export default Creators;
