import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate=useNavigate();

    function handleClick(){
        navigate("/shop");
    }

    return (
        <div className="container">
            <Navbar />
            <div id="home_content_box">
                <div id="heading_box">
                    <h1 id="heading">WELCOME TO<br />MOCK SHOPPING CART!</h1>
                    <p>This is only a dummy shopping website.<br/>Please head on to the Shop page to begin shopping.</p>
                    <button onClick={handleClick}>Go To Shop <img id="arrow" src="/assets/right-arrow.png" /></button>
                </div>
            </div>
        </div>
    );
}

export default Home;