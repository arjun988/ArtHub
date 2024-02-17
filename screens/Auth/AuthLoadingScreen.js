import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AuthLoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Auth Loading Screen</Text>
      {/* Add your auth loading components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AuthLoadingScreen;
