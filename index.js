var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind= document.querySelector('#wind')
apik="b92efaf4b287bea6d21a73e1779b5e7c"
function convertion(val)
{
    return ( val - 273).toFixed(3)

}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
    .then(res => res.json())
    .then(data => {
        if (data.cod == "404") {
            alert('You entered wrong city');
            return;
        }

        var nameval = data['name'];
        var descrip = data['weather'][0]['description'];
        var temperature = data['main']['temp'];
        var wndspeed = data['wind']['speed'];

        city.innerHTML = `Weather of <span> ${nameval}</span>`;
        temp.innerHTML = `Temperature of <span>${convertion(temperature)} C</span>`;
        description.innerHTML = `Sky Conditions : <span> ${descrip}</span>`;
        wind.innerHTML = `Wind Speed : <span>${wndspeed} km/h</span>`;
    })
    .catch(err => alert('Error fetching weather data!'));
});
