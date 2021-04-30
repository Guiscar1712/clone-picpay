import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons'

import PayButton from './component/paybuttom/Paybutton'
import HomeScreen from './layouts/home/Home';
import PaymentScreen from './layouts/pay/Payment';
import WalletScreen from './layouts/wallet/Wallet';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home'
  },
  Wallet: {
    lib: AntDesign,
    name: 'creditcard'
  },
  Notifications: {
    lib: Ionicons,
    name: 'notifications-outline'
  },
  Settings: {
    lib: AntDesign,
    name: 'setting'
  }
}

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="Wallet" screenOptions={({ route, navigation }) => ({
      tabBarIcon: ({ color, size, focused }) => {
        if (route.name === 'Payment') {
          return <PayButton onPress={ () => navigation.navigate('Payment')} focused={focused} />
        }
        const { lib: Icon, name } = icons[route.name];
        return <Icon name={name} size={size} color={color} />;
      }
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rgba(255, 255, 255, 0.2',  
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#92929c'
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Inicio'
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          title: 'Carteira'
        }}
      />
      <Tab.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          title: ''
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={PaymentScreen}
        options={{
          title: 'Notificações'
        }}
      />
      <Tab.Screen
        name="Settings"
        component={PaymentScreen}
        options={{
          title: 'Ajustes'
        }}
      />
    </Tab.Navigator>
  )
}