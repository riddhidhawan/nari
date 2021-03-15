import React from 'react';
import data from './data';
import { BrowserRouter, Route ,Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
 


function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
            }

  return (
<BrowserRouter>

    <div className="grid-container">
            <header className="header">
                
                <div className="brand">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <Link to="/"><img className="ourlogo" src="/images/d6.jpg" alt="logoem"></img></Link>
                </div>
                <div className="header-links">
                    <a href="cart.html">Cart         </a>
                    <a href="signin.html">Sign In</a>
                </div>
                
            </header>
            <aside className="sidebar">
                <h3>Categories</h3>
                <button className="sidebar-close" onClick={closeMenu}>x</button>
                <ul>
                    <li>
                        <a href="index.html">Handicrafts</a>
                    </li>
                    <li>
                        <a href="index.html">Subsidized Goods</a>
                    </li>
                </ul>
            </aside>
            
            <main className="main">
                <div className="content">
                  <Route path="/products/:id" component={ProductScreen} />
                  <Route path="/" exact={true} component={HomeScreen} />

                
               
                </div>
            </main>
            <footer className="footer">All Rights Reserved.</footer>
        </div>
      </BrowserRouter>
  );
}
export default App;