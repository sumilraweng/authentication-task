import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyle = makeStyles((theme) => ({
  signConatiner: {
    marginTop: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailInputField = (event) => {
    setEmail(event.target.value);
  };

  const passwordInputField = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    console.log(email, password);
  };

  const classes = useStyle();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.signConatiner}>
        <Typography variant="h5">Sign in</Typography>
        <form noValidate onSubmit={onSubmitForm}>
          <TextField
            variant="outlined"
            margin="normal"
            id="eamil"
            label="Email Address"
            name="email"
            type="email"
            fullWidth
            autoFocus
            autoComplete="eamil"
            required
            value={email}
            onChange={emailInputField}
          />

          <TextField
            type="password"
            variant="outlined"
            margin="normal"
            id="password"
            label="Password"
            name="password"
            fullWidth
            value={password}
            onChange={passwordInputField}
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
