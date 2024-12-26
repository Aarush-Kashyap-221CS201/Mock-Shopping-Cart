import React,{useState} from "react";
import { Link,useParams,createBrowserRouter, RouterProvider } from "react-router-dom";

function Navbar(){
    return (
        <div id="navbar_container">
            <Link to="/"><div className="nav_item">Home</div></Link>
            <Link to="/shop"><div className="nav_item">Shop</div></Link>
            <Link to="/cart">
                <div id="nav_item_img">
                    <img src="/assets/cart.png"/>
                    <p>Go To Cart</p>
                    <img id="arrow" src="/assets/right-arrow.png" />
                </div>
            </Link>
        </div>
    );
}

export default Navbar;