import "../styles/index.scss";
import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import userAvatar from "../images/imgPlaceholder.webp";
import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar.jsx";
import Footbar from "../components/Footbar.jsx";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import { useState } from "react";
import MyDate from "../components/Date.jsx";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import MyUpload from "../components/UploadFiles.jsx";
import AddIcon from "@mui/icons-material/AddAPhoto";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import MyTags from "../components/Tags.jsx";
import NavbarLogged from "../components/NavbarLogged";
import { useHistory } from "react-router-dom";
import axios from "axios";

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
    /* backdrop-filter: blur(5px); */
    /* -webkit-backdrop-filter: blur(5px); */
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

  .tagsfix {
    max-width: 150px;
  }

  .gender {
    text-align: left;
    margin-left: 12px;
  }

  .submitbutton {
    margin-top: 50px;
    margin-bottom: 20px;
    border-radius: 18px;
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
    /* border-radius: 10px; */
    height: 132px;
    position: relative;
    width: 130px;
    margin-top: 50px;
    margin-left: 100px;
    padding-top: 1px;
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
    /* border-radius: 10px; */
    height: 132px;
    width: 130px;
    padding-top: 1px;
    position: relative;
  }

  .personPhotosfix {
    margin-top: -25px;
  }

  .correctimg {
    height: 100%;
    width: 100%;
  }
`;

const CompleteProfile = () => {
  const history = useHistory();

  const [userData2, setUserData2] = useState({
    birthday: "",
    gender: "",
    sexualPreferences: "",
    biography: "",
    city: "",
    latitude: 0.0,
    longitude: 0.0,
    tags: [],
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [avatar0, setAvatar0] = useState(userAvatar);
  const [avatar1, setAvatar1] = useState(userAvatar);
  const [avatar2, setAvatar2] = useState(userAvatar);
  const [avatar3, setAvatar3] = useState(userAvatar);
  const [avatar4, setAvatar4] = useState(userAvatar);
  const [images, setImages] = useState({
    image1: "",
    images2: "",
  });
  const [isuploaded0, setIsuploaded0] = useState(0);
  const [isuploaded1, setIsuploaded1] = useState(0);
  const [isuploaded2, setIsuploaded2] = useState(0);
  const [isuploaded3, setIsuploaded3] = useState(0);
  const [isuploaded4, setIsuploaded4] = useState(0);

  const imageHandler = (event) => {
    console.log(event.target.name);
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        if (event.target.name === "img0") {
          setAvatar0(reader.result);
          setIsuploaded0(1);
        } else if (event.target.name === "img1") {
          setAvatar1(reader.result);
          setIsuploaded1(1);
        } else if (event.target.name === "img2") {
          setAvatar2(reader.result);
          setIsuploaded2(1);
        } else if (event.target.name === "img3") {
          setAvatar3(reader.result);
          setIsuploaded3(1);
        } else if (event.target.name === "img4") {
          setAvatar4(reader.result);
          setIsuploaded4(1);
        }
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const deleteImage = (event, pp) => {
    console.log(pp);
    console.log(event);
    if (pp === "img0") {
      setAvatar0(userAvatar);
      setIsuploaded0(0);
      console.log("hello");
    } else if (pp === "img1") {
      setAvatar1(userAvatar);
      setIsuploaded1(0);
    } else if (pp === "img2") {
      setAvatar2(userAvatar);
      setIsuploaded2(0);
    } else if (pp === "img3") {
      setAvatar3(userAvatar);
      setIsuploaded3(0);
    } else if (pp === "img4") {
      setAvatar4(userAvatar);
      setIsuploaded4(0);
    }
    // setAvatar0(userAvatar);
    // setIsuploaded0(0);
  };

  const onSubmitForm2 = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/register", {
        ...userData2,
      });
      history.push("/account_success");
    } catch (err) {
      history.push("/account_failed");
    }
  };

  const formerror = () => {};

  const onHandleChange = (e) => {
    setUserData2({ ...userData2, [e.target.id]: e.target.value });
  };
  const [gender, setgender] = useState('');
  const [spm, setspm] = useState(false);
  const [spf, setspf] = useState(false);
  const handleChangem = (e) => {
    setUserData2({...userData2, sexualPreferences: "M"})
    setspm(e.target.checked);
  };
  const handleChangef = (e) => {
    setspf(e.target.checked);
  };
  const genderChange = (e) => {
    setgender(e.target.value);
    setUserData2({...userData2, gender: e.target.value});

  }
  console.log("spm " + spm);
  console.log("spf " + spf);
  console.log("gender " + gender);
  console.log(userData2);
  // const formerror = [M, F].filter((v) => v).length !== 1;
  return (
    <InfosCont>
      <div className="main-container">
        <NavbarLogged />
        <main className="main-main">
          <div className="white infos ">
            <p className="cA">COMPLETE PROFILE</p>
            <form onSubmit={onSubmitForm2}>
              <div className="twoFlex">
                <div className="personDetails">
                  <FormControl
                    /*error={formerror}*/ className="separate"
                  >
                    <FormLabel
                      className="gender"
                      id="gender"
                    >
                      Gender
                    </FormLabel>
                    <RadioGroup
                      className="gender separate mf"
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      aria-required={true}
                      value={gender}
                      onChange={genderChange}
                    >
                      <FormControlLabel
                        className="bday"
                        value="M"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        className="bday"
                        value="F"
                        control={<Radio />}
                        label="Female"
                      />
                    </RadioGroup>
                  </FormControl>



                  <FormControl required>
                      <p className="bday">
                        Sexual Preferences
                        </p>
                    <FormGroup row className="separate bday">
                      <FormControlLabel
                        control={
                          <Checkbox checked={spm} onChange={handleChangem} />
                        }
                        label="Males"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox checked={spf} onChange={handleChangef} />
                        }
                        label="Females"
                      />
                    </FormGroup>
                  </FormControl>




                  <p className="separate bday">
                    <br/>
                    Birthdate
                  </p>
                  <div className="date separate bday test button">
                    <MyDate className="button" />
                  </div>

                  <p className="separate bday">
                    <br />
                    Short Description
                  </p>

                  <StyledTextField
                    className="separate bday"
                    id="outlined-multiline-static"
                    placeholder="Max 150 Characters"
                    multiline
                    // fullWidth
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
                    <div className="pdp">
                      <img src={avatar0} alt="avatar0" className="correctimg" />
                      {isuploaded0 ? (
                        <div>
                          <IconButton
                            className="customaddbutton"
                            color="primary"
                            aria-label="upload picture"
                            component="label"
                          >
                            <input
                              hidden
                              accept="image/*"
                              type="file"
                              name="img0"
                              onChange={imageHandler}
                            />
                            <PhotoCamera />
                          </IconButton>

                          <IconButton
                            className="customdeletebutton"
                            color="error"
                            aria-label="delete picture"
                            component="label"
                            name="img0"
                            onClick={(e) => deleteImage(e, "img0")}
                          >
                            <DeleteForeverIcon />
                          </IconButton>
                        </div>
                      ) : (
                        <IconButton
                          className="customaddbutton"
                          color="primary"
                          aria-label="upload picture"
                          component="label"
                        >
                          <input
                            hidden
                            accept="image/*"
                            type="file"
                            name="img0"
                            onChange={imageHandler}
                          />
                          <PhotoCamera />
                        </IconButton>
                      )}
                    </div>

                    <p className="separate bday">Add More Pictures</p>
                  </div>

                  <div className="morepdp">
                    <div className="pdpgridfix">
                      <img src={avatar1} alt="avatar1" className="correctimg" />
                      {isuploaded1 ? (
                        <div>
                          <IconButton
                            className="customaddbutton"
                            color="primary"
                            aria-label="upload picture"
                            component="label"
                          >
                            <input
                              hidden
                              accept="image/*"
                              type="file"
                              name="img1"
                              onChange={imageHandler}
                            />
                            <PhotoCamera />
                          </IconButton>

                          <IconButton
                            className="customdeletebutton"
                            color="error"
                            aria-label="delete picture"
                            component="label"
                            name="img1"
                            onClick={(e) => deleteImage(e, "img1")}
                          >
                            <DeleteForeverIcon />
                          </IconButton>
                        </div>
                      ) : (
                        <IconButton
                          className="customaddbutton"
                          color="primary"
                          aria-label="upload picture"
                          component="label"
                        >
                          <input
                            hidden
                            accept="image/*"
                            type="file"
                            name="img1"
                            onChange={imageHandler}
                          />
                          <PhotoCamera />
                        </IconButton>
                      )}
                    </div>
                    <div className="pdpgridfix">
                      <img src={avatar2} alt="avatar2" className="correctimg" />

                      {isuploaded2 ? (
                        <div>
                          <IconButton
                            className="customaddbutton"
                            color="primary"
                            aria-label="upload picture"
                            component="label"
                          >
                            <input
                              hidden
                              accept="image/*"
                              type="file"
                              name="img2"
                              onChange={imageHandler}
                            />
                            <PhotoCamera />
                          </IconButton>

                          <IconButton
                            className="customdeletebutton"
                            color="error"
                            aria-label="delete picture"
                            component="label"
                            name="img2"
                            onClick={(e) => deleteImage(e, "img2")}
                          >
                            <DeleteForeverIcon />
                          </IconButton>
                        </div>
                      ) : (
                        <IconButton
                          className="customaddbutton"
                          color="primary"
                          aria-label="upload picture"
                          component="label"
                        >
                          <input
                            hidden
                            accept="image/*"
                            type="file"
                            name="img2"
                            onChange={imageHandler}
                          />
                          <PhotoCamera />
                        </IconButton>
                      )}
                    </div>
                    <div className="pdpgridfix">
                      <img src={avatar3} alt="avatar3" className="correctimg" />
                      {isuploaded3 ? (
                        <div>
                          <IconButton
                            className="customaddbutton"
                            color="primary"
                            aria-label="upload picture"
                            component="label"
                          >
                            <input
                              hidden
                              accept="image/*"
                              type="file"
                              name="img3"
                              onChange={imageHandler}
                            />
                            <PhotoCamera />
                          </IconButton>

                          <IconButton
                            className="customdeletebutton"
                            color="error"
                            aria-label="delete picture"
                            component="label"
                            name="img3"
                            onClick={(e) => deleteImage(e, "img3")}
                          >
                            <DeleteForeverIcon />
                          </IconButton>
                        </div>
                      ) : (
                        <IconButton
                          className="customaddbutton"
                          color="primary"
                          aria-label="upload picture"
                          component="label"
                        >
                          <input
                            hidden
                            accept="image/*"
                            type="file"
                            name="img3"
                            onChange={imageHandler}
                          />
                          <PhotoCamera />
                        </IconButton>
                      )}
                    </div>
                    <div className="pdpgridfix">
                      <img src={avatar4} alt="avatar4" className="correctimg" />
                      {isuploaded4 ? (
                        <div>
                          <IconButton
                            className="customaddbutton"
                            color="primary"
                            aria-label="upload picture"
                            component="label"
                          >
                            <input
                              hidden
                              accept="image/*"
                              type="file"
                              name="img4"
                              onChange={imageHandler}
                            />
                            <PhotoCamera />
                          </IconButton>

                          <IconButton
                            className="customdeletebutton"
                            color="error"
                            aria-label="delete picture"
                            component="label"
                            name="img4"
                            onClick={(e) => deleteImage(e, "img4")}
                          >
                            <DeleteForeverIcon />
                          </IconButton>
                        </div>
                      ) : (
                        <IconButton
                          className="customaddbutton"
                          color="primary"
                          aria-label="upload picture"
                          component="label"
                        >
                          <input
                            hidden
                            accept="image/*"
                            type="file"
                            name="img4"
                            onChange={imageHandler}
                          />
                          <PhotoCamera />
                        </IconButton>
                      )}
                    </div>
                  </div>
                  <p className="separate bday tagsfix">Add Tags (max 5)</p>
                  <div className="date separate bday test button">
                    <MyTags className="separate bday" />
                  </div>
                </div>
              </div>
              <Button
                type="submit"
                className="subregister submitbutton"
                variant="contained"
              >
                Submit
              </Button>
            </form>
          </div>
        </main>

        <Footbar />
      </div>
    </InfosCont>
  );
};

export default CompleteProfile;
const StyledTextField = styled(TextField)`
  width: 90%;
`;
