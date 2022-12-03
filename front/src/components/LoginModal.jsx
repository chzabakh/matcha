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
import { useHistory } from "react-router-dom";
import { CenterFocusStrong } from "@mui/icons-material";
import { autocompleteClasses } from "@mui/material";

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
  const navigate = useHistory();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputPass, setInputPass] = useState("");
  const InputPassRef = useRef("");

  const submit = async () => {
    // console.log("before");
    const res = await axios
      .post(`http://localhost:3001/login`, logIn)
      .then((e) => {
        console.log("login resolved");
        console.log(e.data);
      })
      .catch((er) => console.error(er));
  };

  const reset = async () => {
    // console.log("before");
    const res = await axios
      .post(`http://localhost:3001/reset_password`, {
        login: "mouras",
        password: "Maroc2019-",
      })
      .then((e) => {
        console.log("resolved");
        console.log(e.data);
      })
      .catch((er) => console.error(er));
  };

  const handlechange = (e, type) => {
    if (type == "mail") {
      logIn.login = e.target.value;
      // console.log(e.target.value);
    } else if (type == "pass") {
      logIn.password = e.target.value;
      // console.log(e.target.value);
    }
  };
  const hello = async (e) => {
    e.preventDefault();
    navigate.push("/complete_profile");
  };
  // test();
  const logIn = {login:"", password:""}
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
            <form className="myform" onSubmit={hello}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                className="ithick"
              >
                Email
              </Typography>
              <input
                className="enteremail"
                type="text"
                placeholder="ex@am.ple"
                onChange={(e) => handlechange(e, "mail")}
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
