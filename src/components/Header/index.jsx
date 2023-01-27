import React from "react";
import './index.css'

export const Header = () => {
    return(
        <header>
            <div className="leftSide">
                <img src ='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png' alt="menu icon" className="menu"/>
                <img src="https://www.wesser.co.uk/wp-content/uploads/2020/10/youtube-icon-logo-png-transparent.png" alt="logo" className="logo"/>
            </div>
            <div className="middle">
                <input type='text' className="search"/>
            </div>
            <div className="rightSide">
            <img src="https://i.etsystatic.com/30789305/r/il/a03a6b/4514011506/il_340x270.4514011506_gkvb.jpg" alt="pfp" className="pfp"/>
            </div>
        
      </header>
    )
}