import { Box, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { GameData } from "../../../hooks/useGame";
import ShowButton from "../../general/ShowButton";

interface GameRequirementsProps {
  platforms: GameData["platforms"];
}

const GameRequirements = ({ platforms }: GameRequirementsProps) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <Heading mt={5} size="md">
        System Requirements
      </Heading>
      {platforms.map(
        (platform) =>
          (platform.requirements.minimum || platform.requirements.recommended) && (
            <Box key={platform.platform.slug}>
              <Heading size="sm" mt={3}>
                {platform.platform.name}
              </Heading>
              <Text>{platform.requirements.minimum}</Text>
              <Text>{platform.requirements.recommended}</Text>
              <ShowButton showAll={showAll} setShowAll={setShowAll} />
            </Box>
          )
      )}
    </>
  );
};

export default GameRequirements;
