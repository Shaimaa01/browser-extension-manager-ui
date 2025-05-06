import { Header } from "./components/header/header";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
<ThemeProvider>
<Header/>

</ThemeProvider>
  );
}

export default App;
