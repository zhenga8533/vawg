import { HStack, Text } from "@chakra-ui/react";
import ThemeSelector from "./ThemeSelector";
import SearchInput from "./SearchInput";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: SearchInputProps) => {
  return (
    <HStack>
      <Text fontSize="2xl" fontWeight={1000} letterSpacing={5}>
        VAWG
      </Text>
      <SearchInput onSearch={onSearch} />
      <ThemeSelector />
    </HStack>
  );
};

export default Navbar;
