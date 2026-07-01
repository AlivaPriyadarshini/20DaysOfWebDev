const city = document.getElementById("city");
const btn = document.getElementById("btn");
const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

btn.addEventListener("click", async () => {
    if (city.value.trim() === "") {
        alert("Please enter a city name!");
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${API_KEY}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod == "404") {
            alert("City not found!");
            return;
        }

        cityName.textContent = `City: ${data.name}`;
        temp.textContent = `Temperature: ${data.main.temp}°C`;
        condition.textContent = `Condition: ${data.weather[0].main}`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    }

    catch (error) {
        alert("Something went wrong!");
        console.log(error);
    }
});