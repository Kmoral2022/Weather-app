import React, {useState} from 'react';
import axios from 'axios';
import SunsetImage from './assets/Sunset.png';

function App() {
const [data, SetData] = useState({})
const [location, setLocation] = useState('')
const url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=6b18efa790d95b0d8a2a6570144695ca`

const searchLocation = (event) => {
  if (event.key === 'Enter') {
    axios.get(url).then((response)=>{
      SetData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
}

  return (
    <div className="app" style={{
      backgroundImage: `url(${SunsetImage})`, // Use SunsetImage as backgroundImage
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    }} >
      <div className='search'>
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type='text'/>
      </div>
      <div className='container'>
        <div className='top'> 
        <div className='location'> 
        <p>{data.name}</p>
        </div>
        <div className='temp'>
          {data.main ? <h1>{data.main.temp.toFixed()}&#176;F</h1> : null}
        </div>
        <div className='description'>
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
        </div>



        {data.name !== undefined && (
          <>
            <div className='bottom'>
              <div className='feels'>
                {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}&#176;F</p> : null}
                <p>Feels like</p>
              </div>
              <div className='humidity'>
                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                <p>Humidity</p>
              </div>
              <div className='wind'>
                {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}MPH</p> : null}
                <p>Wind Speed</p>
              </div>
            </div>

            <footer className='foot'>
              Designed by Oke Omoge, Junior full stack developer
            </footer>
          </>
        )}
      

      </div>
    </div>
  );
}

export default App;
