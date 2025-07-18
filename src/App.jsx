import { ExtensionsList } from "./components/Extensions/ExtensionsList";
import { Header } from "./components/header/Header";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <ExtensionsList />
    </ThemeProvider>
  );
}

export default App;
