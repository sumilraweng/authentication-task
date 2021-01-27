import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

export default function Router(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage}></Route>
        <Route path="/signup" component={SignupPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}
