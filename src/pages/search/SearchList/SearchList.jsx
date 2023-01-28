import React, { useState } from 'react';
import style from "./SearchList.css"

const server = "http://localhost:3000/"
function SearchList(props) {
    // console.log("results: " + JSON.stringify(props.results))

    //code vao day
    let data = props.results ? props.results : [];

    let dataSearch = []  
    for (let i = 0; i < data.length; i++) {
        let freeCancel = data[i].free_cancel ?
            <>
                <p className='text_bottom'>You can cancel later, so lock in this great price today!</p>
                <p className='cancellation' > Free cancellation</p>
            </> : <></>

        dataSearch.push(
            <div key={i} className="searchItemContainer">
                <div>
                    <img style={{ padding: "10px" }} src={server + data[i].image_url.substring(2)} height="280px" width="240px" />
                </div>
                <div style={{ marginLeft: "20px", paddingTop: "10px", paddingBottom: "4px" }}>
                    <h2 className='name_search'>{data[i].name}</h2>
                    <p>{data[i].distance}  from center</p>
                    <p className='type'>{data[i].tag} </p>
                    <p className='description'>{data[i].description}</p>
                    <p >{data[i].type}</p>
                    {freeCancel}

                </div>
                <div style={{ marginLeft: "auto", paddingTop: "6px" }}>
                    <div className='rate_container'>
                        <p className='rate_text'>{data[i].rate_text}</p>
                        <p className='rate'>{data[i].rate}</p>
                    </div>
                    <h3 className='price'>${data[i].price}</h3>
                    <p className='text_taxes'>Inclues taxes and fees</p>
                    <div style={{ display: "flex" }}>
                        <button className='button_more'> See availability</button>
                    </div>

                </div>
            </div>
        );

    }

    return (
        <div className='col-8'>
            {dataSearch}
        </div>
    )
}

export default SearchList;