const API_KEY = "94a29054c3d1c7e243d886d2b33a0e8d"

export default  function getData(city){

    const data =  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    const json = data.then(result=>result.json())
    data.catch(err=>console.log(err))

    return json
    
}

