import React, { useState } from 'react';
import style from './Navbar.css'


// create navigation
function NavBarItem(props) {
    return (
        <li className="nav-item">
            <a onClick={()=>{
                props.onClick(props.index)
                }} className={"nav-link " + (props.item.active ? "active": "")} aria-current="page" href="#">
                <i className={"fa " + props.item.icon}></i> {props.item.type}
            </a>
        </li>
    );
}


// main function
function Navbar(props) {
    const [items, setItems] = useState([
        {
            "type": "Stays",
            "icon": "fa-bed",
            "active": true
        },
        {
            "type": "Flights",
            "icon": "fa-plane",
            "active": false
        },
        {
            "type": "Car rentals",
            "icon": "fa-car",
            "active": false
        },
        {
            "type": "Attractions",
            "icon": "fa-bed",
            "active": false
        },
        {
            "type": "Airport taxis",
            "icon": "fa-taxi",
            "active": false
        }
    ]);
// change the active state
    const activeNav = (index) => {
        let temp = items;

        for (let i = 0; i < temp.length; i++) {
            if (temp[i].active) temp[i].active = false;

            if (index == i) temp[i].active = true;
        }

        setItems([...temp]);
    }


    var links = [];

    for (let i = 0; i < items.length; i++) {
        links.push(
            <NavBarItem key={i} onClick={activeNav} index={i} item ={items[i]} />
        )
    }

    return (
        <div >
            <div className="button-style">
            <h1 className="title-name">Booking Website</h1>
            <button className="btn btn-primary">Register</button>
            <button className="btn btn-secondary"> login</button>
            </div>
            <ul className="nav nav-pills">
                {links}
            </ul>
        </div>
    );
};

export default Navbar;
