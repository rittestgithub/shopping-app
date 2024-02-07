import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cartLogo from '../assets/cartlogo.png';
import { userLogout } from '../actions';


const NavBar = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const isAuthenticated = useSelector((state) => state.cartReducer.isAuthenticated);
  const dispatch=useDispatch()


  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: '#2e3e59', color: '#fff', paddingLeft: '4%', paddingRight: '4%' }}>
      <Link className="navbar-brand" to="/" style={{ color: '#fff' }}>
        <img src="https://i.ibb.co/fFyR2Jh/shopping-logo.png" alt="shopping-logo" border="0"
          style={{ height: 40, width: 80 }}
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/" style={{ color: '#fff' }}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="#" style={{ color: '#fff' }}>
              About
            </Link> */}
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            category
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="Mensclothing">Men</a></li>
            <li><a class="dropdown-item" href="Womens">women</a></li>
            {/* <li><a class="dropdown-divider"></li> */}
            <li><a class="dropdown-item" href="/Jwellery">jwellery</a></li>
          </ul>
        </li>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Products" style={{ color: '#fff' }}>
              Products
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/Cart" style={{ color: '#fff' }}>
            <img src={cartLogo} style={{height:40,width:40}}/>
              {cartItems.length > 0 &&(
              <span
                className="badge badge-pill badge-danger"
                style={{
                  position: 'absolute',
                  backgroundColor: 'red',
                  padding: '3px',
                  borderRadius: '30%',
                  right:'10.5%'
                }}
              >
                {cartItems.length}
              </span>
              )}
            </Link>
          </li>

          {/* <li className="nav-item">
            <Link className="nav-link mt-1" to="/Contact">
              <button className='btn btn-sm btn-danger'>Login</button>
            </Link>
          </li> */}
          <li className="nav-item">
          {isAuthenticated ? (
            // If the user is authenticated, show the "Logout" button
            <Link className="nav-link mt-1" to="/Contact" onClick={() => dispatch(userLogout())}>
            <button className='btn btn-sm btn-danger'>Logout</button>
          </Link>
          ) : (
            // If the user is not authenticated, show the "Login" button
            <Link className="nav-link mt-1" to="/Contact">
              <button className='btn btn-sm btn-danger'>Login</button>
            </Link>
          )}
        </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

