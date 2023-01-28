import React, { useState } from 'react';
import SearchList from '../SearchList/SearchList';
import style from "./SearchPopUp.css"

const hotels = [
    {
        "name": "Tower Street Apartments",
        "distance": "500m",
        "tag": "Free airport taxi",
        "type": "Entire studio • 1 bathroom • 21m² 1 full bed",
        "description": "Studio Apartment with Air conditioning",
        "free_cancel": true,
        "price": 112,
        "rate": 8.9,
        "rate_text": "Excellent",
        "image_url": "./images/hotel_search_1.webp"
    },
    {
        "name": "Comfort Suites Airport",
        "distance": "200m",
        "tag": "Free Breakfast",
        "type": "Entire studio • 2 bathroom • 100m² 2 full bed",
        "description": "Studio Apartment",
        "free_cancel": true,
        "price": 140,
        "rate": 9.3,
        "rate_text": "Exceptional",
        "image_url": "./images/hotel_search_2.jpg"
    },
    {
        "name": "Four Seasons Hotel",
        "distance": "100m",
        "tag": "Free Parking",
        "type": "1 bathroom • 51m² 2 full bed",
        "description": "Hotel in Lisbon",
        "free_cancel": false,
        "price": 99,
        "rate": 8.8,
        "rate_text": "Excellent",
        "image_url": "./images/hotel_search_3.jpg"
    }
];


function SearchPopUp(props) {
    const [form, setForm] = useState({
        destination: "",
        checkInDate: new Date(),
        minPrice: 0,
        maxPrice: 0,
        adult: 0,
        child: 0,
        room: 0,
    });



    const changeHandler = (e) => {
        var temp = form;

        var name = e.target.name;
        var value = e.target.value;

        temp[name] = value;

        setForm({ ...temp });
    }

    const checkHotel = (hotel) => {
        var destination = form.destination;
        var minPrice = form.minPrice;
        if (!minPrice) minPrice = 0;
        var maxPrice = form.maxPrice;
        if (!maxPrice) maxPrice = Number.MAX_VALUE;
        var adult = form.adult;
        if (!adult) adult = 0;
        var child = form.child;
        if (!child) child = 0;
        // var room = form.room;

        if (hotel.price < minPrice || hotel.price > maxPrice) return false;
        if (!hotel.name.includes(destination)) return false;

        return true;
    }

    const search = (e) => {
        e.preventDefault();
        var res = [];

        for (let i = 0; i < hotels.length; i++) {
            let hotel = hotels[i];
            if (checkHotel(hotel)) {
                res.push(hotel);
            }
        }

        props.setResults(res);
    }

    return (
        <div>
            <div className='search_pop_container'>
                <div>
                    <h3>Search</h3>
                    <form>
                        <div className=''>
                            <p>Destination</p>
                            <input name="destination" value={form.destination} onChange={changeHandler} type="text" id="search"></input>
                        </div>
                        <div className=''>
                            <p>Check in Date</p>
                            <input type="text" id="search-date" className='input_boder'></input>
                        </div>
                        <div className='chil_popup'>
                            <p>Option</p>
                            <input name="option" value={form.option} onChange={changeHandler} type="text" className='input_boder' />
                        </div>
                        <div className='chil_popup'>
                            <p>Min price per night</p>
                            <input name="minPrice" value={form.minPrice} onChange={changeHandler} type="number" className='input_boder' />
                        </div>
                        <div className='chil_popup'>
                            <p>Max price per night</p>
                            <input name="maxPrice" type="number" id="search-max-price" required="required" className='input_boder' value={form.maxPrice} onChange={changeHandler} />
                        </div>
                        <div className='chil_popup'>
                            <p>Adult</p>
                            <input type="number " name="adult" className='input_boder' id="search-adult" value={form.adult} onChange={changeHandler} />
                        </div>
                        <div className='chil_popup'>
                            <p>Children</p>
                            <input type="number" name="child" className='input_boder' id="search-child" value={form.child} onChange={changeHandler} />
                        </div>
                        <div className='chil_popup'>
                            <p>Room</p>
                            <input name='room' type="number" id="search-room" className='input_boder' value={form.room} onChange={changeHandler} />
                        </div>
                        <button type="submit" id="search-btn" onClick={search} >Search</button>
                    </form>
                </div>



            </div >
        </div>

    )
}

export default SearchPopUp;