let cityInput = document.getElementById("cityInput");
let searchBtn = document.getElementById("searchBtn");
const weatherResult =  document.getElementById("weatherResult");

searchBtn.addEventListener("click" ,() => {
    const city = cityInput.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    console.log(city);

    fetch(
        url
    )
    .then(response => response.json())
    .then(data => {

        if(data.cod === "404"){
            console.log(data.cod);
            weatherResult.innerHTML = `
                <li>City not Found</li>
            `;
            return;
        }

        weatherResult.innerHTML = `
            <div class='weather-card'
                h2>${data.name}</h2>
                <p>Temperature : ${data.main.temp}</p>
                <p>Humidity : ${data.main.humidity}</p>
                <p>Condition : ${data.weather[0].description}</p>
            </div>
        `;
    })
    .catch((error) => {
            console.log("Website not working : " , error);
            weatherResult.innerHTML = `
                <li> Error It can't Found , Try Again</li>
            `;
        });
});