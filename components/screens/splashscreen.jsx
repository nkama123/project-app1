import React,{Component, useEffect} from 'react';
import {Text, StyleSheet,View,ImageBackground, Image,useWindowDimensions,ScrollView,Dimensions} from 'react-native';
import { Icon, Input, Button} from "react-native-elements";


const requires =() => {}

const Splash = ({
    navigation,

    }) => {
       
        const layout=useWindowDimensions()
        useEffect(() => {
            setTimeout(() =>{
                navigation.navigate('getstarted')
            }, 3000);
    }, [])
    

    return (
        
        
        <ScrollView style ={{backgroundColor:'#ffffff'}}
        showsVerticalScrollIndicator={false}>
            <View style ={styles.view}>
                <Icon
                    name="location-sharp"
                    style={{color:'#f5eade',fontSize:100}}>
                </Icon>
            </View>
           
       
           
            
          
            <View style={styles.TextContainer}>
                </View>
            <Text style={styles.subtitle}>plan your trip with us</Text>
          
                        
          
        
       
            </ScrollView>

 
    )
};



export default Splash;

const styles = StyleSheet.create({
    Sp: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width:20,
        height:20,
       
       
    },
    view:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})