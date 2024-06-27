import { Box, HStack, IconButton, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import ThemeSelector from "./ThemeSelector";
import SearchInput, { SearchInputProps } from "./SearchInput";
import { useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

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

      <Box display={{ base: "block", sm: "none", md: "block" }}>
        <ThemeSelector />
      </Box>

      <Box display={{ base: "none", sm: "block", md: "none" }}>
        <Menu>
          <MenuButton as={IconButton} aria-label="Options" icon={<GiHamburgerMenu />} variant="outline" />
          <MenuList paddingLeft={2}>
            <HStack>
              <Text>Theme: </Text>
              <ThemeSelector />
            </HStack>
          </MenuList>
        </Menu>
      </Box>
    </HStack>
  );
};

export default Navbar;
