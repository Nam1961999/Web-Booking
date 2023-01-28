import SearchPopUp from "./SearchPopup/SearchPopUp"
import SearchList from "./SearchList/SearchList"
import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import style from "./SearchPopup/Search.css"


const Search = (props) => {
  const [results, setResults] = useState([]);
  
  //Lấy giá trị user muốn tìm kiếm
  var key = useParams().key;

  console.log(key);
  return (
    <div className="search_Container">
      <SearchPopUp setResults={setResults} />
      <SearchList  results={results}/>
    </div>
  );
};

export default Search;
