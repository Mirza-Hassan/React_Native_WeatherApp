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
![fs](https://github.com/Mirza-Hassan/React_Native_WeatherApp/assets/17096257/bdd10b6b-77d9-498c-8114-c0236acba4f6)

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


