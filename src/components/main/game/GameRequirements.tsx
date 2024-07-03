import { Box, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { GameData } from "../../../hooks/useGame";
import ShowButton from "../../general/ShowButton";

interface GameRequirementsProps {
  platforms: GameData["platforms"];
}

const GameRequirements = ({ platforms }: GameRequirementsProps) => {
  const [showAll, setShowAll] = useState(false);

  const formatRequirements = (requirements: { minimum: string; recommended: string }) => {
    const minimum = requirements.minimum ?? "Minimum: Not specified";
    const recommended = requirements.recommended ?? "Recommended: Not specified";
    const full = minimum + "\n" + recommended;

    if (showAll) {
      return full;
    } else {
      return full.substring(0, 500) + (full.length > 500 ? "..." : "");
    }
  };

  const formatPlatforms = (platforms: GameData["platforms"]) => {
    const reqDisplay = [];

    for (let i = 0; i < platforms.length; i++) {
      const formatted = formatRequirements(platforms[i].requirements);
      reqDisplay.push(
        <Box key={platforms[i].platform.slug}>
          <Heading size="sm" mt={3}>
            {platforms[i].platform.name}
          </Heading>
          <Text whiteSpace="pre-line">{formatted}</Text>
        </Box>
      );

      if (formatted.endsWith("...")) {
        break;
      }
    }

    return reqDisplay;
  };

  return (
    <>
      <Heading mt={5} size="md">
        System Requirements
      </Heading>
      {formatPlatforms(platforms)}
      <ShowButton showAll={showAll} setShowAll={setShowAll} />
    </>
  );
};

export default GameRequirements;
