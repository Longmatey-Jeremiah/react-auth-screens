// theme.js

// 1. import `extendTheme` function
import { ThemeConfig, extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  // initialColorMode: "light", // 'dark' | 'light'
  useSystemColorMode: false,
};

// 3. extend the theme
const colors = {
  primary: {
    100: "#482ff7",
    200: "#28c7fa",
  },
  accent: {
    100: "#CFF5FB",
  },
  secondary: {},
  success: {
    100: "#DDFFB1",
  },
  danger: {
    100: "#F6DCFF",
  },
  text: {
    100: "black",
    200: "#AAAAAA",
    300: "#555D65",
    400: "#CCCCCC",
    500: "#5C5C61",
  },
  icon: {
    100: "#AAAAAA",
  },
  bg: {
    100: "#F7F7F8",
    200: "#F6DCFF",
    300: "",
  },
};

const components = {
  Menu: {
    parts: ["list", "item"],
    baseStyle: {
      list: {
        // styles for the MenuList container
        boxShadow: "md",
        p: 2,
      },
      item: {
        // styles for each MenuList item
        _hover: {
          // styles for item on hover
          bg: "none",
          color: "text.200",
        },
        _active: {
          // styles for item when active (selected)
        },
        _focus: {
          // styles for item when focused
          bg: "none",
        },
      },
    },
  },
};
const theme = extendTheme({ config, colors, components });

export default theme;