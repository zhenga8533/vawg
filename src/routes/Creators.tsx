import { HStack, Heading } from "@chakra-ui/react";
import useCreator from "../hooks/useCreators";
import Pagination from "../components/general/Pagination";
import CreatorGrid from "../components/main/creator/CreatorGrid";

const Creators = () => {
  const creatorData = useCreator();

  return (
    <>
      <HStack justifyContent="space-between">
        <Heading as="h1" fontSize="5xl" marginY={5}>
          Creators
        </Heading>
        <Pagination
          count={creatorData.count}
          onPageChange={(page) => console.log(page)}
          page={1}
        />
      </HStack>
      <CreatorGrid creatorData={creatorData} />
      <HStack justifyContent="center">
        <Pagination
          count={creatorData.count}
          onPageChange={(page) => console.log(page)}
          page={1}
        />
      </HStack>
    </>
  );
};

export default Creators;
