import Router from "./routes/router";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {" "}
        <div className="App"></div>{" "}
      </Router>
    </ThemeProvider>
  );
}

export default App;
