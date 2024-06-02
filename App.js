import React, { useReducer, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from './src/Pages/TelaLogin';
import NavigationMenu from './src/components/NavigationMenu';
import { signIn, signOut, restoreToken } from './Auth'; // Importa as funções de autenticação
import SplashScreen from './src/Pages/SplashScreen';

const Stack = createStackNavigator();
export const AuthContext = React.createContext();

export default function App() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  /* useEffect(() => {
    // Restaura o token ao iniciar o aplicativo
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await restoreToken();
      } catch (e) {
        console.error('Erro ao restaurar token:', e);
      }

      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []); */

  const authContext = React.useMemo(
    () => ({
      signIn: async () => {
        try {
          const token = await signIn(); // Chama a função de login
          dispatch({ type: 'SIGN_IN', token });
        } catch (error) {
          console.error('Erro ao fazer login:', error);
        }
      },
      signOut: async () => {
        try {
          await signOut(); // Chama a função de logout
          dispatch({ type: 'SIGN_OUT' });
        } catch (error) {
          console.error('Erro ao fazer logout:', error);
        }
      },
    }),
    []
  );
  
  console.log(state.userToken)

  return (
    <AuthContext.Provider value={authContext}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {state.userToken == null ? (
              <Stack.Screen
                name="SignIn"
                component={TelaLogin}
                options={{
                  title: 'Login / Cadastro',
                }}
              />
            ) : (
              <Stack.Screen name="Home" component={NavigationMenu} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthContext.Provider>
  );
}
