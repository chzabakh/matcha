import LandingPage from "./pages/LandingPage";
import "./styles/index.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Infos from "./pages/Infos";
// import Profile from "./pages/Auth/Profile";
import CompleteProfile from "./pages/CompleteProfile";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile"
import Messages from "./pages/Messages";
import AccountSuccess from "./pages/AccountConfirmation";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/infos">
          <Infos />
        </Route>
        <Route exact path="/complete_profile">
          <CompleteProfile />
        </Route>
        <Route exact path="/notifications">
          <Notifications />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/messages">
          <Messages />
        </Route>
        <Route exact path="/account_success">
          <AccountSuccess />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;