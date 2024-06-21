import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  styles: {
    global: (props: Record<string, any>) => ({
      body: {
        color: props.colorMode === "sakura" ? "sakura.800" : undefined,
        bg: props.colorMode === "sakura" ? "sakura.50" : undefined,
      },
    }),
  },
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
    sakura: {
      50: "#ffeefb",
      100: "#fec5d1",
      200: "#fa9baa",
      300: "#f87183",
      400: "#f5485d",
      500: "#f21f37",
      600: "#c01b2c",
      700: "#8e1621",
      800: "#5c1017",
      900: "#2a0b0c",
    },
  },
});

export default theme;
