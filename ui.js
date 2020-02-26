class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.pressure = document.getElementById('w-pressure');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelslike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = `${weather.name} ${weather.sys.country}`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} hPa`;
    this.string.textContent = `${Math.round(weather.main.temp - 273)} °C`;
    this.desc.textContent = weather.weather[0].description;
    this.humidity.textContent = `Relative humidity: ${weather.main.humidity} %`;
    this.feelslike.textContent = `Feels like: ${Math.round(weather.main.feels_like - 273)} °C`;
    this.wind.textContent = `Wind: ${weather.wind.speed} MPH`;
    this.icon.setAttribute('src', "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png");
  }
}
