import { Button } from "@chakra-ui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface ShowButtonProps {
  showAll: boolean;
  setShowAll: (showAll: boolean) => void;
}

const ShowButton = ({ showAll, setShowAll }: ShowButtonProps) => {
  return (
    <Button
      color="gray"
      leftIcon={showAll ? <BsChevronUp /> : <BsChevronDown />}
      onClick={() => setShowAll(!showAll)}
      padding={0}
      variant="link"
    >
      {showAll ? "Hide" : "Show all"}
    </Button>
  );
};

export default ShowButton;
