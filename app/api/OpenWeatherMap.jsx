var axios = require('axios');
const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=06038ad0cdd9b67bdc872006c708639a&units=imperial";

module.exports = {
  getTemp: function (data) {
    var encodedLocation = encodeURIComponent(data);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(function (res) {
      //console.log("Map Success");
      if (res.data.cod && res.data.message) {
        //console.log("Map Success Error");
        throw new Error(res.data.message);
      } else {
        var result = {};
        result.temp = res.data.main.temp;
        result.name =res.data.name;
        return (result);
        //return res.data.main.temp;
      }
    }, function (res) {
      //console.log("Reject");
      console.log(res);
      throw new Error(res.data.message);
    });
  }
}
