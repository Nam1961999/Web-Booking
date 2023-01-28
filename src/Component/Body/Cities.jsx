import React, { useState } from 'react';
import style from './Cities.css'


// create items

function CitiesItem(props) {
    var imageURL =   props.item.image.substring(2);
    return (
        <div style ={ { backgroundImage: `url('${imageURL}')`} } className ="city-item" >
            <h2>{props.item.name}</h2>
            <p>{props.item.subText}</p>
        </div>
    );
}


// main function
function Cities(props) {
    const [items, setItems] = useState([
        {
            "name": "Dublin",
            "subText": "123 properties",
            "image": "./images/city_1.webp"
        },
        {
            "name": "Reno",
            "subText": "533 properties",
            "image": "./images/city_2.webp"
        },
        {
            "name": "Austin",
            "subText": "532 properties",
            "image": "./images/city_3.webp"
        }
    ]);

    let cities = [];

    for (let i = 0; i < items.length; i++) {
        cities.push(
            <CitiesItem key={i} index={i} item={items[i]} />
        )
    }

    return (
        <div className="city-container">
            {cities}
        </div>

    );
};

export default Cities;
