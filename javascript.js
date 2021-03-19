  
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
       
        city.textContent = data.name;
        temp.textContent = 'It is ' + data.main.temp + ' degrees Farenheit outside.';
        humid.textContent = 'Current Humidity : ' + data.main.humidity + '%';
        wind_speed.textContent = 'Wind Speed: ' + data.wind.speed + 'mph';
        
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
    var uv_in = document.getElementById('uv_in');
    var dayOne = document.getElementById('dayone');
    var dayTwo = document.getElementById('daytwo');
    var dayThree = document.getElementById('daythree');
    var dayFour = document.getElementById('dayfour');
    var dayFive = document.getElementById('dayfive');
    uv_in.textContent = 'UV Index: ' + data.daily[0].uvi;
    dayOne.textContent = 'Tomorrow: ' + data.daily[0].temp.day + ' F'; 
    dayTwo.textContent = 'Day After: ' + data.daily[1].temp.day + ' F'; 
    dayThree.textContent = 'Two Days Out: ' + data.daily[2].temp.day + ' F'; 
    dayFour.textContent = 'Three Days Out: ' + data.daily[3].temp.day + ' F'; 
    dayFive.textContent = 'Four Days Out: ' + data.daily[4].temp.day + ' F';

    if ( 0 <= data.daily[0].uvi <= 2) {
     uv_in.style.color = 'green';
     uv_in.style.fontWeight = 'bold'; 
    }
    else if ( 3 <= data.daily[0].uvi <= 5) {
      uv_in.style.color = 'yellow';
      uv_in.style.fontWeight = 'bold';
    }
    else if ( 6 <= data.daily[0].uvi <= 7) {
      uv_in.style.color = 'orange';
      uv_in.style.fontWeight = 'bold';
    }
    else if ( 8 <= data.daily[0].uvi <= 10) {
      uv_in.style.color = 'red';
      uv_in.style.fontWeight = 'bold';
    }

    var bodyOne = document.getElementById('bodyone');
    var bodyTwo = document.getElementById('bodytwo');
    var bodyThree = document.getElementById('bodythree');
    var bodyFour = document.getElementById('bodyfour');
    var bodyFive = document.getElementById('bodyfive');
    bodyOne.textContent = 'UV Index: ' + data.daily[0].uvi + ' Humidity: ' + data.daily[0].humidity + '%';
    bodyTwo.textContent = 'UV Index: ' + data.daily[1].uvi + ' Humidity: ' + data.daily[1].humidity + '%';
    bodyThree.textContent = 'UV Index: ' + data.daily[2].uvi + ' Humidity: ' + data.daily[2].humidity + '%'; 
    bodyFour.textContent = 'UV Index: ' + data.daily[3].uvi + ' Humidity: ' + data.daily[3].humidity + '%';
    bodyFive.textContent = 'UV Index: ' + data.daily[4].uvi + ' Humidity: ' + data.daily[4].humidity + '%';

    var bodyOneB = document.getElementById('bodyoneB');
    var bodyTwoB = document.getElementById('bodytwoB');
    var bodyThreeB = document.getElementById('bodythreeB');
    var bodyFourB = document.getElementById('bodyfourB');
    var bodyFiveB = document.getElementById('bodyfiveB');
    bodyOneB.textContent = ' Humidity: ' + data.daily[0].humidity + '%';
    bodyTwoB.textContent = ' Humidity: ' + data.daily[1].humidity + '%';
    bodyThreeB.textContent = ' Humidity: ' + data.daily[2].humidity + '%'; 
    bodyFourB.textContent = ' Humidity: ' + data.daily[3].humidity + '%';
    bodyFiveB.textContent = ' Humidity: ' + data.daily[4].humidity + '%';
  });
}
  document.getElementById('search').addEventListener('click',function(){
    var citySearch = document.querySelector('#city_search').value;
    getApi(citySearch)
    document.querySelector('#city_search').value = '';
  });