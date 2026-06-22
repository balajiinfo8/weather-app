# Weather App

A simple weather application that lets users search for a city and view its current weather details.

## Screenshot

[Weather App Screenshot](images/weather-app.png)

## Features

- Search weather information by city name
- Displays city name
- Displays current temperature in Celsius
- Displays humidity percentage
- Displays current weather condition
- Handles invalid city names
- Handles API and network errors
- Uses asynchronous JavaScript with the Fetch API

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Fetch API
- OpenWeather API
- Bootstrap

## Project Structure

```text
weather-app/
├── index.html
├── style.css
├── script.js
├── config.js
├── config.example.js
├── .gitignore
├── README.md
└── images/
    └── weather-app.png
```

## How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/balajiinfo8/weather-app.git
```

2. Open the project folder:

```bash
cd weather-app
```

3. Create a file named `config.js` in the project root.

4. Add your OpenWeather API key inside `config.js`:

```js
const API_KEY = "YOUR_OPENWEATHER_API_KEY";
```

5. Open `index.html` using the Live Server extension in VS Code.

6. Enter a city name and click the **Search** button.

## API Key Setup

This project uses the OpenWeather API.

Create a free API key from the OpenWeather website, then add it to your local `config.js` file.

Example:

```js
const API_KEY = "YOUR_OPENWEATHER_API_KEY";
```

`config.js` is included in `.gitignore`, so the real API key is not uploaded to GitHub.

## Important Security Note

This project keeps the API key out of the GitHub repository using `.gitignore`.

However, this is a frontend-only project. If deployed directly, an API key used in browser JavaScript can still be visible in browser developer tools. For production-level security, the OpenWeather request should be moved to a backend server such as Django.

## Future Improvements

- Add weather icons
- Add loading spinner while fetching data
- Improve mobile responsiveness
- Add Enter key support for city search
- Add recent search history
- Add dark mode
- Create a Django backend to securely handle the API key
- Deploy the frontend and backend

## Author

Balaji V
