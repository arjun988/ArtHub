import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebaseConfig';
//import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
//import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

//const auth = initializeAuth(app, {
//  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
//});

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {const auth = getAuth(app)
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Main'); // Navigate to AuthLoading on successful login
    } catch (error) {
      setError(error.message); // Display error message for unsuccessful login
    }
  };

  const handleSignup = () => {
    // Navigate to SignupScreen
    navigation.navigate('Signup');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo (2).jpeg')} style={styles.logo} />
      <Text style={styles.title}>Welcome Back!</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={handleSignup}>
          <Text style={styles.signupLink}> Sign Up</Text>
        </TouchableOpacity>
      </View>
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
  inputContainer: {
    width: '100%',
    marginBottom: 20,
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
  loginButton: {
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
  forgotPasswordText: {
    color: '#555', // Gray
    marginTop: 16,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    color: '#555', // Gray
    fontSize: 16,
  },
  signupLink: {
    color: '#333', // Dark Gray
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
  },
});

export default LoginScreen;
