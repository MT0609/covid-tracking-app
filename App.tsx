import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Home from './src/screens/Home';
import AdviceScreen from './src/screens/Advice';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" options={{tabBarIcon: () => <MaterialIcons name="home" size={25} />}} component={Home} />
        <Tab.Screen name="Advice" options={{tabBarIcon: () => <EntypoIcon name="text-document" size={25} />}} component={AdviceScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;