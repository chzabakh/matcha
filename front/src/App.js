import LandingPage from "./pages/LandingPage";
import "./styles/index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Infos from "./pages/Infos";
// import Profile from "./pages/Auth/Profile";
import CompleteProfile from "./pages/CompleteProfile";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import AccountSuccess from "./pages/AccountCreationsuccess";
import AccountFailed from "./pages/AccountCreationFailed";
import Reset from "./pages/reset";
import NotFound from "./pages/notfound";
import UserExists from "./pages/UserExists";
import { createContext, useState } from "react";
export const userContext = createContext();

function App() {
  const [token, setToken] = useState("");
  return (
    <userContext.Provider value={{ token, setToken }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/infos" element={<Infos />} />
          <Route exact path="/complete-profile" element={<CompleteProfile />} />
          <Route exact path="/notifications" element={<Notifications />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/messages" element={<Messages />} />
          <Route exact path="/account-success" element={<AccountSuccess />} />
          <Route exact path="/account-failed" element={<AccountFailed />} />
          <Route exact path="/reset-password" element={<Reset />} />
          <Route exact path="/user-exists" element={<UserExists />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </userContext.Provider>
  );
}

export default App;
