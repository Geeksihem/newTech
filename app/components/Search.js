  import React, { Component } from 'react';
import Parse from 'parse/react-native'; 
import { View, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import {  Header, Item, Input, Icon, Button, Text , Tabs , Tab  } from 'native-base';
 
import Cat from './Cat'; 
 const {width, height} = Dimensions.get('window');
 

export default class Search extends Component {
 constructor(props) {
   super(props);
 
   this.state = {
    keyWrd : '',
    enableBody: true, 
    
   };
 }
 
render() {
  return (
 <View style={{flex: 1 }}> 
<ScrollView>

 <Header searchBar rounded>
             <Item style= {{backgroundColor: 'transparent' , flex : 1}}>
          <TouchableOpacity  onPress={() =>    this.props.navigation.navigate ('HomePage') } >
           <Image  source={require('./images/back.png')} style={{  height: 24 , width: 24 }}   />
          </TouchableOpacity> 
          
          </Item> 
          <Item style= {{ flex: 3}}>
           
            <Input placeholder="Search"  style= {{textAlign : 'right'  }}    
               onChangeText={(keyWrd) => this.setState({keyWrd})}
                 value={this.state.keyWrd} />
             <TouchableOpacity onPress = { () =>  {this.props.navigation.navigate( 'Cat', { isStatusBarHidden: true  ,  keyWord :   this.state.keyWrd }  )}    }   >
             <Icon name="search" /> 
             </TouchableOpacity>
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
 
     
   
      
 
</ScrollView>
  </View> 

  )
  }
 }       