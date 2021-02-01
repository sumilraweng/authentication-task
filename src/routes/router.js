import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import DashboardPage from "../pages/Dashboard";

export default function Router(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage}></Route>
        <Route path="/signup" component={SignupPage}></Route>
        <Route path="/dashboard" component={DashboardPage}></Route>
        <Route>
          {" "}
          <div>Page Not found</div>{" "}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
