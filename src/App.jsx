// import ExtensionsList from "./components/ExtensionsList";
import { ExtensionsList } from "./components/Extensions/ExtensionsList";
import { Header } from "./components/header/header";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
<ThemeProvider>
<Header/>
{/* <ExtensionsList/> */}
<ExtensionsList/>
</ThemeProvider>
  );
}

export default App;
