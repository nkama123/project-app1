import React, { useState } from "react";
import { Text,View,ScrollView, ImageBackground,Dimensions,StyleSheet,Image,StatusBar,TouchableOpacity} from 'react-native';
import { Icon, Input, Button} from "react-native-elements";


const getstarted = ({navigation}) => {
    const [isPasswordVisibility, setIsPasswordVisibility] = useState(true);

  const changePasswordViewState = () => {
    setIsPasswordVisibility(!isPasswordVisibility);
  };

  const PassWordViewState = () => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => changePasswordViewState()}
    >
      {isPasswordVisibility ? (
        <Icon name="eye-slash" type="font-awesome" style={{ marginLeft: 10 }} />
      ) : (
        <Icon name="eye" type="font-awesome" style={{ marginLeft: 10 }} />
      )}
    </TouchableOpacity>
  );
    return (


        <ScrollView style ={{flex:1,backgroundColor:'#ffffff'}}
        showsVerticalScrollIndicator={false}>
            
            <ImageBackground
             source = {require('../../assets/image.png')}
                 style={{height:Dimensions.get('window').height / 1.5,}}>

            </ImageBackground>

           


            {/* bottom view */}
            <View style={styles.bottomview}>
                <View style = {{padding:40}}>
              {/* FORM */}

              <View style={styles.text}>
                {/* <Text>M</Text> */}
            </View>
            <View>
                <Text>PLAN YOUR TRIP WITH US</Text>
            </View>
             
        
          </View>

          {/* button */}

          
          <View style={{
              height:80,
              justifyContent:'center',
              alignItems:'center',
              marginTop:60,
          }}>
              

<Button
                    onPress={() => navigation.navigate('signin')}
                      title="Get Started"
                      containerStyle={{
                        marginTop: 10,
                        borderRadius: 15,
                        width:250,
                      }}
                      buttonStyle={{
                        backgroundColor: '#f5eade'
                      }}
                      titleStyle={{
                        color:'black'
                      }}
                    
                    />

          </View>
                
              </View>

           

        </ScrollView>

    )
}
export default getstarted

const styles = StyleSheet.create({
bottomview:{flex:1.5,
backgroundColor:'white',
bottom:50,
borderTopStartRadius:40,
borderTopEndRadius:60,

},
signin:{
alignItems:'center',
backgroundColor:'#f5eade',
width:100,
justifyContent:'center',
fontSize:30,

},
text:{
    fontSize:100,
}

})