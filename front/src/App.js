import LandingPage from "./pages/LandingPage";
import "./styles/index.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Infos from "./pages/Infos";
// import Profile from "./pages/Auth/Profile";
import CompleteProfile from "./pages/CompleteProfile";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import AccountSuccess from "./pages/AccountCreationsuccess";
import AccountFailed from "./pages/AccountCreationFailed";
import Reset from "./pages/reset";
import { createContext, useState } from "react";
export const userContext = createContext();

function App() {
  const [token, setToken] = useState("");
  return (
    <userContext.Provider value={{token, setToken}}>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/infos">
            <Infos />
          </Route>
          <Route exact path="/complete-profile">
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
          <Route exact path="/account-success">
            <AccountSuccess />
          </Route>
          <Route exact path="/account-failed">
            <AccountFailed />
          </Route>
          <Route exact path="/reset-password">
            <Reset />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
