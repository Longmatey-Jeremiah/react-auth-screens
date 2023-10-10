import Router from "./router";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    700: "#2a69ac",
    800: "#153e75",
    900: "#1a365d",
  },
};

const theme = extendBaseTheme({
  colors,
});

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Router />
    </ChakraBaseProvider>
  );
}

export default App;
