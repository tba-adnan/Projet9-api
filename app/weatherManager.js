class WeatherManager {
    #_currentForecast;
    #_weekForecast;

    fetchForecast(url) {
        fetch(url)
        .then(response => {
            // handle the response
            return response.json()
        }).then(json => {
            var weather = new Weather()
            weather.city = json.name
            weather.description = json.weather[0].main
            weather.iconCode = json.weather[0].icon
            weather.temp = json.main.temp
            weather.humidity = json.main.humidity
            this.#_currentForecast = weather
            console.log(this.#_currentForecast)
        })
        .catch(error => {
            // handle the error
            console.log(error)
        });
    }
}