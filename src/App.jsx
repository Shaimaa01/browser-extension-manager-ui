import ExtensionsList from "./components/ExtensionsList";
import { Header } from "./components/header/header";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
<ThemeProvider>
<Header/>
<ExtensionsList/>
</ThemeProvider>
  );
}

export default App;
