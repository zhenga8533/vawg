import { HStack, Text } from "@chakra-ui/react";
import ThemeSelector from "./ThemeSelector";
import SearchInput from "./SearchInput";
import { useLocation, useNavigate } from "react-router-dom";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: SearchInputProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <HStack>
      <Text
        cursor="pointer"
        fontSize="2xl"
        fontWeight={1000}
        letterSpacing={5}
        onClick={() => {
          if (!location.pathname.endsWith("/games")) navigate("/games");
          else window.location.reload();
        }}
      >
        VAWG
      </Text>
      <SearchInput onSearch={onSearch} />
      <ThemeSelector />
    </HStack>
  );
};

export default Navbar;
