import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ShopProvider } from "./ShopProvider"; // Import the ShopProvider
import routes from "./routes.jsx";
import "./style.css";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShopProvider> {/* Wrap RouterProvider with ShopProvider */}
      <RouterProvider router={router} />
    </ShopProvider>
  </StrictMode>
);
