import logo from "./logo.svg";
import "./App.css";
import Navbarmenu from "./components/Navbarmenu";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import AddProduct from "./pages/Admin";
import Newarrivals from "./pages/Newarrivals";

function App() {
  return (
    <>
      <Navbarmenu />
      <div className="container">
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/admin" element={<AddProduct />}></Route>
          <Route path="/newarrivals" element={<Newarrivals />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
