import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
  return (
  <div className="navigation">
        <input type="checkbox" className="navigation-checkbox" id="nav-toggle" name="nav-toggle" />
        <label htmlFor="nav-toggle" className="navigation-button">
            <span style={{backgroundColor : props.icon}} className="navigation-icon">

            </span>
        </label>
        <div className="navigation-background" style={{backgroundColor : props.background}}  ></div>
        
        <nav className="navigation-nav">
            <ul className="navigation-list">
                <li className="navigation-item"><NavLink to="/" className="navigation-link">Go Back Home </NavLink></li>
                <li className="navigation-item"><NavLink to="/teams" className="navigation-link">Choose Your Side</NavLink></li>
                <li className="navigation-item"><NavLink to="/tickets" className="navigation-link">Buy the tickets</NavLink></li>
                <li className="navigation-item"><NavLink to="/merch" className="navigation-link">Buy Our Merchandise</NavLink></li>
                <li className="navigation-item"><a rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=fdPKbCkoU5U" className="navigation-link">Watch The Trailer</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
