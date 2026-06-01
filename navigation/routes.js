import React from 'react';

import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import HomeScreen
from '../screens/HomeScreen';

import AddExpenseScreen
from '../screens/AddExpenseScreen';

const Stack =
  createNativeStackNavigator();

export default function Routes() {

  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title:
              'Controle de Gastos',

            headerStyle: {
              backgroundColor:
                '#8B0000',
            },

            headerTintColor:
              '#FFFFFF',

            headerTitleStyle: {
              fontWeight:
                'bold',
            },
          }}
        />

        <Stack.Screen
          name="Adicionar"
          component={
            AddExpenseScreen
          }
          options={{
            title:
              'Novo Gasto',

            headerStyle: {
              backgroundColor:
                '#8B0000',
            },

            headerTintColor:
              '#FFFFFF',

            headerTitleStyle: {
              fontWeight:
                'bold',
            },
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}