import React from 'react';
import './Country.css';

const Country = (props) => {
    const { area, region, population, name, flags } = props.country;
    // console.log(props.country)
    return (
        <div className='country bg-success'>
            <h2>Name : {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Area : {area}</p>
            <p>Region : {region}</p>
            <p>Population : {population}</p>


            {/* <h2>Country Name : {name.common}</h2>
            <p>Population : {population}</p>
            <p>Country  Area: {area}</p>
            <p><small>Region : {region}</small></p> */}
        </div>
    );
};

export default Country;