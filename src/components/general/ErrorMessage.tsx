import { Text } from "@chakra-ui/react";

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <Text color="red" margin={5} textAlign="center">
      {error}
    </Text>
  );
};

export default ErrorMessage;
