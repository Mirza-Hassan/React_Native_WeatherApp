# Weather App 

# Description
A Cross-platform Mobile weather app with history navigation, error handling, and clean, maintainable code.

# Table of Contents

- [Pre Requisites](#pre-requisites)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [API Documentation](#api-documentation)
- [Screenshot](#screenshot)

# Pre Requisites

- React Native

# Folder Structure
![folder_structure](https://github.com/Mirza-Hassan/React_Native_WeatherApp/assets/17096257/217b2290-73bc-4614-aff2-af4f1be3b2c0)

# Setup Instructions

Clone the repository:
```
git clone https://github.com/Mirza-Hassan/React_Native_WeatherApp.git
```
Navigate to the project directory:
```
cd MyWeatherApp
```
Install dependencies:
```
npm install
```
Start the development server:
```
npx react-native start
```
Run your app on a device or emulator:

For Android:
```
npx react-native run-android
```
For iOS (macOS only):
```
npx react-native run-ios
```

# API Documentation

### Weather for a city

**Base URL:** `https://api.openweathermap.org/data/2.5`

**Endpoint:** `GET /weather?q={city name}&units=metric&appid={API_KEY}`

**Description:** Retrieve current weather data for a specific city.

**Request:**
- Parameters:
  - `q`: City name (required)
  - `units`: Units of measurement (optional, default is metric)
  - `appid`: API key (required)

**Response:**
- Status 200: Successful response with weather data for the specified city.
- Status 404: City not found.

# Screenshot

![SS1](https://github.com/Mirza-Hassan/React_Native_WeatherApp/assets/17096257/035cae00-d308-4b08-9448-516732a2265e)

![SS2](https://github.com/Mirza-Hassan/React_Native_WeatherApp/assets/17096257/a1c74656-f725-424f-bb4d-7fd18d9b8a6d)


