import "../styles/index.scss";
import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import userAvatar from "../images/imgPlaceholder.webp";
import React, { useEffect, createContext } from "react";
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
export const DateContext = createContext(null);

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
    border: 1px solid rgba(123, 123, 123, 0.6);
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

  .loc {
    height: 50px;
    padding-top: 10px;
  }

  .pdp {
    border: 1px solid rgba(129, 129, 129, 0.6);
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
    border: 1px solid rgba(128, 128, 128, 0.6);
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
    images: [],
    birthday: "N",
    gender: "N",
    sexualPreferences: "N",
    biography: "",
    city: null,
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
  const [startDate, setStartDate] = useState(null);
  const [tags, settags] = useState("");

  const [image0, setImage0] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");

  const imageHandler = (event) => {
    console.log(event.target.name);
    console.log("gggggggggg");
    console.log(event.target.files);
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        // console.log(reader);
        if (event.target.name === "img0") {
          userData2.images[0] = event.target.files[0];
          setImage0(event.target.files[0]);
          setAvatar0(reader.result);
          setIsuploaded0(1);
        } else if (event.target.name === "img1") {
          setAvatar1(reader.result);
          userData2.images[1] = event.target.files[0];
          setImage1(event.target.files[0]);
          setIsuploaded1(1);
        } else if (event.target.name === "img2") {
          setAvatar2(reader.result);
          userData2.images[2] = event.target.files[0];
          setImage2(event.target.files[0]);
          setIsuploaded2(1);
        } else if (event.target.name === "img3") {
          setAvatar3(reader.result);
          userData2.images[3] = event.target.files[0];
          setImage3(event.target.files[0]);
          setIsuploaded3(1);
        } else if (event.target.name === "img4") {
          setAvatar4(reader.result);
          userData2.images[4] = event.target.files[0];
          setImage4(event.target.files[0]);
          setIsuploaded4(1);
        }
      }
      console.log("thiiiiiis");
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const deleteImage = (event, pp) => {
    console.log(pp);
    console.log(event);
    if (pp === "img0") {
      setAvatar0(userAvatar);
      setImage0("");
      setIsuploaded0(0);
      console.log("hello");
    } else if (pp === "img1") {
      setAvatar1(userAvatar);
      setImage1("");
      setIsuploaded1(0);
    } else if (pp === "img2") {
      setAvatar2(userAvatar);
      setImage2("");
      setIsuploaded2(0);
    } else if (pp === "img3") {
      setAvatar3(userAvatar);
      setImage3("");
      setIsuploaded3(0);
    } else if (pp === "img4") {
      setAvatar4(userAvatar);
      setImage3("");
      setIsuploaded4(0);
    }
    // setAvatar0(userAvatar);
    // setIsuploaded0(0);
  };

  const onSubmitForm2 = async (e) => {
    // console.log("hello");
    // console.log(startDate );
    // const hh = startDate.toISOString().split('T')[0];
    // console.log(hh );
    // console.log("hello");

    e.preventDefault();
    try {
      const profileImage = new FormData();
      const feedImages = new FormData();
      if (userData2.images[0]) {
        profileImage.append("image[]", userData2.images[0]);
      }
      if (userData2.images[1]) {
        feedImages.append("images[]", userData2.images[1]);
      }
      if (userData2.images[2]) {
        feedImages.append("images[]", userData2.images[2]);
      }
      if (userData2.images[3]) {
        feedImages.append("images[]", userData2.images[3]);
      }
      if (userData2.images[4]) {
        feedImages.append("images[]", userData2.images[4]);
      }
      const res = await axios.post(
        "http://localhost:3001/register",
        {
          ...userData2,
        },
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vdXJhcyIsImlkIjoxLCJpYXQiOjE2Njk4MzE3ODR9.0JYl_2gwZQjbJrL_QvSI12XMPSj8RIxArt-cDm95dyc",
          },
        }
      );
      const res1 = await axios.post(
        "http://localhost:3001/upload_profile_image",
        profileImage,
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vdXJhcyIsImlkIjoxLCJpYXQiOjE2Njk4MzE3ODR9.0JYl_2gwZQjbJrL_QvSI12XMPSj8RIxArt-cDm95dyc",
          },
        }
      );
      const res2 = await axios.post(
        "http://localhost:3001/upload_feed_images",
        profileImage,
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vdXJhcyIsImlkIjoxLCJpYXQiOjE2Njk4MzE3ODR9.0JYl_2gwZQjbJrL_QvSI12XMPSj8RIxArt-cDm95dyc",
          },
        }
      );
      history.push("/account_success");
    } catch (err) {
      history.push("/account_failed");
    }
  };

  const formerror = () => {};

  const onHandleChange = (e) => {
    setUserData2({ ...userData2, [e.target.id]: e.target.value });
  };
  const [city, setCity] = useState("");
  const [gender, setgender] = useState("");
  const [spm, setspm] = useState(false);
  const [spf, setspf] = useState(false);
  const [bdate, setbdate] = useState("");
  const bd = "";
  const handleChangem = (e) => {
    // setUserData2({...userData2, sexualPreferences: "N"});
    setspm(e.target.checked);
    // if ((spm && spf) || (!spm && !spf))
    // {
    //   setUserData2({...userData2, sexualPreferences: "M"});
    // }
  };

  const handleChangef = (e) => {
    // setUserData2({...userData2, sexualPreferences: "N"});
    setspf(e.target.checked);
    // if ((spm && spf) || (!spm && !spf))
    // {
    // setUserData2({...userData2, sexualPreferences: "F"});
    // }
  };

  const hello = () => {
    console.log("test");
  };

  useEffect(() => {
    if ((spm == false && spf == false) || (spm == true && spf == true)) {
      setUserData2({ ...userData2, sexualPreferences: "N" });
    } else if (spm == true && spf == false) {
      setUserData2({ ...userData2, sexualPreferences: "M" });
    } else if (spf == true && spm == false) {
      setUserData2({ ...userData2, sexualPreferences: "F" });
    }
  }, [spm, spf]);

  useEffect(() => {
    if (startDate)
      setUserData2({
        ...userData2,
        birthday: startDate.toISOString().split("T")[0],
      });
    console.log(userData2.birthday);
  }, [startDate]);

  useEffect(() => {
    if (tags) setUserData2({ ...userData2, tags: tags });
  }, [tags]);

  const genderChange = (e) => {
    console.log(image0);
    console.log(image1);
    console.log(image2);
    console.log(image3);
    console.log(image4);
    setgender(e.target.value);
    setUserData2({ ...userData2, gender: e.target.value });
  };
  console.log("spm " + spm);
  console.log("spf " + spf);
  console.log("gender " + gender);
  console.log(userData2);
  // const formerror = [M, F].filter((v) => v).length !== 1;

  const getLocation = (e) => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      // console.log(Geolocation.getCurrentPosition());
      // userData2.longitude = -6.8889402;
      // userData2.latitude = 32.8781108;
      userData2.longitude = position.coords.longitude;
      userData2.latitude = position.coords.latitude;
      // console.log("hay");
      const objj = await axios.get(
        `https://us1.locationiq.com/v1/reverse?key=pk.5bfdc788e3ad8b271b37318a1b98387b&lat=${userData2.latitude}&lon=${userData2.longitude}&format=json`
      );
      userData2.city = objj.data.address.city;
      // console.log(userData2.city);
      // console.log("hello",objj.data.address.city);
      console.log("Latitude is :", position.coords.latitude);
      // userData2.city = userData2.address.city;
      setCity(userData2.city);
      // console.log(userData2.city);

      console.log("Longitude is :", position.coords.longitude);
    });
  };

  return (
    <InfosCont>
      <div className="main-container">
        <NavbarLogged />
        <main className="main-main">
          <div className="white infos">
            <p className="cA">COMPLETE PROFILE</p>
            <form onSubmit={onSubmitForm2}>
              <div className="twoFlex">
                <div className="personDetails">
                  <FormControl /*error={formerror}*/ className="separate">
                    <FormLabel className="gender" id="gender">
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
                    <p className="bday">Sexual Preferences</p>
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
                    <br />
                    Birthdate
                  </p>
                  <div className="date separate bday test button">
                    <MyDate
                      className="button"
                      startDate={startDate}
                      setStartDate={setStartDate}
                      onChange={hello}
                    />
                  </div>

                  <p className="separate bday">
                    <br />
                    Short Description
                  </p>

                  <StyledTextField
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "90%",
                    }}
                    className="separate bday"
                    id="biography"
                    placeholder="Max 150 Characters"
                    multiline
                    // fullWidth
                    rows={7}
                    inputProps={{ maxLength: 150 }}
                    onChange={onHandleChange}
                  />

                  <p className="separate bday">
                    <br />
                    Location
                  </p>
                  <div
                    className="date separate loc"
                    style={{
                      color: "gray",
                      fontFamily: "Arial",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "70%",
                    }}
                  >
                    {/* {userData2.city == "" ? null : (
                      <div style={{ marginTop: "5px", marginBottom: "5px" }}>
                        <br />
                        {city}
                      </div>
                    )} */}
                    {city}
                  </div>
                  <Button
                    className="date  submitbutton bday"
                    style={{
                      backgroundColor: "gray",
                      color: "white",
                      marginTop: "5px",
                      marginBottom: "5px",
                      width: "200px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    onClick={getLocation}
                  >
                    Get my Position
                  </Button>
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
                    <MyTags
                      className="separate bday"
                      tags={tags}
                      settags={settags}
                    />
                    <em>press enter or space to add new tag</em>
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
