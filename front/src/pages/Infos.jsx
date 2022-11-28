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
    border-radius: 18px;
    cursor: pointer;
  }
  .bf {
    display: block;
  }
  .errr {
    font-size: 10px;
    color: red;
  }
`;

const Infos = () => {
  const history = useHistory();

  const [selectedDate, setSelectedDate] = useState(null);
  const [DtCheck0, setDtCheck0] = useState(0);
  const [DtCheck1, setDtCheck1] = useState(0);
  const [DtCheck2, setDtCheck2] = useState(0);
  const [DtCheck3, setDtCheck3] = useState(0);
  const [DtCheck4, setDtCheck4] = useState(0);
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

  const onHandleBlur = (e, type) => {
    if (type == "password") {
      if (
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/.test(
          e.target.value
        )
      ) {
        setUserData({ ...userData, [e.target.id]: e.target.value });
        setDtCheck0(1);
      } else {
        setUserData({ ...userData, [e.target.id]: e.target.value });
        setDts(0);
        setDtCheck0(0);
      }
    } else if (type == "user") {
      console.log("the value is: " + dts);
      if (/^\w{3,10}$/.test(e.target.value)) {
        setUserData({ ...userData, [e.target.id]: e.target.value });
        setDtCheck1(1);
      } else {
        setUserData({ ...userData, [e.target.id]: e.target.value });
        setDts(0);
        setDtCheck1(0);
      }
    } else if (type == "first") {
      if (/^[a-zA-Z]{2,15} ?[a-zA-Z]{2,15}$/.test(e.target.value)) {
        setUserData({ ...userData, [e.target.id]: e.target.value });
        setDtCheck2(1);
      } else {
        setUserData({ ...userData, [e.target.id]: e.target.value });
        setDts(0);
        setDtCheck2(0);
      }
    } else if (type == "last") {
      if (/^[a-zA-Z]{2,15} ?[a-zA-Z]{2,15}$/.test(e.target.value)) {
        setUserData({ ...userData, [e.target.id]: e.target.value });
        setDtCheck3(1);
      } else {
        setUserData({ ...userData, [e.target.id]: e.target.value });
        setDts(0);
        setDtCheck3(0);
      }
    } else if (type == "mail") {
      if (/^\w{1,25}\@[a-zA-Z]{1,20}\.[a-zA-Z]{1,10}$/.test(e.target.value)) {
        setUserData({ ...userData, [e.target.id]: e.target.value });
        setDtCheck4(1);
      } else {
        setUserData({ ...userData, [e.target.id]: e.target.value });
        setDts(0);
        setDtCheck4(0);
      }
    }
  };

  const [dts, setDts] = useState(1);

  const onSubmitForm = async (e) => {
    e.preventDefault();  //prevent refreshing
    if (DtCheck0 + DtCheck1 + DtCheck2 + DtCheck3 + DtCheck4 == 5)
    {
      setDts(1);
    }

    else if (DtCheck0 + DtCheck1 + DtCheck2 + DtCheck3 + DtCheck4 != 5)
    {
      setDts(0);
      return;
    }
    try {
      const res = await axios.post("http://localhost:3001/register", {
        ...userData,
      });
      console.log("test" + res.status);
      history.push("/account_success");
    } catch (err) {
      history.push("/account_failed");
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
            <form onSubmit={onSubmitForm}>
              <div className="twoFlex">
                <div className="personDetails">
                  <FormControl className="separate">
                    <InputLabel htmlFor="userName">Username</InputLabel>
                    <Input
                      required={true}
                      autoComplete="off"
                      id="username"
                      onChange={(e) => onHandleChange(e)}
                      onBlur={(e) => onHandleBlur(e, "user")}
                    />
                    {
                      (DtCheck1 == 0 && userData.username != "") ? (<div className="errr">Username must be 3 to 10 chars</div>) : (<div></div>)
                    }
                  </FormControl>
                  <FormControl className="separate">
                    <InputLabel htmlFor="firstName">First Name</InputLabel>
                    <Input
                      required={true}
                      autoComplete="off"
                      id="firstName"
                      onChange={(e) => onHandleChange(e)}
                      onBlur={(e) => onHandleBlur(e, "first")}
                    />
                    {
                      (DtCheck2 == 0 && userData.firstName != "") ? (<div className="errr">First Name must be 2 to 15 chars and letters only</div>) : (<div></div>)
                    }
                  </FormControl>
                  <FormControl className="separate">
                    <InputLabel htmlFor="lastName">Last Name</InputLabel>
                    <Input
                      required={true}
                      autoComplete="off"
                      id="lastName"
                      onChange={(e) => onHandleChange(e)}
                      onBlur={(e) => onHandleBlur(e, "last")}
                    />
                    {
                      (DtCheck3 == 0 && userData.lastName != "") ? (<div className="errr">Last Name must be 2 to 15 chars and letters only</div>) : (<div></div>)
                    }
                  </FormControl>
                </div>
                <div className="personPhotos">
                  <FormControl className="separate">
                    <InputLabel htmlFor="emailAddress">
                      Email address
                    </InputLabel>
                    <Input
                      required={true}
                      autoComplete="off"
                      id="email"
                      onChange={(e) => onHandleChange(e)}
                      onBlur={(e) => onHandleBlur(e, "mail")}
                    />
                    {
                      (DtCheck4 == 0 && userData.email != "") ? (<div className="errr">Not a valid Email format</div>) : (<div></div>)
                    }
                  </FormControl>
                  <FormControl className="separate">
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                      required={true}
                      autoComplete="off"
                      type="password"
                      id="password"
                      onChange={(e) => onHandleChange(e)}
                      onBlur={(e) => onHandleBlur(e, "password")}
                    />
                    {
                      (DtCheck0 == 0 && userData.password != "") ? (<div className="errr">8 to 16 chars (lowercase, uppercase, number, symbol)</div>) : (<div></div>)
                    }
                  </FormControl>
                </div>
              </div>
              {/* {dts == 0 ? <div>error</div> : null} */}
              <Button
                type="submit"
                className="subregister submitbutton"
                // style={{ color: "white" }}
                variant="contained"
                // disabled={
                //   DtCheck0 + DtCheck1 + DtCheck2 + DtCheck3 + DtCheck4 == 5
                //     ? false
                //     : true
                // }
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

export default Infos;
