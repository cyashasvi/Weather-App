  
  function getApi(citySearch) {
   // var citySearch = document.querySelector('#city_search').value;
    localStorage.setItem('city', citySearch);
    var listEl = document.getElementById('city');
    listEl.textContent = localStorage.getItem('city');
    var requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + citySearch + '&units=imperial&appid=bbb2c52d2a0a1b8c27b92512eb107417'
    fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
        var long = data.coord.lon;
        var lat = data.coord.lat;
        var city = document.getElementById('city_name');
        var temp = document.getElementById('temperature');
        var humid = document.getElementById('humidity');
        var wind_speed = document.getElementById('wind_speed');
        var uv_in = document.getElementById('uv_in');
        city.textContent = data.name;
        temp.textContent = 'It is ' + data.main.temp + ' degrees Farenheit outside.';
        humid.textContent = data.main.humidity;
        wind_speed.textContent = data.wind.speed;
        uv_in.textContent = data.wind.deg;
      getTwo(long,lat)
    })
  }
function getTwo(long,lat) {
  var requestURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + long + '&units=imperial&appid=bbb2c52d2a0a1b8c27b92512eb107417'
  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
}
  document.getElementById('search').addEventListener('click',function(){
    var citySearch = document.querySelector('#city_search').value;
    getApi(citySearch)
    document.querySelector('#city_search').value = '';
  });