var city;

var key = 'c2d6f6f974cc0761aeacc70ce99d3e25';
var weatherManager = new WeatherManager()

function onSearch() {
    city = document.getElementById("cityInput").value
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    // http://api.openweathermap.org/data/2.5/weather?q=Marrakesh&appid=c2d6f6f974cc0761aeacc70ce99d3e25&units=metric`
    weatherManager.fetchForecast(url)
    document.getElementById("cityInput").value = ""
}