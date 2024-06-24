import { HStack, Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import Pagination from "../components/general/Pagination";
import GenreGrid from "../components/genre/GenreGrid";

const Genres = () => {
  const genreData = useGenres();

  return (
    <>
      <HStack justifyContent="space-between">
        <Heading as="h1" fontSize="5xl" marginY={5}>
          Genres
        </Heading>
        <Pagination
          count={genreData.count}
          onPageChange={(page) => console.log(page)}
          page={1}
        />
      </HStack>
      <GenreGrid genreData={genreData} />
    </>
  );
};

export default Genres;
