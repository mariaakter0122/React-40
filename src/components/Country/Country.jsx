
import { useState } from 'react';
import './Country.css';
const Country = ({country}) => {
    const {name,flags,population,area,cca3,ccn3 }= country;
    const [visited,setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited ? 'visited':'non-visited'}`}>
            <h3 style={{color: visited?'purple':'black'}}>Name:{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>area:{area}</p>
            <p>cca3:{cca3}</p>
            <p>ccn3:{ccn3}</p>
    <button onClick={handleVisited}>{visited?'visited':'Going'}</button>
    {visited ? 'i have visited this country ' : 'i want to  a visit '}
        
        </div>
    );
};

export default Country;