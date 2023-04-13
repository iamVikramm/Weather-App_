import React from 'react';

function Card2(props) {

    // Storing all the data in variables
    const data = props.data[0]
    const city = data.name
    const temp_in_celcius = Math.round(data.main.temp - 273.15);
    const feels_like = Math.round(data.main.feels_like - 273.15);
    const humidity = data.main.humidity;
    const description = data.weather[0].description
    const country = data.sys.country

    // Styles
    const flexStyles = {
        margin:"5%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontFamily:"sans-serif"
    }

    return (
        <div className='searched-city-outer'>
            <div className='searched-city-inner'>

                {/* Top Part */}
                <div className='searched-city-top'>
                    <div className='searched-city-top-inner'><i onClick={props.setback} className="fa-solid fa-arrow-left"></i><h3>Weather App</h3></div>
                </div>

                {/* Middle Part */}
                <div className='searched-city-middle'>
                    <div style={flexStyles}>

                        {/* Changing the png Based on Temparature */}
                        {
                        temp_in_celcius > 20 ?
                            <img className='weather-png' alt='png' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEYtUyvXAMAIHMwo9ANQtNe3nycR6vJrZ8ZbzcBAGnA&usqp=CAU&ec=48665698'></img>
                        :
                            <img className='weather-png' alt='png' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZ4auM76kiFTpSg2UTsNMlkh9mbrLdVttSkqSzzm9gV0i_hLfuCk61zNapyAAy-5scLgbyH5CKUs&usqp=CAU&ec=48665698'></img>
                        
                        }
                    
                    </div>
                    <div style={flexStyles} ><h1 style={{fontSize:"3rem",margin:"0"}}>{temp_in_celcius}&#176;C</h1></div>
                    <div style={flexStyles}><p style={{margin:"0"}}>{description}</p></div>
                    <div style={flexStyles}><p style={{margin:"0"}}><i className="fa fa-sharp fa-light fa-location-dot"></i> {city}, {country}</p></div>

                </div>

                {/* Bottom Part */}
                <div className='searched-city-bottom'>
                    <div className='foot-left'>
                        <div style={flexStyles}>
                            <i style={{fontSize:"1.8rem",margin:"5%",color:"#5BC0F8"}} className="fa-solid fa-temperature-quarter"></i>
                        </div>
                        <div style={{flexDirection:"column"}}>
                            <p style={{margin:"0"}}>{feels_like}&#176;C</p>
                            <small style={{fontSize:".7rem"}}>Feels like</small>
                        </div>
                    </div>
                    <div className='foot-right'>
                        <div style={flexStyles}>
                            <i style={{fontSize:"1.8rem",margin:"5%",color:"#5BC0F8"}} class="fa-solid fa-droplet"></i>
                        </div>
                        <div style={{flexDirection:"column"}}>
                            <p style={{margin:"0"}}>{humidity}%</p>
                            <small style={{fontSize:".7rem"}}>Humidity</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card2;