import React, { useState } from 'react';
import getData from './Fetch';
import Card2 from './Card2';
import { getDeviceLocation } from './Fetch';

function Card(props) {

    // State for Input Value
    const[inputValue,setInputValue] = useState("");

    // State for searched city
    const[searchResult,setSearchResult] = useState([]);

    // Onchange Handler
    function handleOnChange(e){
        setInputValue(e.target.value)
    }

    // Handling the submit
    async function handleSubmit(e){

        e.preventDefault()
        const data = getData(inputValue.toLowerCase())

        // Checking if the response is valid or not
        data.then(function(res){
            if(res.cod === 200){
                const inner = [res]
                setSearchResult(inner)
                setInputValue("")
            }else{
                alert(`There is no such city called ${inputValue} please check the spelling`)
            }
        })
        
    }

    // Get Device Location

    function showPositions(position){
        const x = position.coords.latitude;
        const y = position.coords.longitude;
        
        const data = getDeviceLocation(x,y);
        data.then(function(res){
            if(res.cod === 200){
                const inner = [res]
                setSearchResult(inner)
                setInputValue("")
            }else{
                alert("Cannot fetch your device location")
            }
        })
    }

    function handleDeviceLocation(){ 
        navigator.geolocation.getCurrentPosition(showPositions)
    }

    // Managing back click
    function handleBack(){
        setSearchResult([]);
    }

    // Showing form at beginning
    if(searchResult.length === 0){
        return (
            <div className='formOuter'>
                <div className='formInner'>
                    <div className='heading'>
                        <h4>Weather App</h4>
                    </div>
                    <div className='input-location'>
                        <div className='form'>
                            <form onSubmit={handleSubmit}>
                                <input value={inputValue} onChange={handleOnChange} placeholder='Enter city name'></input>
                            </form>
                        </div>
                        <div className='border'> 
                            <div className='or'>or</div>                            
                        </div>
                        <div className='devicelocation'>
                            <button onClick={handleDeviceLocation}>Get Device Location</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    // Returing the other element if we have searched city details
    return(
        <Card2 data={searchResult} setback={handleBack} />
    )
    
}

export default Card;