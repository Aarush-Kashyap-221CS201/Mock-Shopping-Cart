import Home from "./Home.jsx";
import Shop from "./Shop.jsx";
import Cart from "./Cart.jsx";
import Product from "./Product.jsx";

const routes = [
    {
        path:"/",
        element:<Home />,
    },
    {
        path:"/shop",
        element:<Shop />
    },
    {
        path:"/cart",
        element:<Cart />
    },
    {
        path:"/product/:index",
        element:<Product />
    },
];

export default routes;