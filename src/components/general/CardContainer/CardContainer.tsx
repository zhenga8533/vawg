import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import styles from "./CardContainer.module.css";

interface CardContainerProps {
  children: ReactNode;
}

const CardContainer = ({ children }: CardContainerProps) => {
  return (
    <Box className={styles.card} borderRadius={10} display="flex" overflow="hidden" width="100%">
      {children}
    </Box>
  );
};

export default CardContainer;
