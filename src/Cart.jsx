import React,{useContext} from "react";
import { Link,useParams,createBrowserRouter, RouterProvider,useNavigate,useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { ShopContext } from "./ShopProvider";

function Cart(){
    const {items,cartStatus,addToCart,decrementFromCart,removeFromCart} = useContext(ShopContext);
    const navigate=useNavigate();

    function handlePayment(){
        let sum=0;
        for (let index = 0; index < items.length; index++) {
            sum+=items[index].price*cartStatus[index];
            removeFromCart(index)
        }
        alert(`Payment made for ${sum.toFixed(2)}`);
    }

    return (
        <div className="container" id="cart_container">
            <Navbar />
            <div id="cart_items_box">
                {cartStatus.every(status => status <= 0) ? (<h2>No items in Cart</h2>) : (
                items.map((item, index) => ((cartStatus[index]>0)?(
                    <div className="cart_item" id={`item${index + 1}`} key={item.id}>
                        <div id="cart_item_img_box"><img src={(item.images)[0]} alt={item.title} className="item-image" /></div>
                        <div id="cart_item_info_box">
                            <h3 id="cart_item_title">{item.title}</h3>
                            <p id="cart_item_price">${item.price}</p>
                            <div id="cart_counter">
                                <img src="/assets/minus.png"  id="minus_icon" onClick={()=>decrementFromCart(index)}/>
                                {cartStatus[index]}
                                <img src="/assets/plus.png" id="plus_icon" onClick={()=>addToCart(index)}/>
                            </div>
                            <button id="cart_see_more_btn" onClick={()=>navigate(`/product/${index+1}`)}>See More</button>
                            <img src="/assets/delete.png" id="cart_delete_btn" onClick={()=>removeFromCart(index)}/>
                        </div>
                    </div>)
                    :("")
                )))}
            </div>
            {cartStatus.every(status => status <= 0) ? ("") : (
            <div id="payment_box">
                <h1 id="payment">
                    Total Payment: $
                    {cartStatus.reduce(
                        (total, quantity, index) => total + quantity * items[index]?.price || 0,
                        0
                    ).toFixed(2)}
                </h1>
                <button id="pay_btn" onClick={handlePayment}>Proceed To Payment</button>
            </div>)}
        </div>
    );
}

export default Cart;