import { HStack, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import PlatformIcons from "../components/main/game/PlatformIcons";
import useGame from "../hooks/useGame";

const GameDetail = () => {
  const { slug } = useParams();
  const { data, error, loading } = useGame(slug);

  return (
    <>
      <HStack>
        <PlatformIcons platforms={data.parent_platforms?.map((p) => p.platform)} />
        <Text>AVERAGE PLAYTIME: {data.playtime} HOURS</Text>
      </HStack>
      <Heading>{data.name}</Heading>
    </>
  );
};

export default GameDetail;
