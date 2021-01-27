import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  signConatiner: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function Login() {
  const classes = useStyle();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.signConatiner}>
        <Typography variant="h5">Sign in</Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            id="eamil"
            label="Email Address"
            name="email"
            fullWidth
            autoFocus
            autoComplete="eamil"
            required
          />

          <TextField
            variant="outlined"
            margin="normal"
            id="password"
            label="Password"
            name="password"
            fullWidth
            autoFocus
            required
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Log In{" "}
          </Button>
        </form>
      </div>
    </Container>
  );
}
