const apiKey = "c364e906691b758eb4ef2f3f7940423d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric"

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
    if (response.status === 200) {
        const data = await response.json();
        console.log(data);
    } else {
        alert("City not found. Please try again.");
    }

}

checkWeather("Nashik");

