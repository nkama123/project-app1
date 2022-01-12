import React, { useState } from "react";
import { Text,View,ScrollView, ImageBackground,Dimensions,StyleSheet,Image,StatusBar,TouchableOpacity} from 'react-native';
import { Icon, Input, Button} from "react-native-elements";


const signin = ({navigation}) => {
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
                 style={{height:Dimensions.get('window').height / 2.5,}}>

            </ImageBackground>

            {/* bottom view */}
            <View style={styles.bottomview}>
                <View style = {{padding:40}}>
              {/* FORM */}
              <View style={{marginTop:50}}>
              <View style={styles.inputContainer}>
            <Input
              placeholder="Email"
              style={styles.input}
              leftIcon={<Icon name="envelope-o" type="font-awesome" />}
            />
              </View>

              <View style={styles.inputContainer}>
            <Input
              placeholder="Password"
              style={styles.input}
              leftIcon={<Icon name="lock" type="font-awesome" />}
              rightIcon={<PassWordViewState />}
              secureTextEntry={isPasswordVisibility}
            />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("forgotpassword")} activeOpacity={0.7} style={{ padding: 10 }}>
            <Text style={{ textAlign: "right" ,fontStyle:'italic'}}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* button */}
          <View style={{
              height:100,
              justifyContent:'center',
              alignItems:'center',
          }}>

<Button
                    onPress={() => navigation.navigate('Homepage')}
                      title="Sign In"
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

          <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            height:100,
          }}
        >
          <Text style={{ fontWeight: "500"}}>
            Don`t have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("signup")}>
            <Text style={{ fontWeight: "900"}}>Sign up</Text>
          </TouchableOpacity>
        </View>

                
              </View>


            </View>

            </View>

        </ScrollView>

    )
}
export default signin

const styles = StyleSheet.create({
bottomview:{flex:1.5,
backgroundColor:'white',
bottom:50,
borderTopStartRadius:60,
borderTopEndRadius:60,

},
signin:{
alignItems:'center',
backgroundColor:'#f5eade',
width:100,
justifyContent:'center',
fontSize:30,

}

})




  

