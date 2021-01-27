import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

export default function Router(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LoginPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}
