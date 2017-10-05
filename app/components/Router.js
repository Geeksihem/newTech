import { StackNavigator, DrawerNavigator } from "react-navigation";
 
import  {Text , ScrollView} from 'react-native';
 import React, { Component } from 'react';
// that i hve imported here 
import DrawerMenu from "./DrawerMenu";
import Category from "./Category";
import StarterPage from "./StarterPage";
import Login from "./Login";
import Main from './Main';
import Parse from 'parse/react-native';
import HomePage from "./HomePage";
import PostDetails from "./PostDetails";
import Content from "./Content";
import SplachScreen from './SplachScreen'; 
 import Search from './Search'; 
import {Image, View} from "react-native"
import { Header, Left, Body, Right, Button, Icon, Title , List, ListItem } from 'native-base';
import  Hashtag from './Hashtag';
import PostListItem from './PostListItem';
import Cat from './Cat'; 
 
const MainScreenNavigator = StackNavigator({
   
  StarterPage: {screen: StarterPage },
  Login : {screen: Login  },
  HomePage:  {screen: HomePage },
  Cat : {screen: Cat },
  PostListItem : {screen : PostListItem},
  PostDetails: {screen: PostDetails} ,
  Category: {screen: Category },
  Content:{screen:Content},
  Search: {screen: Search}, 
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
  
}
);
 
 
    
 
export default Drawer  ;
