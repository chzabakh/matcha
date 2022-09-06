import "../../styles/index.scss";
import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar.jsx";
import Footbar from "../../components/Footbar.jsx";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import MyDate from "../../components/Date.jsx";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const InfosCont = styled.div`
  .infos {
    text-align: center;
    font-family: verdana;
    font-style: italic;
    font-weight: bolder;
  }

  .twoFlex {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly ;
    flex-wrap: wrap;
  }

  .white {
    background-color: white;
  }

  .cA {
    margin-top: 30px;
  }

  .personDetails {
    display: flex;
    flex-direction: column;
    /* margin-left: 15%; */
  }

  .personPhotos {
    display: flex;
    flex-direction: column;
    /* margin-right: 15%; */
  }

  .separate {
    margin: 30px;
  }

  .date {
    border: 1px solid rgba(0, 0, 0, 0.6);
    margin-left: 20px;
    margin-right:0px;
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
  }

`;

const Infos = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <InfosCont>
      <div className="main-container">
        <Navbar />
        <div className="white infos">
          <p className="cA">CREATE ACCOUNT</p>
          <div className="twoFlex">
            <div className="personDetails">
              <FormControl className="separate">
                <InputLabel htmlFor="firstName">First Name</InputLabel>
                <Input id="firstName" />
              </FormControl>
              <FormControl className="separate">
                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                <Input id="lastName" />
              </FormControl>
              <FormControl className="separate">
                <FormLabel
                  className="gender"
                  id="demo-row-radio-buttons-group-label"
                >
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
              <p className="bday">Birthdate</p>

              <div className="date separate">
                <MyDate className="test" />
              </div>
            </div>
            <div className="personPhotos">
              <FormControl className="separate">
                <InputLabel htmlFor="userName">Username</InputLabel>
                <Input id="userName" />
              </FormControl>

              <FormControl className="separate">
                <InputLabel htmlFor="emailAddress">Email address</InputLabel>
                <Input id="emailAddress" />
              </FormControl>
              <FormControl className="separate">
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input id="password" />
              </FormControl>
            </div>
          </div>
            <Button className="register submitbutton" variant="contained">Submit</Button>
        </div>
        <Footbar />
      </div>
    </InfosCont>
  );
};

export default Infos;
