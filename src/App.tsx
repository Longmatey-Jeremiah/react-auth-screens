import Router from "./router";
import theme from "./components/theme";
import { ChakraBaseProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Router />
    </ChakraBaseProvider>
  );
}

export default App;
