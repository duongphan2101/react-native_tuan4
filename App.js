import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import scr1 from "./screen/scr1";
import scr2 from "./screen/scr2";
import scr3 from "./screen/scr3";
import scr4 from "./screen/scr4";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='scr1'>
          <Stack.Screen name='Home' component={scr1}/>
          <Stack.Screen name='Sign up' component={scr2}/>
          <Stack.Screen name='Login' component={scr3}/>
          <Stack.Screen name='Product name' component={scr4}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
