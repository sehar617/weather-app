function getweather() {
    // get variable value input box
    let checkCityName = document.getElementById("temp1").value;

    axios.get(`https://api.weatherapi.com/v1/current.json?key=9c36a46338a240519c6100108240302&q=${checkCityName}&aqi=yes`)
        .then(function (response) {
            // handle success
            console.log(response);
            let weather1 = response.data.current.temp_c;
            console.log(weather1)
            document.getElementById("change").innerHTML = `Today's Temp of ${checkCityName} is ${weather1}°C`;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}