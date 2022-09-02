import React from "react"
import bgImage from '../../images/background.webp'
import "../../styles/index.scss"
import styled from "styled-components"


const Main = styled.div`

  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${bgImage});

  .main-header {
  display: flex;
  height: 6rem;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 1),
  rgba(0, 0, 0, 0.4));
}

.logo {
  font-family: Lobster, cursive;
  color : white;
  font-size: 40px;
  font-weight: normal;
  margin-left: 20px;
}

.login {
font-family: sans-serif;
margin-right: 20px;
background-color: white;
font-size: 18px;
padding: 10px 25px;
border-radius: 30px;
cursor: pointer;
}

.main-main {
  flex-grow: 1;
  display: flex;
  flex-direction:column;

  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4),
  rgba(0, 0, 0, 0.4));
}

.SR {
color: white;
font-family: prompt;
//font-size: 120px;
margin: 0;
text-align:center;
}

/*@media(max-width: 500px) {
  .SR {
color: white;
font-family: prompt;
font-size: 60px;
margin: 0;
text-align:center;
  }
}*/

.main-main sup {
  font-weight:350;
  font-size: 50px;
}


.register {
  font-family: verdana;
  text-align: center;
  color: white;
  border-radius: 30px;
  padding: 15px;
  font-size: 18px;
  background: linear-gradient(90deg, rgba(255,0,108,1) 25%, rgba(255,119,0,1) 75%);
}

.main-footer {
  text-align: right;
  height: 5%;
  color: white;
  font-weight: thin;
  padding: 20px 20px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4),
  rgba(0, 0, 0, 0.4));
}

.main-footer p {
  bottom: 0;
}
`

const LandingPage = () => {
    return (
        <Main  className=" main-container">
            <header className='main-header'>
                
                <h1 className='logo'>
                Matcha
                </h1>
                <div style={{color: 'green'}}>
                </div>
                <h2 className='login' >Log in</h2>
            </header>
            <main className=' main-main'>
               
                    <p className='SR text-2xl md:text-sm debug'>Swipe Right
                    <sup>®</sup>
                    </p>
                    <h2 className="register">Create account</h2>
               
            </main>
            <footer className="main-footer">
                
            <p>Copyright: anel-bou, chzabakh</p>
            </footer>
        </Main>
    );
}
export default LandingPage;
