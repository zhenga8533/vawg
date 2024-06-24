import { useState } from "react";
import { Box, Button, HStack } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface IconButtonProps {
  description: string;
  icon: IconType;
}

const IconButton = ({ description, icon: Icon }: IconButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HStack
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button
        height="auto"
        minWidth="auto"
        padding="6px"
        filter={isHovered ? "invert(1)" : "none"}
      >
        <Box as={Icon} size="20px" />
      </Button>
      <Button variant="link" onMouseEnter={() => setIsHovered(true)}>
        {description}
      </Button>
    </HStack>
  );
};

export default IconButton;
