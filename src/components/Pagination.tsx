import {
  Box,
  Button,
  HStack,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";

interface PaginationProps {
  onPageChange: (page: number) => void;
  page: number;
}

const Pagination = ({ onPageChange, page }: PaginationProps) => {
  page = page ?? 1;
  const totalPages = 100;
  const hasPreviousPage = page > 1;
  const hasNextPage = page < totalPages;

  const changePage = (newPage: number) => {
    if (newPage !== page && newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <HStack display="flex" justifyContent="space-between" alignItems="center">
      <Button onClick={() => changePage(1)} isDisabled={!hasPreviousPage}>
        First
      </Button>
      <Button
        onClick={() => changePage(page - 1)}
        isDisabled={!hasPreviousPage}
      >
        Previous
      </Button>
      <HStack>
        <NumberInput
          value={page}
          onChange={(_, valueNumber) => changePage(valueNumber)}
        >
          <NumberInputField
            padding={1}
            width={`${totalPages.toString().length + 1.5}ch`}
          />
        </NumberInput>
        <Box>of {totalPages}</Box>
      </HStack>
      <Button onClick={() => changePage(page + 1)} isDisabled={!hasNextPage}>
        Next
      </Button>
      <Button onClick={() => changePage(totalPages)} isDisabled={!hasNextPage}>
        Last
      </Button>
    </HStack>
  );
};

export default Pagination;
