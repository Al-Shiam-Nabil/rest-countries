import React from 'react';
import './Country.css'
const Country = ({country}) => {
    console.log(country.area.area)
    return (
        <div className='country'>
            <img src={country.flags?.flags?.png} alt="" />
            <h3>Name : {country.name?.common}</h3>
            <h3>Capital : {country.capital.capital[0]} </h3>
            <h4>Population: {country.population?.population}</h4>
            <h5>Area : {country?.area?.area}</h5>
            <p>{country?.area?.area >30000 ? 'big country' : 'small country'}</p>
        </div>
    );
};

export default Country;
