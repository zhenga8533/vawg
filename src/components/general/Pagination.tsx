import {
  Box,
  Button,
  HStack,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { FaBackward, FaForward } from "react-icons/fa";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";

interface PaginationProps {
  count: number;
  onPageChange: (page: number) => void;
  page: number;
}

const Pagination = ({ count, onPageChange, page }: PaginationProps) => {
  page = page ?? 1;
  const totalPages = Math.ceil(count / 20);
  const hasPreviousPage = page > 1;
  const hasNextPage = page < totalPages;

  const changePage = (newPage: number) => {
    if (newPage !== page && newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    } else if (newPage < 1) {
      onPageChange(1);
    } else if (newPage > totalPages) {
      onPageChange(totalPages);
    }
  };

  return (
    <HStack display="flex" justifyContent="space-between" alignItems="center">
      <Button onClick={() => changePage(1)} isDisabled={!hasPreviousPage}>
        <FaBackward />
      </Button>
      <Button
        onClick={() => changePage(page - 1)}
        isDisabled={!hasPreviousPage}
      >
        <IoCaretBack />
      </Button>
      <HStack>
        <NumberInput
          value={page}
          onChange={(_, valueNumber) => changePage(valueNumber)}
        >
          <NumberInputField
            padding={1}
            width={`${page.toString().length + 1.25}ch`}
          />
        </NumberInput>
        <Box>of {totalPages}</Box>
      </HStack>
      <Button onClick={() => changePage(page + 1)} isDisabled={!hasNextPage}>
        <IoCaretForward />
      </Button>
      <Button onClick={() => changePage(totalPages)} isDisabled={!hasNextPage}>
        <FaForward />
      </Button>
    </HStack>
  );
};

export default Pagination;
