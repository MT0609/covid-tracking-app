import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Home from './src/screens/Home';
import AdviceScreen from './src/screens/Advice';
import './src/i18n';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name={t("homepage")} 
          options={{tabBarIcon: () => <MaterialIcons name="home" size={25} />}} 
          component={Home} 
        />
        <Tab.Screen
          name={t("advicePage")} 
          options={{tabBarIcon: () => <EntypoIcon name="text-document" size={25} />}} 
          component={AdviceScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;