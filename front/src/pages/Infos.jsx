import "../styles/index.scss";
import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar.jsx";
import Footbar from "../components/Footbar.jsx";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Button from "@mui/material/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";

const InfosCont = styled.div`
  .infos {
    text-align: center;
    font-family: verdana;
    font-style: italic;
    font-weight: bolder;
    width: 100%;
  }

  .twoFlex {
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 150px;
    flex-wrap: wrap;
  }

  .white {
    background-color: #ffffffdc;
  }

  .cA {
    margin-top: 30px;
  }

  .personDetails {
    display: flex;
    flex-direction: column;
  }

  .personPhotos {
    display: flex;
    flex-direction: column;
  }

  .separate {
    margin: 30px;
  }

  .date {
    border: 1px solid rgba(0, 0, 0, 0.6);
    margin-left: 20px;
    margin-right: 0px;
  }

  .bday {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    font-size: 1rem;
    text-align: left;
    padding-left: 12px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: -20px;
  }

  .gender {
    text-align: left;
    margin-left: 12px;
  }

  .submitbutton {
    margin-bottom: 20px;
    color: rgba(255, 119, 0, 1) 75%;
  }
`;

const Infos = () => {
  const history = useHistory();

  const [selectedDate, setSelectedDate] = useState(null);
  const [userData, setUserData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onHandleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const onSubmitForm = async () => {
    // const res = await axios.get(`http://localhost:3001?username=${username}`)
    try {
      const res = await axios.post("http://localhost:3001/register", {
        ...userData,
      });
      history.push("/account_success");
    } catch (err) {
      console.log("my error");
    }
    // console.log(res.status);
    // if (res.status == 200)
    // {
    //   // history.push("/account_success");
    // }
  };
  return (
    <InfosCont>
      <div className="main-container">
        <Navbar />
        <main className="main-main">
          <div className="white infos">
            <p className="cA">CREATE ACCOUNT</p>
            <div className="twoFlex">
              <div className="personDetails">
                <FormControl className="separate">
                  <InputLabel htmlFor="userName">Username</InputLabel>
                  <Input autoComplete="off" id="username" onChange={onHandleChange} />
                </FormControl>
                <FormControl className="separate">
                  <InputLabel htmlFor="firstName">First Name</InputLabel>
                  <Input autoComplete="off" id="firstName" onChange={onHandleChange} />
                </FormControl>
                <FormControl className="separate">
                  <InputLabel htmlFor="lastName">Last Name</InputLabel>
                  <Input autoComplete="off" id="lastName" onChange={onHandleChange} />
                </FormControl>
              </div>
              <div className="personPhotos">
                <FormControl className="separate">
                  <InputLabel htmlFor="emailAddress">Email address</InputLabel>
                  <Input autoComplete="off" id="email" onChange={onHandleChange} />
                </FormControl>
                <FormControl className="separate">
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input autoComplete="off"
                    type="password"
                    id="password"
                    onChange={onHandleChange}
                  />
                </FormControl>
              </div>
            </div>
            <Button
              className="subregister submitbutton"
              variant="contained"
              onClick={onSubmitForm}
            >
              Submit
            </Button>
          </div>
        </main>
        <Footbar />
      </div>
    </InfosCont>
  );
};

export default Infos;
