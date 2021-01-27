import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyle = makeStyles((theme) => ({
  signConatiner: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const emailInputField = (event) => {
    setEmail(event.target.value);
  };

  const passwordInputField = (event) => {
    setPassword(event.target.value);
  };

  const confirmPasswordInputField = (event) => {
    setConfirmPassword(event.target.value);
    if (password !== event.target.value) {
      console.log("password dont match");
    } else {
      console.log("password match");
    }
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password not match");
    }
    console.log(email, password, confirmPassword);
  };
  const classes = useStyle();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.signConatiner}>
        <Typography variant="h5">Sign up</Typography>

        <form noValidate onSubmit={onSubmitForm}>
          <TextField
            type="email"
            variant="outlined"
            margin="normal"
            id="eamil"
            label="Email Address"
            name="email"
            fullWidth
            autoFocus
            autoComplete="eamil"
            value={email}
            onChange={emailInputField}
            required
          />

          <TextField
            variant="outlined"
            margin="normal"
            type="password"
            id="password"
            label="Password"
            name="password"
            fullWidth
            value={password}
            onChange={passwordInputField}
            required
          />

          <TextField
            variant="outlined"
            margin="normal"
            type="password"
            id="confirm-password"
            label="Confirm-Password"
            name="confirm-password"
            value={confirmPassword}
            onChange={confirmPasswordInputField}
            fullWidth
            required
          />

          <Button type="submit" fullWidth variant="contained" color="primary">
            Signup{" "}
          </Button>
        </form>
      </div>
    </Container>
  );
}
