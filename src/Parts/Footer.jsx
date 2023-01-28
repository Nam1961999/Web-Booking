import React, { useState } from 'react';
import style from './Footer.css'


// create items

function ColItem(props) {
    let col_items = [];
    for (let i = 0; i < props.item.col_values.length; i++) {
        col_items.push(<li key={i}>{props.item.col_values[i]}</li>)
    }
    return (

        <div className='col-item'>
            {col_items}
        </div>
    );
}

// main function
function Footer(props) {
    const [items, setItems] = useState([
        {
            "col_number": 1,
            "col_values": [
                "Countries",
                "Regions",
                "Cities",
                "Districts",
                "Airports",
                "Hotels"
            ]
        },
        {
            "col_number": 2,
            "col_values": [
                "Homes",
                "Apartments",
                "Resorts",
                "Villas",
                "Hostels",
                "Guest houses"
            ]
        },
        {
            "col_number": 3,
            "col_values": [
                "Unique places to stay",
                "Reviews",
                "Unpacked: Travel articles",
                "Travel communities",
                "Seasonal and holiday deals"
            ]
        },
        {
            "col_number": 4,
            "col_values": [
                "Car rental",
                "Flight Finder",
                "Restaurant reservations",
                "Travel Agents"
            ]
        },
        {
            "col_number": 5,
            "col_values": [
                "Curtomer Service",
                "Partner Help",
                "Careers",
                "Sustainability",
                "Press center",
                "Safety Resource Center",
                "Investor relations",
                "Terms & conditions"
            ]
        }
    ]
    );

    let col1 = [];
    let col2 = [];
    let col3 = [];
    let col4 = [];
    let col5 = [];

    for (let i = 0; i < items.length; i++) {
        // if (items[i].col_number == 1) {
        //     col1.push(
        //         <ColItem key={i} index={i} item={items[i]} />
        //     )
        // }
        // else if (items[i].col_number == 2) {
        //     col2.push(
        //         <ColItem key={i} index={i} item={items[i]} />
        //     )
        // }
        // else if (items[i].col_number == 3) {
        //     col3.push(
        //         <ColItem key={i} index={i} item={items[i]} />
        //     )
        // }
        // else if (items[i].col_number == 4) {
        //     col4.push(
        //         <ColItem key={i} index={i} item={items[i]} />
        //     )
        // }
        // else if(items[i].col_number == 5) {
        //     col5.push(
        //         <ColItem key={i} index={i} item={items[i]} />
        //     ) 
        // }

        switch (items[i].col_number) {
            case 1:
                col1.push(
                    <ColItem key={i} index={i} item={items[i]} />
                );
                break;
            case 2:
                col2.push(
                    <ColItem key={i} index={i} item={items[i]} />
                );
                break;
            case 3:
                col3.push(
                    <ColItem key={i} index={i} item={items[i]} />
                );
                break;
            case 4:
                col4.push(
                    <ColItem key={i} index={i} item={items[i]} />
                );
                break;
            case 5:
                col5.push(
                    <ColItem key={i} index={i} item={items[i]} />
                );
                break;

        }
    }


    return (
        <div className="col_container">
            {col1}
            {col2}
            {col3}
            {col4}
            {col5}
        </div>

    );
};

export default Footer;
