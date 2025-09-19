import React, { useState } from 'react';
import './Country.css'
const Country = ({ country,handleVisitedCountry,handleVisitedFlags}) => {
    const [visited,setVisited]=useState(false)

    const handleVisited=()=>{
        // basic toggle
// if(visited){
//     setVisited(false)
// }else{
//     setVisited(true)
// }

// 2nd approch for toggle
// visited ? setVisited(false) : setVisited(true);

// 3rd approch for toogle
setVisited(!visited)
handleVisitedCountry(country);
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags?.flags?.png} alt={country.flags?.flags?.alt} />
            <h3>Name : {country.name?.common}</h3>
            <h3>Capital : {country.capital.capital[0]} </h3>
            <h4>Population: {country.population?.population}</h4>
            <h5>Area : {country?.area?.area}</h5>
            <p>{country?.area?.area > 30000 ? 'big country' : 'small country'}</p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>

            <button onClick={()=>{handleVisitedFlags(country.flags?.flags?.png)}}>Visited Flags</button>
        </div>
    );
};

export default Country;
