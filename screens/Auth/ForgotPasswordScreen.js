import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = () => {
    // Simulate a password reset logic (replace with your authentication mechanism)
    // For simplicity, let's assume the email is required, and a reset link will be sent to the provided email.
    if (email.trim() === '') {
      setError('Please enter your email address');
    } else {
      // Successful reset logic (replace with your logic)
      navigation.navigate('Login'); // Navigate to the Login screen
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo (2).jpeg')} style={styles.logo} />
      <Text style={styles.title}>Forgot Password?</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F4F4F4', // Light Gray
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#603C28', // Brown color
  },
  input: {
    height: 48,
    width: '100%',
    borderColor: '#555', // Gray
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 16,
    color: '#333', // Dark Gray
    borderRadius: 24,
    fontSize: 16,
  },
  error: {
    color: '#E74C3C', // Alizarin (Red)
    marginBottom: 12,
    textAlign: 'center',
    fontSize: 14,
  },
  resetButton: {
    backgroundColor: '#333', // Dark Gray
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 24, // Smaller border radius for a more friendly look
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF', // White
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
  },
});

export default ForgotPasswordScreen;
