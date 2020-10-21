import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import './App.css';
import CartScreen from './Screens/CartScreen';
import SigninScreen from './Screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './Screens/registerScreen';
import { FaSearch } from "react-icons/fa";

//main page
function App() {
   
  const userSignin = useSelector(state=>state.userSignin);
  const{userInfo} = userSignin

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu= () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    //Routing all files using browser router
    <BrowserRouter>
    <div className ="grid-container">
      <header className="header">
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to="/" >ShoppingCart</Link>
        </div>
        {/* search form */}
        <form className="Searchbar-form">
          <input
            placeholder="Search Here...!"
            type="text"
            className="searchbar-input" 
          ></input>
            <FaSearch className = "Searchbar-button"
            HeaderButton logo={<FaSearch />}></FaSearch>
        </form>
        <div className ="header-links">
            <a href ="cart.html">Cart</a>
            {
              userInfo ? <Link to ="/profile">{userInfo.name}</Link>:
              <Link to="/signin">Sign in</Link>
            }
           
        </div>
      </header>
      {/* side bar */}
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
            x
        </button>
        <ul>
            <li>
                <a href="index.html">Pants</a>
            </li>
            <li>
                <a href="index.html">Shirts</a>
            </li>
        </ul>
    </aside>
    {/* routing all files with path */}
        <main className="main">
            <div className="content">
              <Route path="/register" component={RegisterScreen} />
              <Route path="/signin" component={SigninScreen}/>
              <Route path ="/product/:id" component={ProductScreen}/>
              <Route path="/cart/:id?" component ={CartScreen} /> 
              <Route path="/" exact={true} component={HomeScreen} />
                  
            </div>    
        </main>
        {/* footer */}
        <footer className="footer">
            All right reserved
        </footer>
    </div>
</BrowserRouter>

  );
}

export default App;