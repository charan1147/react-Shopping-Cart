import { useState } from "react";
import ProductList from "./components/ProductsList"; 
import Cart from "./components/Cart"; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const products = [
    {
      id: 1,
      name: "Flower Vase",
      description: "High-quality, fancy item.",
      price: `2,00,000`,
      imageUrl: "https://m.media-amazon.com/images/I/71enJs+gwxL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 2,
      name: "Special Item",
      description: "Limited edition special item.",
      price: `7,520.84`,
      imageUrl: "https://laliskart.com/cdn/shop/files/BRASSHIP02-1_2000x.jpg?v=1728537401",
    },
    {
      id: 3,
      name: "Samsung S23FE",
      description: "On sale now with 53%off!",
      price: `39,300`,
      imageUrl: "https://m.media-amazon.com/images/I/31PwZCw0yRL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: 4,
      name: "Popular Item(boat Airpods 311)",
      description: "Customers favorite.",
      price: `799`,
      imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/614gbl-O98L._AC_UL450_SR450,320_.jpg",
    },
    {
      id: 5,
      name: "Hamilton",
      description: "Khaki Watch, Analog Watch.",
      price: `3,76,401`,
      imageUrl: "https://m.media-amazon.com/images/I/81PB3gDHbPL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 6,
      name: "Sony Ps-5 Digital",
      description: "Limited edition - 30th Anniversary.",
      price: `49,999`,
      imageUrl: "https://m.media-amazon.com/images/I/51B94i431NL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 7,
      name: "Tcl Tv",
      description: "On sale now with 71% discount!",
      price: `32,990`,
      imageUrl: "https://m.media-amazon.com/images/I/71vL-5JSaML._SL1500_.jpg",
    },
    {
      id: 8,
      name: "Realme buds 2 Wired Earphones",
      description: "Customers favorite.",
      price: 49.99,
      imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/61BYFuHb7lL._AC_UL450_SR450,320_.jpg",
    },
    
    
  ];

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productID) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== productID));
  };

  
  const isInCart = (product) => {
    return cartItems.some((item) => item.id === product.id);
  };

  return (
    <Router>
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#!">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
              </ul>
              <Link to="/cart" className="btn btn-outline-dark">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">{cartItems.length}</span>
              </Link>
            </div>
          </div>
        </nav>
        <header className="header-banner ">
          <div className="container">
            <h1 className="text-center">Shop in Style</h1>
            <p className="text-center">With this shop homepage template</p>
          </div>
        </header>

      
      <Routes>
          <Route
            path="/"
            element={
              <ProductList
                products={products}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                isInCart={isInCart}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
