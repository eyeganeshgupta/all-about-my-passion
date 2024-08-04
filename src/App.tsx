import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./App.css";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <MantineProvider>
      <HomePage />
    </MantineProvider>
  );
}

export default App;
