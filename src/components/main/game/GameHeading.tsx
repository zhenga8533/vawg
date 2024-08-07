import { Box, HStack, Heading, Text, useColorMode } from "@chakra-ui/react";
import { GameData } from "../../../hooks/useGame";
import { formatDate } from "../../../services/formatting";
import CriticScore from "../games/CriticScore";
import PlatformIcons from "../games/PlatformIcons";

interface GameHeadingProps {
  name: string;
  parent_platforms: GameData["parent_platforms"];
  playtime: number;
  released: string;
  score: number;
  tba: boolean;
}

const GameHeading = ({ name, parent_platforms, playtime, released, score, tba }: GameHeadingProps) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? "gray.700" : "gray.100";

  return (
    <>
      <HStack justifyContent="space-between" wrap="wrap">
        <HStack spacing={5}>
          <PlatformIcons platforms={parent_platforms?.map((p) => p.platform)} />
          <Text>AVERAGE PLAYTIME: {playtime} HOURS</Text>
        </HStack>
        <HStack>
          <Box p="2" bg={bgColor} borderWidth="1px" borderRadius="lg" paddingY={0}>
            <Text>{tba ? "TBA" : formatDate(released)}</Text>
          </Box>
          <CriticScore score={score} />
        </HStack>
      </HStack>
      <Heading fontSize={50}>{name}</Heading>
    </>
  );
};

export default GameHeading;
