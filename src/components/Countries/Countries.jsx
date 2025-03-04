// import { useEffect } from "react";
// import { useState } from "react";
// import Country from "../Country/Country";
// import './Countries.css'
// const Countries = () => {




//     const [countries,setCountries] = useState([]);
// useEffect(() => {
// fetch('https://restcountries.com/v3.1/all')
// .then(res => res.json())
// .then(data => setCountries(data))
// },[])
//     return (
//         <div>
//         <h3>Countries:{countries.length}</h3>  
//  <div className="country-container">
//  {
//             countries.map(country=> <Country country={country}></Country>)
//         }  
//  </div>
//         </div>
//     );
// };

// export default Countries;
import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    // Fetch data from the REST API
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => console.error("Error fetching countries:", error)); // Error handling
    }, []);

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div className="country-container">
                {
                    countries.map(country => 
                        <Country 
                            key={country.cca3} // Use a unique key (e.g., `cca3`)
                            country={country} 
                        ></Country>
                    )
                }
            </div>
        </div>
    );
};

export default Countries;
