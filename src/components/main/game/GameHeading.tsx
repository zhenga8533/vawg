import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../../App";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const genre = gameQuery.genre?.name || "";
  const parentPlatform = gameQuery.parentPlatform?.name || "";
  const platform = gameQuery.platform?.name || "";
  const store = gameQuery.store?.name ? `on ${gameQuery.store.name}` : "";
  const heading = `${parentPlatform} ${parentPlatform && platform ? "+" : ""} ${platform} ${genre} Games ${store}`;

  return (
    <Heading as="h1" fontSize="5xl" marginBottom={3}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
