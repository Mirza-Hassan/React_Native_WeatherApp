# Weather App 

# Description
A Cross-platform Mobile weather app with history navigation, error handling, and clean, maintainable code.

# Table of Contents

- [Pre Requisites](#pre-requisites)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [API Documentation](#api-documentation)
- [Architecture and Trade-offs](#architecture-and-trade-offs)
- [Screenshot](#screenshot)

# Pre Requisites

- React Native
- Third-party packages: Axios, react-navigation

# Folder Structure
![folder_structure](https://github.com/Mirza-Hassan/React_Native_WeatherApp/assets/17096257/7ae4154f-2119-4a34-9008-0c990976383a)

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

# Architecture and Trade-offs

## Architecture
The app follows a component-based architecture using React Native. Screens are managed using React Navigation.

- HomeScreen: Handles city input and displays search history.
- ErrorScreen: Displays API error messages.
- WeatherScreen: Shows weather details for a city.
- AppNavigator: Manages navigation between screens.

## Trade-offs
- Search history is stored in the component state. Consider using persistent storage for reliability.

# Screenshot

![SS1](https://github.com/Mirza-Hassan/React_Native_WeatherApp/assets/17096257/035cae00-d308-4b08-9448-516732a2265e)

![SS2](https://github.com/Mirza-Hassan/React_Native_WeatherApp/assets/17096257/a1c74656-f725-424f-bb4d-7fd18d9b8a6d)


