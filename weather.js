class Weather {
  constructor(city, state) {
    this.apiKey = 'c8c070dde2d05acb82c7d45ba7e95d0a';
    this.city = city;
    this.state = state;
  }

  //Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
