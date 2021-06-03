
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import Home from './src/pages/Home/Home';
import Hoteis from './src/pages/Hoteis/Hoteis';

const Stack = createStackNavigator();



function App (){
  return(
    <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
            <Stack.Screen name='Hoteis' component={Hoteis} options={{headerShown:false}}/>
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});

export default App;
