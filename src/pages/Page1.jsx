import { useState, useEffect } from 'react';

const API_URL = 'https://restcountries.com/v3.1/all?fields=name,flags';

export default function Page1(){

  const [countries, setCountries] = useState([]);

  useEffect(function() {
    fetchCountries();
  }, []);

  async function fetchCountries() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      if(data) {
        setCountries(data);
      }

    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div>
      {countries.map((country) => (
        <div>
          <h2>{country.name.common}</h2>
          <img 
            src = {country.flags.png}
            //{ Alt attribute is added for accessibility and to satisfy ESLint jsx-a11y requirements }
            alt = {country.flags.alt} 
          />

          {/* Horizontal line to separate country entries */}
          <hr />
        </div>
      ))} 
    </div>
  );
}