// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Seu Logo</Text>
      {/* Adicione outros elementos da SplashScreen aqui, como animações ou mensagens */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Cor de fundo da SplashScreen
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333', // Cor do texto do logo
  },
});

export default SplashScreen;
