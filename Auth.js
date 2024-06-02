import AsyncStorage from '@react-native-async-storage/async-storage';

export const signIn = async () => {
  try {
    // Simula o processo de login
    const token = 'dummy-auth-token';

    // Salva o token no AsyncStorage
    await AsyncStorage.setItem('userToken', token);

    return token;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    // Remove o token do AsyncStorage ao fazer logout
    await AsyncStorage.removeItem('userToken');
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
    throw error;
  }
};

export const restoreToken = async () => {
  try {
    // Restaura o token do AsyncStorage ao iniciar o aplicativo
    const token = await AsyncStorage.getItem('userToken');
    return token;
  } catch (error) {
    console.error('Erro ao restaurar token:', error);
    throw error;
  }
};
