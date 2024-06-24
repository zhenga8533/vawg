import { useState } from "react";
import { Box, Button, HStack } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface IconButtonProps {
  description: string;
  icon: IconType;
  onClick: () => void;
}

const IconButton = ({ description, icon: Icon, onClick }: IconButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HStack>
      <Button
        filter={isHovered ? "invert(1)" : "none"}
        height="auto"
        minWidth="auto"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        padding="6px"
      >
        <Box as={Icon} size="20px" />
      </Button>
      <Button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        variant="link"
      >
        {description}
      </Button>
    </HStack>
  );
};

export default IconButton;
