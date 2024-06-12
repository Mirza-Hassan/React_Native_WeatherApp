import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {getWeather} from '../api/weatherApi';

// Home screen component
const HomeScreen = ({navigation}) => {
  const [city, setCity] = useState(''); // State for city input
  const [history, setHistory] = useState([]); // State for search history

  // Handle search button press
  const handleSearch = async () => {
    try {
      const weatherData = await getWeather(city);
      // Update history
      const newHistory = [city, ...history.filter(item => item !== city)].slice(
        0,
        5,
      );
      setHistory(newHistory);
      navigation.navigate('Weather', {weatherData});
    } catch (error) {
      navigation.navigate('Error', {message: error.response.data.message});
    }
  };

  // Handle history item click
  const handleHistoryClick = async city => {
    try {
      const weatherData = await getWeather(city);
      navigation.navigate('Weather', {weatherData});
    } catch (error) {
      navigation.navigate('Error', {message: error.response.data.message});
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter city name:</Text>
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={setCity}
        placeholder="e.g. New York"
        placeholderTextColor="#888"
      />
      <Button title="Get Weather" onPress={handleSearch} color="#00796b" />
      <Text style={styles.historyHeading}>Last 5 City Searches:</Text>
      <FlatList
        data={history}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => handleHistoryClick(item)}
            style={styles.historyItem}>
            <Text style={styles.historyText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// Styles for components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e0f7fa',
  },
  label: {
    fontSize: 18,
    color: '#00796b',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#00796b',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    color: '#00796b',
    backgroundColor: '#fff',
  },
  historyHeading: {
    fontSize: 20,
    color: '#00796b',
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  historyItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#00796b',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 5,
  },
  historyText: {
    fontSize: 16,
    color: '#00796b',
  },
});

export default HomeScreen;
