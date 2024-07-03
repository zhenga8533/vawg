import { Box, HStack, Heading, IconButton, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";
import { GameQueryProps } from "../../App";
import Aside from "../aside/Aside";
import PlatformSelector, { PlatformSelectorProps } from "../main/games/PlatformSelector";
import SortSelector, { SortSelectorProps } from "../main/games/SortSelector";
import SearchInput, { SearchInputProps } from "./SearchInput";
import ThemeSelector, { ThemeSelectorProps } from "./ThemeSelector";

interface NavbarProps
  extends GameQueryProps,
    PlatformSelectorProps,
    SearchInputProps,
    SortSelectorProps,
    ThemeSelectorProps {}

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
          navigate("/");
        }}
      >
        VAWG
      </Text>
      <SearchInput onSearch={onSearch} />

      <Box display={{ base: "none", lg: "block" }}>
        <ThemeSelector onSelectTheme={onSelectTheme} />
      </Box>

      <Box display={{ base: "block", lg: "none" }} position="relative">
        <Menu>
          <MenuButton as={IconButton} aria-label="Options" icon={<GiHamburgerMenu />} variant="outline" />
          <MenuList paddingX={2} position="absolute" right={-16} maxHeight="85vh" overflowX="hidden" overflowY="auto">
            <Heading fontSize="3xl">Filter</Heading>
            <hr />
            <ThemeSelector onSelectTheme={onSelectTheme} />
            <hr />
            <Box display={{ base: "block", md: "none" }} mb={3}>
              {location.pathname.startsWith("/games") && (
                <>
                  <PlatformSelector onSelectPlatform={onSelectPlatform} selectedPlatform={selectedPlatform} />
                  <hr />
                  <SortSelector onReverseOrder={onReverseOrder} onSelectOrder={onSelectOrder} sortOrder={sortOrder} />
                  <hr />
                </>
              )}
            </Box>
            <Aside gameQuery={gameQuery} setGameQuery={setGameQuery} />
          </MenuList>
        </Menu>
      </Box>
    </HStack>
  );
};

export default Navbar;
