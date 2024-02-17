// SignupScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebaseConfig';

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    // Simulate a simple signup logic (replace with your authentication mechanism)
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      const auth = getAuth(app);
      try {
        // Create a new user with email and password
        await createUserWithEmailAndPassword(auth, email, password);
        navigation.navigate('Main'); // Navigate to AuthLoading or Home screen
      } catch (error) {
        setError(error.message); // Display error message for unsuccessful signup
      }
    }
  };

  const handleLogin = () => {
    // Navigate back to Login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo (2).jpeg')} style={styles.logo} />
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.loginText} onPress={handleLogin}>
        Already have an account? Login
      </Text>
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
    color: '#333', // Dark Gray
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
  signupButton: {
    backgroundColor: '#333', // Dark Gray
    paddingVertical: 16,
    paddingHorizontal: 120,
    borderRadius: 24,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF', // White
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#555', // Gray
    marginTop: 16,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
  },
});

export default SignupScreen;
