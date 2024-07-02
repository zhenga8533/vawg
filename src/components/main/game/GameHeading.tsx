import { Box, HStack, Heading, Text, useColorMode } from "@chakra-ui/react";
import { GameData } from "../../../hooks/useGame";
import { formatDate } from "../../../services/formatting";
import PlatformIcons from "../games/PlatformIcons";

interface GameHeadingProps {
  name: string;
  parent_platforms: GameData["parent_platforms"];
  playtime: number;
  released: string;
  tba: boolean;
}

const GameHeading = ({ name, parent_platforms, playtime, released, tba }: GameHeadingProps) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? "gray.700" : "gray.100";

  return (
    <>
      <HStack spacing={5}>
        <Box p="2" bg={bgColor} borderWidth="1px" borderRadius="lg" paddingY={0}>
          <Text>{tba ? "TBA" : formatDate(released)}</Text>
        </Box>
        <PlatformIcons platforms={parent_platforms?.map((p) => p.platform)} />
        <Text>AVERAGE PLAYTIME: {playtime} HOURS</Text>
      </HStack>
      <Heading fontSize={50} marginBottom={5}>
        {name}
      </Heading>
    </>
  );
};

export default GameHeading;
