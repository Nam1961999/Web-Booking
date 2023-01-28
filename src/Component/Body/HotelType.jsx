import React, { useState } from 'react';
// import style from './HotelType.css';
import style from './Hotels.css';

// create navigation
function HotelType(props) {
    return (
        <li className="hotelType col">
            <img height="200px" width="200px" src={props.item.image} />
            <h2>{props.item.name}</h2>
            <p>{props.item.count} + hotels </p>
        </li>
    );
}


// main function
function Types(props) {
    const [items, setItems] = useState([
        {
            "name": "Hotels",
            "count": 233,
            "image": "./images/type_1.webp"
        },
        {
            "name": "Apartments",
            "count": 2331,
            "image": "./images/type_2.jpg"
        },
        {
            "name": "Resorts",
            "count": 2331,
            "image": "./images/type_3.jpg"
        },
        {
            "name": "Villas",
            "count": 2331,
            "image": "./images/type_4.jpg"
        },
        {
            "name": "Cabins",
            "count": 2331,
            "image": "./images/type_5.jpg"
        }
    ]
    );



    var types = [];

    for (let i = 0; i < items.length; i++) {
        types.push(
            <HotelType key={i} index={i} item={items[i]} />
        )
    }

    return (
        <div className='hotels'>
            <h2 className="title">Browser by property type</h2>
            <div className="hotel-Type"> {types}</div>
        </div>
    );
};

export default Types;
