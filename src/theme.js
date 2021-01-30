import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
// import { useTheme } from "@material-ui/core/styles";

// const theme = useTheme();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  signConatiner: {
    // marginTop: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default theme;
