
apiKey = "5cfb24a3af066a59f3724b80c607bccc"
apiLink = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
let weatherIcon = document.querySelector('.weatherIcon')
let weather = document.querySelector('.weather')

async function checkWeather(city) {
    const response = await fetch(apiLink + city + `&appid=${apiKey}`)

    if(response.status==404)
    {
        document.querySelector('.error').style.display="block"
        weather.style.display="none"
    }
    else{
        var data = await response.json()
    console.log(data)
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C'
    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h'
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
    document.querySelector('.weatherType p').innerHTML = data.weather[0].main


    console.log(data.weather[0].main)



    if (data.weather[0].main =='Clear') {
        weatherIcon.src = "/img/clear.png"
        console.log(data.weather[0].main)
    }
    else if(data.weather[0].main == 'Clouds') {
        weatherIcon.src = "/img/clouds.png"
    }
    else if(data.weather[0].main == 'Drizzle') {
        weatherIcon.src = "/img/drizzle.png"
    }
    else if(data.weather[0].main == 'Humidity') {
        weatherIcon.src = "/img/humidity.png"
    }
    else if(data.weather[0].main == 'Mist') {
        weatherIcon.src = "/img/mist.png"
    }
    else if(data.weather[0].main == 'Rain') {
        weatherIcon.src = "/img/rain.png"
    }
    else if(data.weather[0].main == 'Snow' || data.weather[0].main == 'Fog') {
        weatherIcon.src = "/img/snow.png"
    }
    else{
        weatherIcon.src="/img/giphy.gif"
        console.log("no image")
    }
    weather.style.display="block"
    document.querySelector('.error').style.display="none"
    }

    

}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)

})

