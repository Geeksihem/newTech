 import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  Dimensions,
  Button,
  Alert,
  TouchableOpacity
} from 'react-native';

import RNViewShot from "react-native-view-shot";

const { width, height } = Dimensions.get("window");
import Cat from './Cat'; 
import Parse from 'parse/react-native';
import HomePage from './HomePage'; 
const background = require("./images/bg-home.png");
const mark = require("./images/logo-home.png");
const lockIcon = require("./images/login1_lock.png");
const personIcon = require("./images/login1_person.png");

export default class Login1 extends Component {
   constructor(props) {
    super(props);
    this.state = { 
      userName : '' , 
      pw : '', 
      usr : null , 
    };
  }
   static navigationOptions = ({ navigation, screenProps }) => ({
   drawerLabel: "Login1",
     header:null ,

  }); 
 


  render() {
    return (
      <View style={styles.container}>
<ScrollView>
        <Image source={background} style={styles.background} resizeMode="cover">
          <View style={styles.markWrap}>
              
            <Image source={mark} style={styles.mark} resizeMode="contain"  />
              
          </View>
          <View style={styles.wrapper}>
            <View style={styles.inputWrap}>
               <TextInput 
              style={styles.input} 
                 onChangeText={(userName) => this.setState({userName})}
                 value={this.state.userName}
              />
              <View style={styles.iconWrap}>
                <Image source={personIcon} style={styles.icon}   />
              </View>
            </View>
            <View style={styles.inputWrap}>
              <TextInput 
                 
                style={styles.input} 
                secureTextEntry 
                 onChangeText={(pw) => this.setState({pw})}
                  value={this.state.pw}
              />

                <View style={styles.iconWrap}>
                <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
              </View>
            </View>
            <TouchableOpacity activeOpacity={.5}>
              <View>
                <Text style={styles.forgotPasswordText}>نسيت  كلمة المرور  ؟</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5}>
              <View style={styles.button}>
                <Text style={styles.buttonText}  onPress =  { () =>  this.logUser()  } > دخول  </Text>
              </View>
            </TouchableOpacity>
          </View>
          
        </Image>
        </ScrollView>
      </View>
    );
  }
     componentDidMount(){
 

}  
  logUser(){
  var name = this.state.userName ; 
  var pass  = this.state.pw; 
 Parse.initialize("FA55638B3F62A6FB2C6A76264D438");
 Parse.serverURL = 'https://test.parse-server.karizma1.com/parse';
 Parse.User.logIn( name,  pass, {
  success:  (user) =>  {
    // Do stuff after successful login.
  var currentUser = Parse.User.current();
if (currentUser) {
    // do stuff with the user
       this.setState({
        usr: currentUser
       })
  this.props.navigation.navigate ('HomePage' , {loggedUser : this.state.usr });   
console.log("logg", this.state.usr); 
} else {
    // show the signup or login page
} 
  },
  error: function(user, error) {
    // The login failed. Check error to see why.
  }
});

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30,
    alignItems: 'center'
  },
  mark: {
    width: 260,
    height: 70,
    flex: 1,

  },
  background: {
    width,
    height,
  },
  wrapper: {
    paddingVertical: 30,

  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  iconWrap: {
    paddingHorizontal: 7, 

  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10, 
    marginRight: 0,
    textAlign : 'right' ,
       
  },
  button: {
    backgroundColor: "#FF3366",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#D8D8D8"
  },
  signupLinkText: {
    color: "#FFF",
    marginLeft: 5,
  }
});