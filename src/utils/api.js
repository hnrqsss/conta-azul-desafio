import axios from 'axios'

const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather'
})


async function requestWeather(city, country) {
    try {

        const { data } = await api.get(`?q=${city.toLowerCase()},${country}&units=metric&appid=${apiKey}`)    
        
        data.lastUpdate = new Date().toLocaleTimeString('en', {
            hour: '2-digit',
            minute:'2-digit',
            second: '2-digit',
        })

        return data

    } catch(error) {
        return error
    }
}

export {
    requestWeather
}