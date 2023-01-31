import React, { useEffect, useState } from "react";
import bgImage from "../images/background.webp";
import styled from "styled-components";
import Navbar from "../components/Navbar.jsx";
import Footbar from "../components/Footbar";
import "../styles/index.scss";
import { Link, useParams } from "react-router-dom";
import NavbarLogged from "../components/NavbarLogged";
import axios from "axios";

const Main = styled.div`
  .infos {
    text-align: center;
    font-family: verdana;
    font-style: italic;
    font-weight: bolder;
    background-color: #ffffffdc;
    width: 90%;
    position: absolute;
    top: 100px;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .rel {
    position: relative;
  }
  .bigger {
    font-size: larger;
    font-style: italic;
    /* text-decoration: underline; */
    margin-bottom: 50px;
  }
  .twoFlex {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    column-gap: 50px;
    /* column-gap: 100px; */
  }
  .profilePicture {
    /* width: 40%; */
    flex-grow: 1;
  }
  .userInfos {
    /* width: 20%; */
    flex-grow: 2;
    margin-right: 20px;
  }

  .images {
    border: 1px solid rgba(129, 129, 129, 0.6);
    height: 300px;
    width: 260px;
    margin: auto;
    margin-bottom: 10px;
    object-fit: cover;
    /* margin-left: 20px; */
    /* position: relative; */
    /* margin-top: 50px;
    margin-left: 100px;
    padding-top: 1px; */
  }

  .imagescontainer {
    border: 1px solid rgba(129, 129, 129, 0.6);
    height: 400px;
    width: 360px;
    margin-left: 20px;
  }
  @media (max-width: 700px) {
    .images {
      border: 1px solid rgba(129, 129, 129, 0.6);
      height: 225px;
      width: 195px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 10px;
      object-fit: cover;
    }
    .imagescontainer {
      border: 1px solid rgba(129, 129, 129, 0.6);
      height: 300px;
      width: 360px;
      margin-left: 20px;
    }
  }
  .elements {
    /* margin-right: 50px; */
    margin-top: 20px;
    font-size: 14px;
    font-family: sans-serif;
  }
  .elementsfix {
    /* margin-left: -400px !important; */
    margin-top: 30px;
    /* text-align: left; */
    display: flex;
    justify-content: space-evenly;
  }
  .jumia {
    display: inline;
    font-family: sans-serif;
  }
  .bio {
    margin-top: 80px;
    margin-bottom: 80px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  .name {
    margin-top: 30px;
  }
  .disabledbtn {
    border: 1px solid rgba(122, 122, 122, 0.6);
    background: #c0c0c0 !important;
    border-radius: 10px;
    width: 100px;
    height: 35px;
    color: #848484 !important;
    margin-bottom: 20px;
    cursor: not-allowed;
  }
  .forButtons {
    display: flex;
    justify-content: space-around;
  }
  .browseButtons {
    border: 1px solid rgba(122, 122, 122, 0.6);
    background: linear-gradient(
      90deg,
      rgba(255, 0, 108, 1) 25%,
      rgba(255, 119, 0, 1) 75%
    );
    border-radius: 10px;
    width: 100px;
    height: 35px;
    color: #f4f4f4;
    margin-bottom: 20px;
  }
  .goright {
    width: 25%;
    text-align: right;
  }
  .goleft {
    width: 25%;
    text-align: left;
  }
`;

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [imgCnt, setImgCnt] = useState(0);
  const [count, setCount] = useState(0);
  const fetchUsers = async (id) => {
    if (id === "me") {
      const { data } = await axios.get("http://localhost:3001/get_me", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setUserData(data);
    } else if (id !== "me") {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
    }
    setIsLoading(false);
  };

  let { id } = useParams();

  useEffect(() => {
    fetchUsers(id);
  }, []);

  if (isLoading) return <div>Loading ....</div>;
  return (
    <Main className=" main-container">
      <NavbarLogged />
      <main className=" main-main rel">
        <div className="infos">
          <p className="bigger">{userData.username}</p>
          <div className="twoFlex">
            {/* {userData.images?.map(({ image }, idx) => (
              <div className="profilePicture" key={idx}>
              <img
              src={`http://localhost:3001/images/${image}`}
              alt="profile picture"
              width="300"
              height="300"
              />
              </div>
            ))} */}
            <div className="imagescontainer">
              <img
                src={`http://localhost:3001/images/${userData.images[count].image}`}
                alt="avatar0"
                className="images"
              />
              {/* {console.log(userData.images.length)} */}
              <div className="forButtons">
                <button
                  className={`browseButtons ${count ? "" : "disabledbtn"}`}
                  onClick={() => count > 0 && setCount(count - 1)}
                  // disabled={!count}
                >
                  Previous
                </button>
                <button
                  className={`browseButtons ${
                    count < userData.images.length - 1 ? "" : "disabledbtn"
                  }`}
                  onClick={() =>
                    count < userData.images.length - 1 && setCount(count + 1)
                  }
                  // disabled={count}
                >
                  Next
                </button>
              </div>
              <div>
                <p className="jumia name">{userData.firstName} </p>
                <p className="jumia name">{userData.lastName}</p>
              </div>
            </div>
            <div className="userInfos">
              <p className="bio">❝ {userData.biography} ❞</p>
              <div className="elementsfix">
                <div className="goright">
                  <span className="elements">Gender: </span>
                </div>
                <div className="goleft">
                  {userData?.gender === "M" ? (
                    <span>male</span>
                  ) : (
                    <span>female</span>
                  )}
                </div>
              </div>
              <div className="elementsfix">
                <div className="goright">
                  <span className="elements">Birthdate : </span>
                </div>
                <div className="goleft">
                  <span>{userData.birthday}</span>
                </div>
              </div>
              <div className="elementsfix">
                <div className="goright">
                  <span className="elements">Sexual Preferences : </span>
                </div>
                <div className="goleft">
                  {userData.sexualPreferences === "M" ? (
                    <span>male</span>
                  ) : (
                    <span>female</span>
                  )}
                </div>
              </div>
              <div className="elementsfix">
                <div className="goright">
                  <span className="elements">City : </span>
                </div>
                <div className="goleft">
                  <span>{userData.city}</span>
                </div>
              </div>
              {console.log(userData.images.length)}
            </div>
          </div>
        </div>
      </main>
      <Footbar />
    </Main>
  );
};
export default Profile;
