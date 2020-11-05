import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Account" component={HomeScreen} options={{
          headerStyle: {
            backgroundColor: '#015daa'
          },
          headerTintColor: '#fff'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;