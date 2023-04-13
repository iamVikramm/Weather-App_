import React, { useState } from 'react';
import getData from './Fetch';
import Card2 from './Card2';

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

    // Managing back click
    function handleBack(){
        setSearchResult([]);
    }

    // Showing form at beginning
    if(searchResult.length === 0){
        return (
            <div className='formOuter'>
                <div className='formInner'>
                    <div className='heading'><h3>Weather App</h3></div>
                    <form onSubmit={handleSubmit}>
                        <input className='input' placeholder='Enter city name' onChange={handleOnChange} value={inputValue} type='text'></input>
                        <br></br>
                        <input className='submit' type='submit' value="Search City"></input>
                    </form>
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