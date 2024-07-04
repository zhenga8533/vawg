import { Box, Button, Heading, IconButton, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import { BaseQuery, GameQueryProps } from "../../App";
import { compareObjects } from "../../services/compare";
import Aside from "../aside/Aside";
import PlatformSelector, { PlatformSelectorProps } from "../main/games/PlatformSelector";
import SortSelector, { SortSelectorProps } from "../main/games/SortSelector";
import ThemeSelector, { ThemeSelectorProps } from "./ThemeSelector";

export interface AsideMenuProps extends GameQueryProps, PlatformSelectorProps, SortSelectorProps, ThemeSelectorProps {}

const AsideMenu = ({
  gameQuery,
  setGameQuery,
  onSelectPlatform,
  selectedPlatform,
  onReverseOrder,
  onSelectOrder,
  onSelectTheme,
  sortOrder,
}: AsideMenuProps) => {
  const location = useLocation();

  return (
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
          {useLocation().pathname === "/games" && compareObjects(gameQuery, BaseQuery) && (
            <>
              <Button colorScheme="red" onClick={() => setGameQuery({ ...BaseQuery })}>
                Clear
              </Button>
              <hr />
            </>
          )}
          <Aside gameQuery={gameQuery} setGameQuery={setGameQuery} />
        </MenuList>
      </Menu>
    </Box>
  );
};

export default AsideMenu;
