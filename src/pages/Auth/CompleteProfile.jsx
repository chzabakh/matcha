import "../../styles/index.scss";
import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar.jsx";
import Footbar from "../../components/Footbar.jsx";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import { useState } from "react";
import MyDate from "../../components/Date.jsx";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";

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
    flex-wrap: wrap;
    column-gap: 100px;
  }

  .white {
    height: 100%;
    background-color: #ffffffdc;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
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
    margin-top: 50px;
    margin-bottom: 20px;
    color: rgba(255, 119, 0, 1) 75%;
  }

  .bio {
    border: 1px solid rgba(0, 0, 0, 0.6);
  }

  .mf {
    margin-left: -40px;
    margin-top: 5px;
  }

  .test {
    margin-left: 40px;
  }

  .pdp {
    border: 1px solid rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    height: 150px;
    width: 130px;
    margin-top: 50px;
    margin-left: 100px;
  }

  .morepdp {
    /* border: 1px solid rgba(0, 0, 0, 0.6); */
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
    margin-left: 35px;
    margin-top: 40px;

    /* column-gap: 5px; */
  }

  .pdpgridfix {
    border: 1px solid rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    height: 150px;
    width: 130px;
  }

  .personPhotosfix {
    margin-top: -25px;
  }

  .main-main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  }
`;

const CompleteProfile = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <InfosCont>
      <div className="main-container">
        <Navbar />
        <div className="main-main">
          <div className="white infos ">
            <p className="cA">COMPLETE PROFILE</p>
            <div className="twoFlex">
              <div className="personDetails">
                <FormControl className="separate">
                  <FormLabel
                    className="gender"
                    id="demo-row-radio-buttons-group-label"
                  >
                    Gender
                  </FormLabel>
                  <RadioGroup
                    className="gender separate mf"
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      className="bday"
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      className="bday"
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                </FormControl>

                <FormGroup className="bday">
                  Sexual Preferences
                  <FormControlLabel control={<Checkbox />} label="Males" />
                  <FormControlLabel control={<Checkbox />} label="Females" />
                </FormGroup>

                <p className="separate bday">
                  <br />
                  Birthdate
                </p>
                <div className="date separate bday test">
                  <MyDate />
                </div>

                <p className="separate bday">
                  <br />
                  Short Description
                </p>

                <TextField
                  className="separate bday"
                  id="outlined-multiline-static"
                  placeholder="Max 150 Characters"
                  multiline
                  fullWidth
                  rows={7}
                  inputProps={{ maxLength: 150 }}
                />
              </div>

              <div className="personPhotos">
                <div className="personPhotosfix">
                  <p className="separate bday">
                    <br />
                    Profile Picture
                  </p>
                  <div className="pdp"></div>

                  <p className="separate bday">Add More Pictures</p>
                </div>

                <div className="morepdp">
                  <div className="pdpgridfix"></div>
                  <div className="pdpgridfix"></div>
                  <div className="pdpgridfix"></div>
                  <div className="pdpgridfix"></div>
                </div>
              </div>
            </div>
            <Button className="register submitbutton" variant="contained">
              Submit
            </Button>

          <div>
            <label htmlFor="avatar">Avatar</label>
            <input type="file"  id="avatar" hidden />
          </div>
          </div>
        </div>

        <Footbar />
      </div>
    </InfosCont>
  );
};

export default CompleteProfile;
