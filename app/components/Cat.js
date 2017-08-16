
 import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View,Alert, ListView,  Dimensions , ScrollView} from "react-native";
import { Container, Header, Button, Icon, Title,   Card, Left, Right, CardItem,  Body } from 'native-base';
import Display from 'react-native-display';
import Content from './Content';
import Category from './Category';
import PostListItem from './PostListItem';
//import { StackNavigator, DrawerNavigator } from "react-navigation";
import Parse from 'parse/react-native';
const {width, height} = Dimensions.get('window');

export default class  Cat  extends Component{
	 static navigationOptions = ({ navigation, screenProps }) => ({
   drawerLabel: "Cat",
   header:null ,
   enableHeader : false , 
   enableHeaderTitle : false 
 });

	constructor(props) {
    super(props);
    console.log("Props",props);
    this.state = {
     categ :  '' ,
     dataSource: [],
     show: false, 
     aux :  this.props.navigation.state.params ,
     auxNote: '',
    
    }
    }

	render (){
		const { params } = this.props.navigation.state;
		return(
 <View style={{ flex:1, backgroundColor:'white'}}>
<Display enable={this.state.enableHeader}>
 <Header>
  <Image
      style={{ width: width , position: "absolute"}}
       source= {require('./images/bg-header.png') } />
          <Left>
           <TouchableOpacity onPress={() =>  this.props.navigation.goBack()}  >
           <Image  source={require('./images/back.png')} style={{  height: 24 , width: 24 }}   />
          </TouchableOpacity>
          </Left>
          <Body   > 
         <Title> {this.state.categ}</Title>
          </Body>
          <Right>
         <TouchableOpacity onPress={() =>   this.props.navigation.navigate('DrawerOpen' ,{navigation : this.props.navigation})} >
          <Image  source={require('./images/menu.png') } style={{  height: 24 , width: 24 }} />
        </TouchableOpacity>
          </Right>

        </Header>

   
    </Display>

           <View style={{ flex: 1 ,alignItems : 'center', backgroundColor: '#eeecf6'}}>
      <ScrollView style={{flex: 1}}>
            {this.state.show && <ListView
               dataSource={this.state.dataSource}
               renderRow={ this._renderItem.bind(this)  }
               enableEmptySections={true} />}
      </ScrollView>

  </View>
</View>
    )
	}

	_renderItem  = (item  ) =>  {
  return (
  
    <PostListItem    item={item} navigation={this.props.navigation}    />
  );
}
 
 componentDidMount() {

  Parse.initialize("FA55638B3F62A6FB2C6A76264D438");
Parse.serverURL = 'https://test.parse-server.karizma1.com/parse';
var GameScore = Parse.Object.extend("Post");
var gameScore = new GameScore();
var tasks = [];
 var query = new Parse.Query(gameScore);
   
 query.include('category')
 query.descending("createdAt");  

 	if(this.props.navigation.state.routeName  != 'HomePage')
	{
      
     
    	 var  note =  this.props.navigation.state.params.note; 
    	 if (note == 'note')
    	 {
    	 	 query.descending("note"); 
    	 }
  
     this.setState({
     	auxNote : this.props.navigation.state.params.note
     })
   
    if(this.props.navigation.state.params.id != '')
    	{this.setState({
    		enableHeaderTitle: true 
    	})}
   this.setState ({
   	 enableHeader: true, 
   	 categ:  this.props.navigation.state.params.id

   }) 
 
   
	}

 
 
  query.find({
  success: (results) => {
  	console.log("rouuuuuute", this.props.navigation.state.routeName ); 
 

 var xds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
 this.setState({
  dataSource: xds.cloneWithRows(results),
  show:true
 })
 
  },
  error: function(error) {

 },
})


}




}
