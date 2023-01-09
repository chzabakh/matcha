import "../styles/index.scss";
import styled from "styled-components";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CenterFocusStrong } from "@mui/icons-material";
import { autocompleteClasses } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../App";
import Reset from "../pages/ResetPassword";
import CompleteProfile from "../pages/CompleteProfile";
import Home from "../pages/HomePage";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 11,
};

const ModalWrapper = styled.div`
  .userlogin {
    /* border: 1px solid black; */
    background-color: red;
  }
  .myform {
    margin-left: 50px !important;
  }
`;

const LoginModal = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputPass, setInputPass] = useState("");
  const InputPassRef = useRef("");
  const { token, setToken, completedProfile, setCompletedProfile } = useContext(UserContext);
  const history = useNavigate();

  const submit = async (e) => {
    e.preventDefault(); //prevent refreshing

    // console.log("before");
    const res = await axios
      .post(`http://localhost:3001/login`, {
        login: logIn.login,
        password: logIn.password,
      })
      .then((e) => {
        console.log("login resolved");
        console.log("the data", e.data);
        localStorage.setItem("token", e.data.accessToken);
        console.log(e.data);
        // if (e.data.isAccountConfirmed == "1") {
        // }
        setCompletedProfile(e.data.biography);
        if (e.data.biography == null)
        {
          console.log('test1');
          history("/complete-profile");
          history(0);
        }
        else {
          history("/home");
          // history(0);
          console.log('yakhara');
        }
      })
      .catch((err) => {
        // console.log('sdf');
        if (err.response.status == 422) {
          // history(0);
          history("/activate-account");
          console.log(err);
        }
        // console.error(logIn);
        // console.log(er.response.data.error.details);
        // console.log(err);
      });
  };

  const reset = async (e) => {
    // console.log("before");
    e.preventDefault(); //prevent refreshing
    const res = await axios
      .post(`http://localhost:3001/reset_password`, logIn)
      .then((e) => {
        history("/reset-password");
        console.log("resolved");
        console.log(e.data);
      })
      .catch((er) => console.error(er));
  };

  const handlechange = (e, type) => {
    if (type == "login" || type == "mail") {
      logIn.login = e.target.value;
      // console.log(e.target.value);
    } else if (type == "pass") {
      logIn.password = e.target.value;
      // console.log(e.target.value);
    }
  };
  // const hello = async (e) => {
  //   e.preventDefault();
  //   navigate("/complete_profile");
  // };
  // test();
  const logIn = { login: "", password: "", mail: "" };
  return (
    <ModalWrapper>
      <Button className="login" onClick={handleOpen}>
        Login
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="customlogo">Matcha</div>
            <form className="myform" /*onSubmit={hello}*/>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                className="ithick"
              >
                Login/Email
              </Typography>
              <input
                className="enteremail"
                type="text"
                onChange={(e) => handlechange(e, "login")}
              />
              <br />
              <br />
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                className="ithick"
              >
                Password
              </Typography>
              <input
                className="enteremail"
                type="password"
                onChange={(e) => handlechange(e, "pass")}
                // ref={InputPassRef}
              />
              <br />
              <br />
              {/* <button  className="userlogin" onClick={hello}>Login</button> */}
              <button
                style={{ border: "1px solid black" }}
                className="mylogin"
                onClick={submit}
              >
                Login
              </button>
              <br />
              <br />
              <br />
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                className="ithick"
              >
                Login/Email
              </Typography>
              <input
                className="enteremail"
                type="text"
                onChange={(e) => handlechange(e, "mail")}
              />
              <br />
              <br />
              <button
                style={{ marginTop: "5px", border: "1px solid black" }}
                className="mylogin"
                onClick={reset}
              >
                Reset Password
              </button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </ModalWrapper>
  );
};

export default LoginModal;
