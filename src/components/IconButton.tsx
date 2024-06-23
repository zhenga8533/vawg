import { Box, Button, HStack } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface IconButtonProps {
  description: string;
  icon: IconType;
}

const IconButton = ({ description, icon }: IconButtonProps) => (
  <HStack>
    <Button height="auto" minWidth="auto" padding="6px">
      <Box as={icon} size="20px" />
    </Button>
    <Button variant="link">{description}</Button>
  </HStack>
);

export default IconButton;
