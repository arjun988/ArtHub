import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import AuthLoadingScreen from '../screens/Auth/AuthLoadingScreen';
import { useEffect } from 'react';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';

const Stack = createStackNavigator();

const AuthNavigator = ({ navigation }) => {
  useEffect(() => {
    // You can implement your authentication check here
    // For demonstration purposes, using a simple flag
    const userIsAuthenticated = false; // Replace with your authentication logic

    // Navigate based on authentication status
    if (userIsAuthenticated) {
      navigation.replace('Main');
    } else {
      navigation.replace('Login');
    }
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
