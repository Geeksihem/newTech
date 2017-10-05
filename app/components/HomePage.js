 import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View,Alert, ListView,  Dimensions ,   ScrollView} from "react-native";
import Content from './Content';
import Cat from './Cat';
import {NavigationActions} from 'react-navigation';
import UserAvatar from 'react-native-user-avatar'; 
import PostListItem from './PostListItem';
import Share, {ShareSheet } from 'react-native-share';
//import { StackNavigator, DrawerNavigator } from "react-navigation";
import Parse from 'parse/react-native';
import { Container, Header, Left, Body, Right, Button, Icon, List, ListItem,  Tab, TabHeading, Tabs, Thumbnail,  CardItem, Title, Card  } from 'native-base';
 const {width, height} = Dimensions.get('window');
 /*const AppNavigator = new StackNavigator({
  Category: {screen: Category},
   Content: {screen: Content},
});*/
 export default class HomePage extends    Component{
    constructor(props) {
    super(props);
    console.log("Props",props);
    this.state = {
     catName:'name',
     dataSource: [],
     show: false, 
     aux : 'ffff',
     result : ''
    }
    }
   static navigationOptions = ({ navigation, screenProps }) => ({
   drawerLabel: "HomePage",
     header:null ,

  }); 
 

 render() {
   
 return (


  <View style={{flex: 1  , backgroundColor:'#eeecf6' }}>

  <Header>
  <Image
      style={{ width: width , position: "absolute"}}
       source= {require('./images/bg-header.png') } />
          <Left>
           <TouchableOpacity onPress= { ()=> {this.props.navigation.navigate( 'Search', { isStatusBarHidden: false ,   }  )} } >
           <Image  source={require('./images/search.png')} style={{  height: 24 , width: 24 }}   />
          </TouchableOpacity>
          </Left>
          <Body style= {{alignItems: 'center'}}> 
         <Image  source={require('./images/logo_header.png')}   style={{   height: 24 , width:60}}   />
          </Body>
          <Right>
         <TouchableOpacity onPress={() => {this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'DrawerOpen',params: {'usrinfo': typeof this.props.navigation.state.params.loggedUser !== "undefined" ? this.props.navigation.state.params.loggedUser : "Guest"}}))}}>
          <Image  source={require('./images/menu.png')} style={{  height: 24 , width: 24 }} />
        </TouchableOpacity>
          </Right>

        </Header>
      <Tabs  initialPage={2} tabBarUnderlineStyle ={{backgroundColor : 'transparent'}}>
         <Tab heading="ﺗﻄﺒﻴﻘﺎﺕ" textStyle={{ color:'#0d5be9'}} activeTabStyle= {{backgroundColor : '#c9ddff'}}  tabStyle= {{backgroundColor : '#c9ddff'}}  activeTextStyle={{color: 'red', fontWeight: 'normal'}}>
       
     
         </Tab>
         <Tab heading="ﺷﺮﻭﺣﺎﺕ"  textStyle={{ color:'#0d5be9'}} activeTabStyle= {{backgroundColor : '#c9ddff'}} tabStyle= {{backgroundColor : '#c9ddff'}}  activeTextStyle={{color: 'red', fontWeight: 'normal'}}>
        
         
       </Tab>
      <Tab heading= "اﻟﺮﺋﻴﺴﻴﺔ" textStyle={{ color:'#0d5be9'}} activeTabStyle= {{backgroundColor : '#c9ddff'}}  tabStyle= {{backgroundColor : '#c9ddff'}}  activeTextStyle={{color: 'red', fontWeight: 'normal'}}>
      <View style={{  borderBottomWidth: 2,   borderBottomColor: 'red', width: width, marginTop:0  }} />

     <Cat navigation={this.props.navigation} loggedUser= {this.loggedUser.bind(this)}/>
      </Tab>
       </Tabs>

</View>
)}
  componentDidMount() {
   {console.log("params ",  this.props.navigation.state.params.loggedUser );  } 

 if(this.props.navigation.state.routeName  == 'DrawerOpen') 
 {console.log("params ",  this.props.navigation.state.params.test   );  } 
}

 showResult(result){
  this.setState({
    result: result
  })
 }
share(){
Share.open(options).catch((err) => { err && console.log(err); })}
 loggedUser(){
  if  (typeof this.props.navigation.state.params.loggedUser !== "undefined" )  
   {return (  this.props.navigation.state.params.loggedUser  );} 

  else {return (""); } 
 }
};
const styles = StyleSheet.create({
 tab: {
  color:'white'
 },
  
});


HomePage.defaultProps = {};

HomePage.propTypes = {};
