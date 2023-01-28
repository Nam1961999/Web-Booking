// import React from 'react';
import style from './Hotels.css';
import React, { useState } from 'react';

// Create items

function HotelItem(props) {
    
    const directDetail = () => {
       
        // window.location.replace("/search");
        document.location.href = "/detail/"
    }
    return (
        <li className="hotelType col" onClick = {directDetail} >
            <img height="250px" width="250px" src={props.item.image_url} />
            <h5>{props.item.name}</h5>
            <p>{props.item.city} </p>
            <p>Starting from $ {props.item.price}</p>
            <div className="trainghiem">
                <p className="rates">{props.item.rate}</p>
                <p>{props.item.type}</p>
            </div>
            {/* <button className='btn' onClick = {directDetail}>View more!</button> */}
        </li>

    )
}
// Main function

function Hotels(props) {
    const [items, setItems] = useState([
        {
            "name": "Aparthotel Stare Miasto",
            "city": "Madrid",
            "price": 120,
            "rate": 8.9,
            "type": "Excellent",
            "image_url": "./images/hotel_1.webp"
        },
        {
            "name": "Comfort Suites Airport",
            "city": "Austin",
            "price": 140,
            "rate": 9.3,
            "type": "Exceptional",
            "image_url": "./images/hotel_2.jpg"
        },
        {
            "name": "Four Seasons Hotel",
            "city": "Lisbon",
            "price": 99,
            "rate": 8.8,
            "type": "Excellent",
            "image_url": "./images/hotel_3.jpg"
        },
        {
            "name": "Hilton Garden Inn",
            "city": "Berlin",
            "price": 105,
            "rate": 8.9,
            "type": "Excellent",
            "image_url": "./images/hotel_4.jpg"
        }
    ])
    let hotels = [];

    for (let i = 0; i < items.length; i++) {
        hotels.push(
            <HotelItem key={i} index={i} item={items[i]} />
        )
    }

    return (
        <div>
            <h2 className="title_hotel">Homes guests love</h2>
            <div className='hotels'> {hotels}</div>
        </div>
    );
}


export default Hotels;
