import { FC } from "react";
import Home from "./pages/Home";
import { Box } from "@chakra-ui/react";

const App: FC = () => (
  <Box backgroundColor={"#0a103a"} h={"100vh"}>
    <Home />
  </Box>
);

export default App;
