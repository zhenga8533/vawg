import { Box, HStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import AsideMenu, { AsideMenuProps } from "./AsideMenu";
import SearchInput, { SearchInputProps } from "./SearchInput";
import ThemeSelector from "./ThemeSelector";

interface NavbarProps extends AsideMenuProps, SearchInputProps {}

const Navbar = ({
  onSearch,
  gameQuery,
  setGameQuery,
  onSelectPlatform,
  selectedPlatform,
  onReverseOrder,
  onSelectOrder,
  onSelectTheme,
  sortOrder,
}: NavbarProps) => {
  const navigate = useNavigate();

  return (
    <HStack>
      <Text
        cursor="pointer"
        fontSize="2xl"
        fontWeight={1000}
        letterSpacing={5}
        onClick={() => {
          navigate("/");
        }}
      >
        VAWG
      </Text>
      <SearchInput onSearch={onSearch} />

      <Box display={{ base: "none", lg: "block" }}>
        <ThemeSelector onSelectTheme={onSelectTheme} />
      </Box>

      <AsideMenu
        {...{
          gameQuery,
          setGameQuery,
          onSelectPlatform,
          selectedPlatform,
          onReverseOrder,
          onSelectOrder,
          onSelectTheme,
          sortOrder,
        }}
      />
    </HStack>
  );
};

export default Navbar;
