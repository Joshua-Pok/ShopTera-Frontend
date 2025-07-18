import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RootLayout from "./components/layout/RootLayout.jsx";
import Home from "./components/Home/Home.jsx";
import Products from "./components/product/Products.jsx";

function App() {


    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout/>}>
                <Route index element={<Home/>}></Route>
                <Route path="/products" element={<Products/>}></Route>
            </Route>
        )
    )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
