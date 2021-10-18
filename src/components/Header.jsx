import React from 'react'
import cap from "../img/cap.png"

const Header = () => {
  return (
    <div className="header">
      <div className="header-text-content">
        <p className="header-primary">Avengers : Heros Of Multiverse</p>
        <p className="header-secondary">The Most Awaited Fight Of The Century</p>
        <a rel="noreferrer" target="_blank"href="https://www.youtube.com/watch?v=fdPKbCkoU5U" className="header-trailer">Watch Trailer</a>
      </div>
      <div className="header-imgbox">
        <img src={cap} alt="cap" className="header-img" />
      </div>
    </div>
  )
}

export default Header