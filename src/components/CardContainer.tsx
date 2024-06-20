import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CardContainerProps {
  children: ReactNode;
}

const CardContainer = ({ children }: CardContainerProps) => {
  return (
    <Box width={300} borderRadius={10} overflow="hidden" display="flex">
      {children}
    </Box>
  );
};

export default CardContainer;
