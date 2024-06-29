import { Box, Spinner } from "@chakra-ui/react";

const LoadingWheel = () => {
  return (
    <Box display="flex" height="75vh" justifyContent="center" alignItems="center">
      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="gray.600" size="xl" />
    </Box>
  );
};

export default LoadingWheel;
