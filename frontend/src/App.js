import { ThemeProvider } from "@emotion/react";
import darkTheme from "./theme/darkTheme";
import Navbar from "./Page/Navbar/Navbar";
import Sidebar from "./Page/Sidebar/Sidebar";
import Home from "./Page/Home/Home";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
