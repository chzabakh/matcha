import LandingPage from "./pages/Auth/LandingPage";
import "./styles/index.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Infos from "./pages/Auth/Infos";
import Profile from "./pages/Auth/Profile";
import CompleteProfile from "./pages/Auth/CompleteProfile";


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
      </Switch>
    </Router>
  );
}

export default App;
