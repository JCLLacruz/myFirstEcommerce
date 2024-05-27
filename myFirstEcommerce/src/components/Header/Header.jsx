import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link className='navbar-brand' to='/'>
        Pokemon Shop
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse justify-content-between' id='navbarNav'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/products'>
              Shop
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/profile'>
              Profile
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/login'>
              Login
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/register'>
              Register
            </Link>
          </li>
        </ul>
          <li className='nav-item'>
            <Link className='nav-link' to='/cart'>
              Cart
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-cart2 ms-2' viewBox='0 0 16 16'>
						<path d='M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0' />
					</svg>
            </Link>
          </li>
        <form className='form-inline my-3 my-lg-0 d-flex'>
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
          />
          <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
