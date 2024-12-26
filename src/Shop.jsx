import React, { useEffect, useState,useContext } from "react";
import Navbar from "./Navbar";
import { Link,useParams,createBrowserRouter, RouterProvider,useNavigate } from "react-router-dom";
import { ShopContext } from "./ShopProvider";

function Shop() {
  const navigate=useNavigate();
  const { items,cartStatus,addToCart,loading } = useContext(ShopContext);

  return (
    <div className="container">
      <Navbar />
      <div id="shop_content_box">
        {loading && <h1>Fetching Shop Items...</h1>}
        <div className="items_box">
          {items.map((item, index) => (
            <div className="item" id={`item${index + 1}`} key={item.id}>
              <div id="item_img_box"><img src={(item.images)[0]} alt={item.title} className="item-image" /></div>
              <div id="item_info_box">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-price">${item.price}</p>
                <button id="see_more_btn" onClick={()=>navigate(`/product/${index+1}`)}>See More</button>
                {(cartStatus[index]>0)?("Added to Cart"):(<button id="cart_add_btn_shop" onClick={()=>addToCart(index)}>+ Add to Cart</button>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
