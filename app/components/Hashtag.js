import React, {  Component } from 'react';
import { Header, Left, Body, Right, Button, Icon,  List, ListItem,  CardItem, Title, Card, Text } from 'native-base';
 import { View, StyleSheet , TouchableOpacity,   Image, Dimensions, ScrollView, Alert} from 'react-native';
import Parse from 'parse/react-native';
const arr =[];
const {width, height} = Dimensions.get('window');
  export default class Hashtag  extends   Component {
    constructor(props) {
      super(props);
      this.state = {
      nom: 'name',
      tabTags:[], 
        
       };
     
    } 

    static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: "Hashtag", 
     header: null , 
  });
  render() {
     var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
   
 return (
   
   <View style={styles.container} >
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
         <TouchableOpacity onPress={() => this.props.navigation.navigate("DrawerOpen", {navig  : this.props.navigation} )}>
          <Image  source={require('./images/menu.png') } style={{  height: 24 , width: 24 }} />
        </TouchableOpacity>
          </Right>

        </Header>

       <View style= {{backgroundColor: '#eeecf6'  }} >
      
       <List dataArray={this.lapsList()}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>  }>
              </List>

    </View>

</View>
)}
lapsList() {

    return this.state.tabTags.map((element, index  ) => {
      return (
          
        <Text   onPress = { () =>  {this.props.navigation.navigate( 'Cat', { isStatusBarHidden: false , tag : element.name    }  )} }>
             # {element.name } 
            </Text>
           
         
      )
    })

}

componentDidMount()  {
Parse.initialize("FA55638B3F62A6FB2C6A76264D438");
Parse.serverURL = 'https://test.parse-server.karizma1.com/parse';
var GameScore = Parse.Object.extend("Tag");
var gameScore = new GameScore();
var query = new Parse.Query(GameScore);
var aux= []; 
 query.find({
  success:  (results)  =>   {
    var a = this.state.nom
    console.log("ress", results )
    for(var i=0 ; i< results.length ; i++) { 
    aux.push({
      name: results[i].get("name"), 
      nbr : results[i].get("nbrPosts")
    }) 
    console.log("taag", aux[i]); 
    
   }
  
   this.setState({
    tabTags: aux

   })
   

  },
  error: function(error) {
  
 }, 
})
 
}
 }
const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor:'#eeecf6'
},
 
});
