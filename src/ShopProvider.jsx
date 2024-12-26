import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartStatus,setCartStatus]=useState([]);

  let check=false;

  useEffect(() => {
    const fetchItems = async () => {
      if (check) return;
      check=true;
      console.log("Fetching from Provider...");
      try {
        const allItems = [];
        const arr=[];
        for (let i = 1; i <= 194; i++) {
          const response = await fetch(`https://dummyjson.com/products/${i}`);
          const data = await response.json();
          allItems.push(data);
          arr.push(0);
        }
        setItems(allItems);
        setCartStatus(arr);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  function addToCart(index){
    setCartStatus((prevCartStatus) => {
        const updatedCartStatus = [...prevCartStatus]; // Create a copy of the array
        updatedCartStatus[index]++; // Update the desired index
        return updatedCartStatus; // Return the new array
      });
  }

  function decrementFromCart(index){
    setCartStatus((prevCartStatus) => {
        const updatedCartStatus = [...prevCartStatus]; // Create a copy of the array
        updatedCartStatus[index]--; // Update the desired index
        return updatedCartStatus; // Return the new array
      });
  }

  function removeFromCart(index){
    setCartStatus((prevCartStatus) => {
        const updatedCartStatus = [...prevCartStatus]; // Create a copy of the array
        updatedCartStatus[index] = 0; // Update the desired index
        return updatedCartStatus; // Return the new array
      });
  }

  return (
    <ShopContext.Provider value={{ items, cartStatus,loading,addToCart,decrementFromCart,removeFromCart }}>
      {children}
    </ShopContext.Provider>
  );
};
