import style from './Detail.css';
// import React, { useState } from 'react';
// import companyLogo from "/images/hotel_detail_1.jpg"
function Detail() {
  return (
    <div className='Detail'>
      <div>
        <div className="header">
          <h1>Tower Street Apartments</h1>
          {/* <button className="button">Reseve or Book Now!</button> */}
        </div>
        <div><i className="fa fa-map-marker fa-lg"></i>
          Elton St 125 New york</div>
        <p className='description1'>Excellent location - 500m from center</p>
        <p className='description2'>Book a stay over $114 at this property and get a free airport taxi</p>
        <div>
          <div className='photo_detail'>
            <img className='photo' src="/images/hotel_detail_1.jpg" />
            <img className='photo' src='/images/hotel_detail_2.jpg'></img>
            <img className='photo' src='/images/hotel_detail_3.jpg'></img>
            <img className='photo' src='/images/hotel_detail_4.jpg'></img>
            <img className='photo' src='/images/hotel_detail_5.jpg'></img>
            <img className='photo' src='/images/hotel_detail_6.jpg'></img>
          </div >
          <div className='hotel_detail' >
            <div className='hotel_detail1'>
              <h1>Stay in the heart of City</h1>
              <p>Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.</p>
            </div>
            <div className='hotel_detail2'>
              <h1>Perfect for a 9-night stay!</h1>
              <p>Located in the real heart of Krakow, this property has an Excellent location score of 9.8</p>
              <button className="reserve-btn">Reserve or Book Now! </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  )
    ;
}
export default Detail;



