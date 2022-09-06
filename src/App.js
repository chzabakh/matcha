import LandingPage from "./pages/Auth/LandingPage";
import "./styles/index.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Infos from "./pages/Auth/Infos";

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
      </Switch>
    </Router>
  );
}

export default App;
