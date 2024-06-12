import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

// Error screen component
const ErrorScreen = ({route, navigation}) => {
  const {message} = route.params; // Extract error message

  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{message}</Text>
      <Button
        title="Back"
        onPress={() => navigation.goBack()}
        color="#00796b"
      />
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
    backgroundColor: '#ffcdd2',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default ErrorScreen;
