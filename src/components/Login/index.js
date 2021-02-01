import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { login } from "../../api/auth";
import { setCookie } from "../../helper/Cookie";
import { withRouter } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  signConatiner: {
    marginTop: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //check wether the cookies is there
  // if it is there then it should redirect to dashboard
  // else it should be logged in
  useEffect(() => {}, []);

  const handleInputFieldChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const data = await login({ email: email, password: password });
      if (data.success) {
        setCookie("token", data.token);
        props.history.push("/dashboard");
      } else {
        alert(data.msg);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const classes = useStyle();

  useEffect(() => {}, []);

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
            onChange={handleInputFieldChange}
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
            onChange={handleInputFieldChange}
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

export default withRouter(Login);
