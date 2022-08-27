import React from "react"
import "./LandingPage.css"
import { GiHeartKey } from "react-icons/gi"

const LandingPage = () => {
    return (
        <div className="main-container">
            <header className='header-flex-container'>
                
                <h1 className='matcha'>
                <GiHeartKey />
                Matcha</h1>
                <h2 className='login'>Log in</h2>
            </header>
            <br/>
            <main className='my-main'>
                <div>
                    <p className='SR'>Swipe Right
                    <sup>®</sup>
                    </p>
                </div>
            </main>
            <footer className="main-footer">
            </footer>
        </div>
    );
}
export default LandingPage;
