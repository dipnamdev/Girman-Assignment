import React, { useState, useEffect, useContext } from 'react';
import UserCard from '../../Components/UserCard/UserCard';
import { UserContext } from '../../context/UserContext';
import './SearchResults.css'
function SearchResults() {
const[input,setInput]=React.useState('');
const {SearchName,setSearchName}=useContext(UserContext);
const handleKey=(e)=>{
  if(e.key==='Enter'){
    setSearchName(input);
  }
}

  return (
    <div className="SearchResults">
      <input type="text"
             value={input}
             placeholder="Search" 
             onChange={(e)=>setInput(e.target.value)}
             onKeyDown={handleKey}
      />
        <div className="card-conatainer">
          <UserCard />
        </div>
    </div>
  );
}

export default SearchResults;
