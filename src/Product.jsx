import React, { useState,useContext } from "react";
import Navbar from "./Navbar";
import { Link,useParams,useLocation,createBrowserRouter, RouterProvider,useNavigate } from "react-router-dom";
import {ShopContext} from "./ShopProvider.jsx";

function Product(){
    const {index}=useParams();
    const {items,cartStatus,addToCart}=useContext(ShopContext);

    const item=items[index-1];
    const [imgIndex,setImgIndex]=useState(0);

    return (
        <div className="container" >
            <Navbar />
            <div id="product_content_box">
                <div id="product_img_box">
                    <img src={`${item.images[imgIndex]}`} id="product_img"/>
                    <img src="/assets/img_right.png" className="img_nav_icon" id="right_nav" onClick={()=>setImgIndex((imgIndex+1)%item.images.length)}/>
                    <img src="/assets/img_left.png" className="img_nav_icon" id="left_nav" onClick={()=>setImgIndex((imgIndex==0)?(item.images.length-1):(imgIndex-1))}/>
                </div>
                <div id="product_info_box">
                    <h1 id="product_heading">{item.title}</h1>
                    <h3 id="product_price">{item.price}</h3>
                    <p id="product_desc">{item.description}</p>
                    {(cartStatus[index-1]>0)?("Added to Cart"):(<button id="cart_add_btn_product" onClick={()=>addToCart(index-1)}>+ Add to Cart</button>)}
                </div>
            </div>
        </div>
    )
}

export default Product;