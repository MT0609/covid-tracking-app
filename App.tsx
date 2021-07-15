import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" options={{tabBarIcon: () => <Text>Home</Text>}} component={Home} />
        <Tab.Screen name="Advice" options={{tabBarIcon: () => <Text>Advice</Text>}} component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;