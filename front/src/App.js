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
import Reset from "./pages/ResetPassword";
import NotFound from "./pages/PageNotFound";
import UserExists from "./pages/UserExists";
import { createContext, useEffect, useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ActivateAccount from "./pages/ActivateAccount";
import Home from "./pages/HomePage";
export const userContext = createContext();

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <userContext.Provider value={{ token, setToken }}>
      <Router>
        {console.log("here " + token)}
        <Routes>
          <Route element={<ProtectedRoute token={token} />}>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/complete-profile" element={<CompleteProfile />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/home" element={<Home />} />
            <Route path="/messages" element={<Messages />} />
          </Route>
          {/* <Route path="/" element={<PublicRoute token={token} />}> */}
          <Route element={<PublicRoute token={token} />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/infos" element={<Infos />} />
            <Route path="/activate-account" element={<ActivateAccount />} />
            <Route path="/account-success" element={<AccountSuccess />} />
            <Route path="/account-failed" element={<AccountFailed />} />
            <Route path="/reset-password" element={<Reset />} />
            <Route path="/user-exists" element={<UserExists />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </userContext.Provider>
  );
}

export default App;
