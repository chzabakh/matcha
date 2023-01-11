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
import { createContext, useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ActivateAccount from "./pages/ActivateAccount";
import Home from "./pages/HomePage";
import GlobalStyle from "./global-style";
export const UserContext = createContext();

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [completedProfile, setCompletedProfile] = useState(null);
  const test = "hello";
  return (
    <UserContext.Provider
      value={{ token, setToken, completedProfile, setCompletedProfile }}
    >
      <Router>
        <Routes>
          <Route
            element={
              <ProtectedRoute
                token={token}
                completedProfile={completedProfile}
              />
            }
          >
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/complete-profile" element={<CompleteProfile />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/home" test={test} element={<Home />} />
            <Route path="/messages" element={<Messages />} />
          </Route>
          <Route element={<PublicRoute token={token} />}>
            {console.log("pblc")}
            <Route path="/" element={<LandingPage />} />
            <Route path="/infos" element={<Infos />} />
            <Route path="/activate-account" element={<ActivateAccount />} />

            <Route path="/account-success" element={<AccountSuccess />} />

            <Route path="/account-failed" element={<AccountFailed />} />
            <Route path="/reset-password" element={<Reset />} />
            <Route path="/user-exists" element={<UserExists />} />
          </Route>
          {/* <Route path="/" element={<PublicRoute token={token} />}> */}
          <Route
            path="*"
            element={<NotFound completedProfile={completedProfile} />}
          />
        </Routes>
      </Router>
      <GlobalStyle />
    </UserContext.Provider> // ila dert login + private pages
  ); //loginmodal line 68
}

export default App;
