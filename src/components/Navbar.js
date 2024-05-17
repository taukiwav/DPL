import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false)

  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else { 
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  },[])

  window.addEventListener('resize', showButton)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            DPL <i className="fa-regular fa-futbol"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa-solid fa-times" : "fa-solid fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
              to="/"
              className="nav-links"
              onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/fixtures"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Fixtures
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/results"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Results
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/table"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Table
              </Link>
            </li>
            <li className="nav-item">
              <Link
              to="/stats"
              className="nav-links"
              onClick={closeMobileMenu}
              >
                Stats
              </Link>
            </li>
            <li className="nav-item">
              <Link
              to="/clubs"
              className="nav-links"
              onClick={closeMobileMenu}
              >
                Clubs
              </Link>
            </li>
            <li className="nav-item">
              <Link
              to="/highlights"
              className="nav-links"
              onClick={closeMobileMenu}
              >
                Highlights
              </Link>
            </li>
            <li className="nav-item">
              <Link
              to="/sign-up" //both sign up buttons direct to ./tables
              className="nav-links-mobile"
              onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button linkTo = '/sign-up' buttonStyle='btn--outline'> Sign Up</Button> }
        </div>
      </nav>
    </>
  );
}

export default Navbar