import React from "react";
import "./Landing.css"
import { GiHeartKey } from "react-icons/gi"

const LandingPage = () => {
    return (
        <div className="main-container">
            <header className='header-flex-container'>
                
                <h1 className='matcha'>
                <GiHeartKey />
                Matcha</h1>
                <h1 className='login'>Login</h1>
            </header>
            <br/>
            <main className='my-main'>
                {/*<img className= 'home-image' src={image}/>*/}
            </main>
            <footer>
        
            </footer>
        </div>
    );
}
export default LandingPage;
