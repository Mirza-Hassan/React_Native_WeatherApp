import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

// Weather screen component
const WeatherScreen = ({route, navigation}) => {
  const {weatherData} = route.params; // Extract weather data from route parameters

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>City: {weatherData.name}</Text>
      <Text style={styles.infoText}>
        Temperature: {weatherData.main.temp}°C
      </Text>
      <Text style={styles.infoText}>
        Weather: {weatherData.weather[0].description}
      </Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

// Styles for components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e0f7fa',
  },
  infoText: {
    fontSize: 20,
    color: '#00796b',
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default WeatherScreen;
