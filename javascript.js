  
  function getApi() {
    var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=bbb2c52d2a0a1b8c27b92512eb107417'
    fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
        var city = document.getElementById('city_name');
        var temp = document.getElementById('temperature');
        var humid = document.getElementById('humidity');
        var wind_speed = document.getElementById('wind_speed');
        var uv_in = document.getElementById('uv_in');
        city.textContent = data.name;
        temp.textContent = data.main.temp;
        humid.textContent = data.main.humidity;
        wind_speed.textContent = data.wind.speed;
        uv_in.textContent = data.wind.deg;
      console.log(city);
    })
  }

  getApi();