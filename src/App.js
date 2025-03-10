import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Movie from "./pages/Movie";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { MoviesContext } from "./context/MoviesContext";
import { useEffect, useState } from "react";
import { getMovies } from "./api/api";
import Nav from "./components/Nav";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((data) => setMovies(data));
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <MoviesContext.Provider value={movies}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </MoviesContext.Provider>
    </BrowserRouter>
  );
}

export default App;
