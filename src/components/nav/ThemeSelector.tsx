import { Box, Button, Menu, MenuButton, MenuItem, MenuList, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

export interface ThemeSelectorProps {
  onSelectTheme: (theme: string) => void;
}

const ThemeSelector = ({ onSelectTheme }: ThemeSelectorProps) => {
  const { setColorMode } = useColorMode();
  const themes = [
    { name: "Light", value: "light" },
    { name: "Dark", value: "dark" },
    { name: "Sakura", value: "sakura" },
  ];
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    setColorMode(theme);
    onSelectTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme, setColorMode]);

  const currentTheme = themes.find((t) => t.value === theme)?.name ?? "Theme";

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        <Box mr={3}>{currentTheme}</Box>
      </MenuButton>
      <MenuList>
        {themes.map((theme) => (
          <MenuItem key={theme.value} onClick={() => setTheme(theme.value)}>
            {theme.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ThemeSelector;
