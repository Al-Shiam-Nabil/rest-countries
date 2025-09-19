
import { use, useState } from 'react';
import Country from '../Country/Country'
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    const [visitedCountry, setVisitedCountry] = useState([]);
    const [visitedFlags,setVisitedFlags]=useState([]);

    const handleVisitedFlags=(flags)=>{
        let newVisitedFlags=[...visitedFlags,flags]
        setVisitedFlags(newVisitedFlags)
    }

    const handleVisitedCountry = (country) => {
        let newVisitedCountry = [...visitedCountry, country]
        setVisitedCountry(newVisitedCountry);
    }

    return (
        <div>
            <h3>Total Countries {countries.length}</h3>

            <h3>My Visited Country: {visitedCountry.length} </h3>
            <ol>
                {
                    visitedCountry.map(country => <li>{country.name.common}</li>)
                }
            </ol>

            <div className='visited-flags'>
                {
                    visitedFlags.map((flag,index)=> <img key={index} src={flag}></img>)
                }
            </div>

            <div className='countries'>

                {
                    countries.map(country => <Country key={country.ccn3?.ccn3} country={country} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;