import React from "react";
import { Link } from "react-router-dom";
import '../css/Header.css'

const Header = ({children,path}) => {
    console.log(path)
  return (
    <div className="">
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark justify-content-between justify-content-md-center'>
        <Link className='navbar-brand' to='/' style={{fontWeight:600}}>
          Health-E
        </Link>
        <button
          className='navbar-toggler justify-content-end'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent' >
          <ul className='nav navbar-nav ' >
            <li className={'nav-item '+(path==="/"?"active":"")}>
              <Link className='nav-link' to='/'>
                Home 
              </Link>
            </li>
            <li className={'nav-item '+(path==="/add"?"active":"")}>
              <Link className='nav-link' to='/add'>
                Add Weights 
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default Header;
