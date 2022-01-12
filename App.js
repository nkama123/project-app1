import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splashscreen from './components/screens/splashscreen';
import getstarted from './components/screens/getstarted';
import signin from './components/screens/signin';
import signup from './components/screens/signup';
import forgotpassword from './components/screens/forgotpassword';
import Homepage from './components/screens/Homepage';
import { View,Text } from 'react-native';





const Menu = ()=>{
    const Stack = createNativeStackNavigator()
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName = { 'SplashScreen' } screenOptions={{headerShown:false}}
             >
             <Stack.Screen name = { 'splashscreen' } component={Splashscreen}/>
             <Stack.Screen name = { 'getstarted' } component={getstarted}/>
             <Stack.Screen name = { 'signin' } component={signin}/>
             <Stack.Screen name = { 'signup' } component={signup}/>
             <Stack.Screen name = { 'forgotpassword' } component={forgotpassword}/>
    
             <Stack.Screen name = { 'Homepage' } component={Homepage}/>
             
            </Stack.Navigator>
        </NavigationContainer>
        

    )
}
export default Menu