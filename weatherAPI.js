// fetch('http://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=610661f84920414f9aa55aafa9956e2f')
//   .then(response => response.json())
//   .then(json => console.log(json))

const apiKey = '610661f84920414f9aa55aafa9956e2f';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = city => {
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
    .then(Response => Response.json())
    .then(data => updateData(data))
}

const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', ()=> {
    const inputCityName = document.getElementById('search-city').value;
    getWeatherData(inputCityName)
})

const updateData= data => {
    document.getElementById('place').innerText = data.name || "Unknown Location!";
    document.getElementById('temperature').innerText = data.main.temp;
    document.getElementById('live-status').innerText = data.weather[0].main;
    document.getElementById('live-img').setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById('search-city').value = "";
}

getWeatherData('Dhaka');
