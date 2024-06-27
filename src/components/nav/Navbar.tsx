import { Box, HStack, Heading, IconButton, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import ThemeSelector from "./ThemeSelector";
import SearchInput, { SearchInputProps } from "./SearchInput";
import { useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Aside, { AsideProps } from "../aside/Aside";
import PlatformSelector, { PlatformSelectorProps } from "../main/game/PlatformSelector";
import SortSelector, { SortSelectorProps } from "../main/game/SortSelector";

interface NavbarProps extends AsideProps, PlatformSelectorProps, SearchInputProps, SortSelectorProps {}

const Navbar = ({
  onSearch,
  gameQuery,
  setGameQuery,
  onSelectPlatform,
  selectedPlatform,
  onReverseOrder,
  onSelectOrder,
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
          if (!location.pathname.endsWith("/games")) navigate("/games");
          else window.location.reload();
        }}
      >
        VAWG
      </Text>
      <SearchInput onSearch={onSearch} />

      <Box display={{ base: "none", lg: "block" }}>
        <ThemeSelector />
      </Box>

      <Box display={{ base: "block", lg: "none" }}>
        <Menu>
          <MenuButton as={IconButton} aria-label="Options" icon={<GiHamburgerMenu />} variant="outline" />
          <MenuList paddingX={2}>
            <Box display={{ base: "block", md: "none" }} marginBottom={3}>
              <Heading fontSize="3xl">Filter</Heading>
              <hr />
              <ThemeSelector />
              <hr />
              <PlatformSelector onSelectPlatform={onSelectPlatform} selectedPlatform={selectedPlatform} />
              <hr />
              <SortSelector onReverseOrder={onReverseOrder} onSelectOrder={onSelectOrder} sortOrder={sortOrder} />
              <hr />
            </Box>
            <Aside gameQuery={gameQuery} setGameQuery={setGameQuery} />
          </MenuList>
        </Menu>
      </Box>
    </HStack>
  );
};

export default Navbar;
