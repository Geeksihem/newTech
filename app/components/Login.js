 import React, {  Component } from 'react';
import { Header, Left, Body, Right, Button, Icon,  List, ListItem,  CardItem, Title, Card, Text } from 'native-base';
 import { View, StyleSheet , TouchableOpacity,   Image, Dimensions, ScrollView, Alert} from 'react-native';
import Parse from 'parse/react-native';
const arr =[];
const {width, height} = Dimensions.get('window');
  export default class  Login     extends   Component {
    constructor(props) {
      super(props);
      this.state = {
       };
     
    } 

    static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: "Login", 
     header: null , 
  });
  render() {
 return (
   
   <View style={styles.container} >
  <Image source= { require('./images/bg-home.png')} style= {{width: width, height: height }} >
 
    <Image source= { require('./images/logo-home.png')} style= {{width: width - 230  , height: 25 , marginTop : width-190, marginLeft : width -200}} />
    <View style= {{ marginTop :  150, marginLeft: width-200  }}> 
    <Button rounded style= {{ backgroundColor:'#0000ff'  }}  >
       <Text>الدخول</Text>
    </Button>
  <Button rounded style= {{ backgroundColor:'#0000ff' , marginTop: 10 }} >
            <Text>التسجيل</Text>
    </Button> 
      <TouchableOpacity style= {{ backgroundColor:'transparent' , marginTop: 10 , marginRight : 137 }}  onPress = { () =>  {this.props.navigation.navigate( 'Login1', { isStatusBarHidden: false ,   }  )} }  >
            <Text style= {{color: 'white'}} >تخطى</Text>
    </TouchableOpacity>  

    </View> 
  </Image>   

    </View>

 
)}
 

 
 }
const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor:'#eeecf6'
},
 
});
