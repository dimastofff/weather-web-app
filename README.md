# weather-web-app

Simple web app implemented using reactjs/redux/typescript stack to view weather forecasts from OpenWeatherMapAPI.

[Example](https://wthr-web-app.herokuapp.com/)

### How to run project

1. Create a `.env` file at the root of the project and put the keys from [OpenWeatherMapAPI](https://openweathermap.org/) and [YandexMapsAPI](https://yandex.ru/dev/maps/) into the file.

```
REACT_APP_OPEN_WEATHER_MAP_API_KEY=YOUR_KEY
REACT_APP_YANDEX_MAPS_API_KEY=YOUR_KEY
```

2. Install project dependencies.

```bash
$ npm install
```

3. Start development server.

```bash
$ npm start
```

4. Go to [http://localhost:3000/](http://localhost:3000/) in browser.
