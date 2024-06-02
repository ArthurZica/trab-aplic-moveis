import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import BuscarScreen from '../Pages/BuscarScreen';
import NotificacoesScreen from '../Pages/NotificacoesScreen';
import PerfilScreen from '../Pages/PerfilScreen';

const Tab = createBottomTabNavigator();

export default function NavigationMenu() {
  return (
    <Tab.Navigator
      initialRouteName="Buscar"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
            
          if (route.name === 'Buscar') {
            iconName = 'search';
          } else if (route.name === 'Notificações') {
            iconName = 'notifications';
          } else if (route.name === 'Perfil') {
            iconName = 'person';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      
    >
      <Tab.Screen name="Buscar" component={BuscarScreen} />
      <Tab.Screen name="Notificações" component={NotificacoesScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />

    </Tab.Navigator>
  );
}
