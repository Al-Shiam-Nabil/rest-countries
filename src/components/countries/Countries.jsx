import React, { use } from 'react';
import Country from '../Country/Country'
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h3>Total Countries {countries.length}</h3>
<div className='countries'>
    
            {
                countries.map(country => <Country key={country.ccn3?.ccn3} country={country}></Country>)
            }
</div>
        </div>
    );
};

export default Countries;