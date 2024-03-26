// ## Namaste React Course by Akshay Saini
// Chapter 05 - Let's get Hooked!

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
// import Grocery from "./components/Grocery";


/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/


const Grocery = lazy (()=> import ("./components/Grocery"));

// AppLayout component to render: Header, Body and Footer Component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element: <AppLayout/>,
    children :[
      {
      path: "/",
      element: <Body/>,
      },
  
      {
        path: "/about",
        element: <About/>,  
      },

      {
        path: "/contact",
        element: <Contact/>,  
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
        
        <Grocery/></Suspense>),  
      },
     {
      path: "/restaurants/:resId",
      element:<RestaurantMenu />
    }],

    errorElement: <Error />,
  },
 
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);

root.render(<RouterProvider router ={appRouter} />);