import { Box, HStack, Heading } from "@chakra-ui/react";
import useCreator from "../hooks/useCreator";
import Pagination from "../components/general/Pagination";

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
      <Box>TBD</Box>
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
