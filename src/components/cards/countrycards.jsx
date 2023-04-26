import './style.css';
import { useState, useEffect } from 'react';
import Card from './card/card';

function CountryCards() {
    let [countries, setCountries] = useState([]);

    async function getData() {
        let res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();
        setCountries(data); 
        console.log(data);
    }

    useEffect(() => {
        getData();
    },[]);


    return (
        <div className='country-cards'>
          {countries.map((country) => (
            <Card key={country.name.common} country={country} />
          ))}
        </div>
      );
}

export default CountryCards;