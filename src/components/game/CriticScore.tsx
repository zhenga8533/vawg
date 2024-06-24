import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  const color = score > 75 ? "green" : score > 50 ? "yellow" : "red";

  return (
    <Badge fontSize="md" paddingX={2} borderRadius={4} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
