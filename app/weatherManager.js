
// function timeNow(i) {
//     var d = new Date(),
//       h = (d.getHours()<10?'0':'') + d.getHours(),
//       m = (d.getMinutes()<10?'0':'') + d.getMinutes();
//     i.value = h + ':' + m;
//   }

class WeatherManager {
    #_currentForecast;
    #_weekForecast;

    set currentForecast(value) {
        this.#_currentForecast = value
    }

    get currentForecast() {
        return this.#_currentForecast
    }

    // async fetchForecast(url) {
    //     var weather = new Weather()

    //     fetch(url)
    //     .then(response => {
    //         // handle the response
    //         return response.json()
    //     }).then(json => {
    //         weather.city = json.name
    //         weather.description = json.weather[0].main
    //         weather.iconCode = json.weather[0].ic
    //         weather.temp = json.main.temp
    //         weather.humidity = json.main.humidity
    //         this.#_currentForecast = weather
    //         // console.log(this.#_currentForecast)
    //     })
    //     .catch(error => {
    //         // handle the error
    //         console.log(error)
    //     });
    //     return await weather

    // }

    

    async fetchForecast(url) {

        var response = await fetch(url)
        var json = await response.json()
        // handle the response

        var weather = new Weather()
        weather.city = json.name
        weather.description = json.weather[0].main
        weather.iconCode = json.weather[0].icon
        weather.temp = json.main.temp
        weather.humidity = json.main.humidity
        this.#_currentForecast = weather
        document.getElementById("citylights").innerHTML = weather.city;
        document.getElementById("descritpion").innerHTML = weather.description;
        document.getElementById("temperture").innerHTML = weather.temp + "°C";
        
        


    }
}