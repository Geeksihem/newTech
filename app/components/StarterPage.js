 import React, {  Component } from 'react';
import { Header, Left, Body, Right, Button, Icon,  List, ListItem,  CardItem, Title, Card,Thumbnail, Text } from 'native-base';
 import { View, StyleSheet , TouchableOpacity,   Image, Dimensions, ScrollView, Alert} from 'react-native';
import Parse from 'parse/react-native';
import Login from './Login'; 
import HomePage from './HomePage'; 
const arr =[];
const {width, height} = Dimensions.get('window');
  export default class  StarterPage     extends   Component {
    constructor(props) {
      super(props);
   
   this.state = {
    goToLogin : true ,
   }
    
     
    } 

    static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: "Login", 
     header: null , 
  });
  render() {
 return (
   
   <View style={styles.container} >
     <ScrollView>
  <Image source= { require('./images/bg-home.png')} style= {{width: width, height: height }} >
    <View style= {{ alignItems:'center'}}> 
    <Image source= { require('./images/logo-home.png')} style= {{width:  260 , height: 70 , marginTop : width-180 }} />
    </View>
    <View style= {{ marginTop :  150, marginLeft: width-200  }}> 
 
    <Button rounded style= {{ backgroundColor:'#0000ff'  }} onPress =    { () => { this.logging() } }  >
     <Text>  اﻟﺪﺧﻮﻝ  </Text>
     
    </Button>
  <Button rounded style= {{ backgroundColor:'#0000ff' , marginTop: 10 }} >
            <Text>اﻟﺘﺴﺠﻴﻞ</Text>
    </Button> 
      <TouchableOpacity style= {{ backgroundColor:'transparent' , marginTop: 10 , marginRight : 137 }}  onPress = { () =>  {this.props.navigation.navigate( 'HomePage', { isStatusBarHidden: false , loggedUser:'none'  }  )} }  >
            <Text style= {{color: 'white'}} >ﺗﺨﻄﻰ</Text>
    </TouchableOpacity> 
  
 
    </View> 
  </Image>   
  </ScrollView>
    </View>

 
)}
 
logging(){
 

   this.props.navigation.navigate('Login'); 

}
}
 
const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor:'#eeecf6'
},
sticker: {
    width: 100,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 5,
    borderColor: '#e0e0e0',
    borderTopColor: '#21AAE1',
    borderBottomColor: 'transparent',
    borderRadius: 50,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center', 
}

 
});
