import { HStack, Heading, Text } from "@chakra-ui/react";
import { GameData } from "../../../hooks/useGame";
import PlatformIcons from "../games/PlatformIcons";

interface GameHeadingProps extends GameData {}

const GameHeading = ({ name, parent_platforms, playtime }: GameHeadingProps) => {
  return (
    <>
      <HStack spacing={5}>
        <PlatformIcons platforms={parent_platforms?.map((p) => p.platform)} />
        <Text>AVERAGE PLAYTIME: {playtime} HOURS</Text>
      </HStack>
      <Heading fontSize={50}>{name}</Heading>
    </>
  );
};

export default GameHeading;
