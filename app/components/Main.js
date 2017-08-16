import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View,Alert,  Dimensions , ScrollView} from "react-native";
import Content from './Content';
import Category from './Category';

import PostListItem from './PostListItem';
import { StackNavigator, DrawerNavigator } from "react-navigation";
import Parse from 'parse/react-native';
import { Container, Header, Left, Body, Right, Button, Icon,  Tab, TabHeading, Tabs,  CardItem, Title, Card  } from 'native-base';
const {width, height} = Dimensions.get('window');
const AppNavigator = new StackNavigator({
 Category: {screen: Category},
  Content: {screen: Content},
});
export default class Main extends    Component{
   constructor(props) {
   super(props);
   this.state = {
    name:'name'
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
          <TouchableOpacity  >
          <Image  source={require('./images/search.png')} />
         </TouchableOpacity>
         </Left>
         <Body>
           <Title>ﻧﻴﻮﺗﻚ</Title>
         </Body>
         <Right>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("DrawerOpen")}>
         <Image  source={require('./images/menu.png')} />
       </TouchableOpacity>
         </Right>

       </Header>


     <Tabs  initialPage={2} tabBarUnderlineStyle ={{backgroundColor : 'transparent'}}>
        <Tab heading="ﺗﻄﺒﻴﻘﺎﺕ" textStyle={{ color:'#0d5be9'}} activeTabStyle= {{backgroundColor : '#c9ddff'}}  tabStyle= {{backgroundColor : '#c9ddff'}}  activeTextStyle={{color: 'red', fontWeight: 'normal'}}>
       <Content/>

        </Tab>
        <Tab heading="ﺷﺮﻭﺣﺎﺕ"  textStyle={{ color:'#0d5be9'}} activeTabStyle= {{backgroundColor : '#c9ddff'}} tabStyle= {{backgroundColor : '#c9ddff'}}  activeTextStyle={{color: 'red', fontWeight: 'normal'}}>
         <Button onPress={this.connecParse.bind(this)}>
         <Text> Here </Text>
         </Button>
         <Text>
           {this.state.name}
         </Text>

      </Tab>
     <Tab heading= "اﻟﺮﺋﻴﺴﻴﺔ" textStyle={{ color:'#0d5be9'}} activeTabStyle= {{backgroundColor : '#c9ddff'}}  tabStyle= {{backgroundColor : '#c9ddff'}}  activeTextStyle={{color: 'red', fontWeight: 'normal'}}>
     <ScrollView style={{flex: 1}}>
           {this.state.show && <ListView
              dataSource={this.state.dataSource}
              renderRow={ this._renderItem.bind(this)  }
                enableEmptySections={true}
                 />}

      </ScrollView>

         </Tab>
      </Tabs>

</View>


)}


_renderItem  = (item) =>  {
  return (
    <PostListItem    item={item}  />
  );
}
listenForTasks(  ) {
//console.log("Function","Started");

Parse.initialize("FA55638B3F62A6FB2C6A76264D438");
Parse.serverURL = 'https://test.parse-server.karizma1.com/parse';
var GameScore = Parse.Object.extend("Post");
var gameScore = new GameScore();
var tasks = [];
 var query = new Parse.Query(gameScore);
  query.find({
  success: (results) => {
  for (var i = 0; i < results.length; i++) {
  tasks[i] = [results[i].get("pictureURL"),results[i].get("title"), results[i].get("content") ];
}
 var xds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
 this.setState({
  dataSource: xds.cloneWithRows(tasks),
  show:true
 })
  },
  error: function(error) {

 },
})
 }
 componentDidMount() {
this.listenForTasks();
}


};
const styles = StyleSheet.create({
tab: {
 color:'white'
},
});
