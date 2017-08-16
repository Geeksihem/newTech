import { StackNavigator, DrawerNavigator } from "react-navigation";
 
import  {Text , ScrollView} from 'react-native';
 import React, { Component } from 'react';

import DrawerMenu from "./DrawerMenu";
import Category from "./Category";
import Login from "./Login";
import Login1 from "./Login1";
import Main from './Main';
import Parse from 'parse/react-native';
import HomePage from "./HomePage";
import PostDetails from "./PostDetails";
import Content from "./Content";
import SplachScreen from './SplachScreen';
import {Image, View} from "react-native"
import { Header, Left, Body, Right, Button, Icon, Title , List, ListItem } from 'native-base';
import  Hashtag from './Hashtag';
import PostListItem from './PostListItem';
import Cat from './Cat'; 


 const ImageHeader = props => (
  <View style={{ backgroundColor: '#eee' }}>
    <Image
      style={{ width: width , position: "absolute"}}
    resizeMode="stretch" source= {require('./images/bg-header.png') }
    />
    <Header   style={{ backgroundColor: 'transparent' }} />
    </View>
);



const MainScreenNavigator = StackNavigator({
  Login: {screen: Login },
  Login1: {screen: Login1 },
  HomePage:  {screen: HomePage },
  Cat : {screen: Cat },
  PostListItem : {screen : PostListItem},
  PostDetails: {screen: PostDetails} ,
  Category: {screen: Category },
  Content:{screen:Content},

  Hashtag: {screen: Hashtag} ,
},{headerMode:'none'});

const Drawer = DrawerNavigator(
  {
    Main: { screen: MainScreenNavigator }
  },
  {
    contentComponent: DrawerMenu ,
    drawerPosition: 'right',
    activeTintColor: '#b9cbea',
   header: (props) => <ImageHeader style= {{position: "absolute"}}/>,
}
);
 


  
 
export default Drawer  ;
