import React from 'react';
import { View, Text,SafeAreaView,ScrollView,StatusBar,StyleSheet,TextInput,ImageBackground,FlatList,Dimensions ,TouchableOpacity} from 'react-native';
import { colors } from 'react-native-elements';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../consts/colors';
import places from '../consts/places';



const {width} = Dimensions.get('screen');
const Homepage = ({navigation}) => {

  const categoryIcons = [
    <Icons name="star" size={20} color={colors.white} />

  ];


  const ListCategories = () => {
    return (
      <View style={style.categoryContainer}>
        {categoryIcons.map((icon, index) => (
          <View key={index} style={style.iconContainer}>
            {icon}
          </View>
        ))}
      </View>
    );
  };

  const Card = ({place}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailsScreen', places)}>
        <ImageBackground style={style.cardImage} source={places.image}>
          <Text
            style={{
              color: colors.white,
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            {places.name}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icons name="place" size={20} color={colors.white} />
              <Text style={{marginLeft: 5, color: colors.white}}>
                {places.location}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icons name="star" size={20} color={colors.white} />
              <Text style={{marginLeft: 5, color: colors.white}}>5.0</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const RecommendedCard = ({places}) => {
    return (
      <ImageBackground style={style.rmCardImage} source={places.image}>
        <Text
          style={{
            color: colors.white,
            fontSize: 22,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          {places.name}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Icons name="place" size={22} color={colors.white} />
              <Text style={{color: colors.white, marginLeft: 5}}>
                {places.location}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icons name="star" size={22} color={colors.white} />
              <Text style={{color: colors.white, marginLeft: 5}}>5.0</Text>
            </View>
          </View>
          <Text style={{color: colors.white, fontSize: 13}}>
            {places.details}
          </Text>
        </View>
      </ImageBackground>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar translucent={false} backgroundColor={colors.brown} />
      <View style={style.header}>
        <Icons name="sort" size={28} color={colors.white} />
        <Icons name="notifications-none" size={28} color={colors.white} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: colors.primary,
            height: 120,
            paddingHorizontal: 20,
          }}>
          <View style={{flex: 1}}>
            <Text style={style.headerTitle}>Explore the</Text>
            <Text style={style.headerTitle}>beautiful world</Text>
            <View style={style.inputContainer}>
              <Icons name="search" size={28} />
              <TextInput
                placeholder="Search place"
                style={{color: colors.grey}}
              />
            </View>
          </View>
        </View>
        <ListCategories />
        <Text style={style.sectionTitle}>Places</Text>
        <View>
          <FlatList
            contentContainerStyle={{paddingLeft: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({item}) => <Card place={item} />}
          />
          <Text style={style.sectionTitle}>Recommended</Text>
          <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{paddingLeft: 20, paddingBottom: 20}}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={places}
            renderItem={({item}) => <RecommendedCard place={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );



























  // return (
  //  <SafeAreaView style ={{flex:1, backgroundColor: colors.brown}}>
  //    <StatusBar translucent= {false} backgroundColor= {colors.brown}/>
  //    <View style ={style.header} >
  //      <Icons name ="sort" size ={28} color={colors.brown}/>
  //      <Icons name ="notifications-none" size ={28} color={colors.brown}/>
  //    </View>
   
  //    <View>
  //      <Text style ={style.headertitle}>Explore the</Text>
  //      <Text style ={style.headertitle}>Beautiful World!!</Text>
  //    </View>
  //    <View style={style.inputcontainer}>
  //    <Icons name ="search" size ={20}  />
  //    <TextInput placeholder="search places" style= {{color:colors.grey0}}/>
     
  //    </View>
    
  //  </SafeAreaView>
  // )
}

export default Homepage
const style = StyleSheet.create({
  header:{
    paddingVertical:20,
    paddingHorizontal:20,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor: colors.white,
  },
  headertitle:{
    color:colors.black,
    fontWeight: 'bold',
    fontSize:23,
    paddingHorizontal:20
  },
  inputcontainer:{
    height:40,
    width:'80%',
    backgroundColor: colors.white,
    borderRadius:50,
    position:'absolute',
    top:160,
    flexDirection:'row',
    paddingHorizontal:20,

  }
})