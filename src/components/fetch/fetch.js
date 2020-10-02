class Response {
  constructor() {

  }

  async fetchToGeolocationApi() {
    const response = await fetch('https://ipinfo.io/json?token=48cff01480590b');
    return response.json();
  }

  async fetchToWeatherApi({ loc }) {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=9f70dfdbc57b46d3a2c112036203009&q=${loc}&days=3`);
    return response.json();
  }

  async fetchToPhotoApi() {
    const response = await fetch('https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=Sad4yyK9WVmv9rHEtiLlHGys6hTCrz2Q6njvD-_fnDk');
    return response.json();
  }

  async fetchToGeocodingApi(city) {
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=525a21417ce04e3eacfb3eb434184295`);
    return response.json();
  }

  update(obj) {
    console.log(obj, 'hi');
  }
}

export default Response;
