import { HStack, Text } from "@chakra-ui/react";
import ThemeSelector from "./ThemeSelector";
import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: SearchInputProps) => {
  const navigate = useNavigate();

  return (
    <HStack>
      <Text cursor="pointer" fontSize="2xl" fontWeight={1000} letterSpacing={5} onClick={() => navigate("/games")}>
        VAWG
      </Text>
      <SearchInput onSearch={onSearch} />
      <ThemeSelector />
    </HStack>
  );
};

export default Navbar;
