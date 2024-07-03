import { Box, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { GameData } from "../../../hooks/useGame";
import ShowButton from "../../general/ShowButton";

interface GameRequirementsProps {
  platforms: GameData["platforms"];
}

const GameRequirements = ({ platforms }: GameRequirementsProps) => {
  const [showAll, setShowAll] = useState(false);

  const formatRequirements = (
    cutoffLength: number,
    cutoffLines: number,
    requirements: { minimum: string; recommended: string }
  ) => {
    const minimum = requirements.minimum ?? "Minimum: Not specified";
    const recommended = requirements.recommended ?? "Recommended: Not specified";
    const full = minimum + "\n" + recommended;
    const lines = full.split(/\r\n|\r|\n/).length;

    if (showAll) {
      return full;
    } else if (lines > cutoffLines) {
      return (
        full
          .split(/\r\n|\r|\n/)
          .slice(0, cutoffLines)
          .join("\n") + "...\n"
      );
    } else {
      return full.substring(0, cutoffLength) + (full.length > cutoffLength ? "..." : "");
    }
  };

  const formatPlatforms = (platforms: GameData["platforms"]) => {
    const reqDisplay = [];
    let cutoffLength = 500;
    let length = 0;
    let cutoffLines = 5;
    let lines = 0;

    for (let i = 0; i < platforms.length; i++) {
      const formatted = formatRequirements(cutoffLength, cutoffLines, platforms[i].requirements);
      const formattedLength = formatted.length;
      const formattedLines = formatted.split(/\r\n|\r|\n/).length;

      reqDisplay.push(
        <Box key={platforms[i].platform.slug}>
          <Heading size="sm" mt={3}>
            {platforms[i].platform.name}
          </Heading>
          <Text whiteSpace="pre-line">{formatted}</Text>
        </Box>
      );

      cutoffLength -= formattedLength;
      cutoffLines -= formattedLines;
      length += formattedLength;
      lines += formattedLines;

      if ((length > cutoffLength || lines > 3) && !showAll) {
        break;
      }
    }

    if (length > cutoffLength || lines > 3) {
      reqDisplay.push(<ShowButton key="show" showAll={showAll} setShowAll={setShowAll} />);
    }

    return reqDisplay;
  };

  return (
    <>
      <Heading mt={5} size="md">
        System Requirements
      </Heading>
      {formatPlatforms(platforms)}
    </>
  );
};

export default GameRequirements;
