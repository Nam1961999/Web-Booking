import style from "./Header.css"
import React, { useState } from 'react';

function Header() {
    const [key, setKey] = useState("");


    const changeHandler = (e) => {
        setKey(e.target.value);
    }

    const search = () => {
        console.log(key);
        // window.location.replace("/search");
        document.location.href  = "/search/" + key;
    }

    
    var isShowNotSearchBar = document.location.pathname.startsWith("/search");
    var displayMode =isShowNotSearchBar? "none" : "block";
    
    return (<div className="Header" >
        <h1 className="headerContent">A life of discounts? It's Genius</h1>
        <p className="paragraph">Get rewarded for your travels-unlock instant saving of 10% or more with a free account</p>
        <div className="header-content">
            <button className="btn">Sign in/Register</button>
            <div className='search-box' style={{display: displayMode}}>
                <input type="text" value={key} id="inputer" placeholder='Where are you going?' onChange={changeHandler} />
                <button className="btn" onClick={search}>Search</button>
            </div>
        </div>
    </div>
    );
}


export default Header;

