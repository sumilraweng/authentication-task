import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { signup } from "../../api/auth";
import { withRouter } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  signConatiner: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [verify, setVerify] = useState(false);
  const [otp, setOtp] = useState("");

  const handleInputFieldChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "user-name":
        setUserName(value);
        break;
      case "phone-number":
        setPhone(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirm-password":
        setConfirmPassword(value);
        if (password !== value) {
          console.log("password dont match");
        } else {
          console.log("password match");
        }
        break;
      case "otp":
        setOtp(value);
        break;
      default:
        break;
    }
  };

  const clear = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setUserName("");
    setPhone("");
    setOtp("");
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    let data;
    if (password !== confirmPassword) {
      alert("password not match");
      return;
    }

    if (!verify) {
      try {
        data = await signup({
          email: email,
          password: password,
          name: userName,
          phone: phone,
        });
      } catch (error) {
        console.log(error);
      }

      if (!data.success) {
        alert(data.msg);
        return;
      }
      setVerify(data.success);
      alert(data.msg);
    } else {
      // This for OTP
      try {
        data = await signup({
          email: email,
          password: password,
          name: userName,
          phone: phone,
          otpResponse: otp,
        });
      } catch (error) {
        console.log(error);
      }
      if (!data.success) {
        setVerify(data.success);
        clear();
        alert(data.msg);
        return;
      }
      props.history.push("/");
    }
  };

  const classes = useStyle();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.signConatiner}>
        <Typography variant="h5">Sign up</Typography>

        <form noValidate onSubmit={onSubmitForm}>
          <TextField
            type="email"
            disabled={verify}
            variant="outlined"
            margin="normal"
            id="eamil"
            label="Email Address"
            name="email"
            fullWidth
            autoFocus
            autoComplete="eamil"
            value={email}
            onChange={handleInputFieldChange}
            required
          />

          <TextField
            type="text"
            disabled={verify}
            variant="outlined"
            margin="normal"
            id="user-name"
            label="User Name"
            name="user-name"
            fullWidth
            autoComplete="user-name"
            value={userName}
            onChange={handleInputFieldChange}
            required
          />

          <TextField
            type="tel"
            variant="outlined"
            margin="normal"
            id="phone-number"
            label="Phone No."
            name="phone-number"
            fullWidth
            autoComplete="tel"
            disabled={verify}
            value={phone}
            onChange={handleInputFieldChange}
            required
          />

          <TextField
            variant="outlined"
            margin="normal"
            disabled={verify}
            type="password"
            id="password"
            label="Password"
            name="password"
            fullWidth
            value={password}
            onChange={handleInputFieldChange}
            required
          />

          {verify ? (
            <TextField
              variant="outlined"
              margin="normal"
              type="password"
              id="otp"
              label="OTP"
              name="otp"
              value={otp}
              onChange={handleInputFieldChange}
              fullWidth
              required
              autoFocus
            />
          ) : (
            <TextField
              variant="outlined"
              margin="normal"
              type="password"
              id="confirm-password"
              label="Confirm Password"
              name="confirm-password"
              value={confirmPassword}
              onChange={handleInputFieldChange}
              fullWidth
              required
              disabled={verify}
            />
          )}

          <Button type="submit" fullWidth variant="contained" color="primary">
            Signup{" "}
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default withRouter(Signup);
