import React, {  Component } from 'react';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import { Header, Left, Body, Right, Button, Icon, CardItem, Title, Card, Text } from 'native-base';
import { View, StyleSheet , ListView, TouchableOpacity, Alert,   Image, Dimensions, ScrollView} from 'react-native';
import CategoryListItem from './CategoryListItem';
import Parse from 'parse/react-native';
var ds;
const {width, height} = Dimensions.get('window');
export default class Category extends   Component {

   constructor(props) {
    super(props);

     this.state = {
       dataSource: [],
       show: false
       }
}
    static navigationOptions = ({ navigation, screenProps }) => ({
    drawerLabel: "Category",
    header: null,
  });
  render() {
 return (

   <View style={styles.container} >
  

     <Header>
     <Image
      style={{ width: width , position: "absolute"}}
       source= {require('./images/bg-header.png') } />
          <Left>
           <TouchableOpacity  onPress={() =>  this.props.navigation.goBack()} >
           <Image  source={require('./images/back.png')} style={{  height: 24 , width: 24 }}   />
          </TouchableOpacity>
          </Left>
           <Body>
            <Title>الأقسام </Title>
          </Body>

          <Right>
         <TouchableOpacity onPress={() => this.props.navigation.navigate("DrawerOpen")}>
          <Image  source={require('./images/menu.png') } style={{  height: 24 , width: 24 }} />
        </TouchableOpacity>
          </Right>

        </Header>


     <ScrollView style={{flex: 1}}>
           {this.state.show && <ListView 
              dataSource={this.state.dataSource}
              renderRow={ this._renderItem.bind(this)  }
                enableEmptySections={true}
                 />}
              {!this.state.show &&   <Bubbles size={10} color="#FFF"  /> }

 </ScrollView>
</View>
)
}
_renderItem  = (item) =>  {
  return (
    <CategoryListItem    item={item} navigation= {this.props.navigation}   />
  );
}
listenForTasks(  ) {
 
Parse.initialize("FA55638B3F62A6FB2C6A76264D438");
Parse.serverURL = 'https://test.parse-server.karizma1.com/parse';
var GameScore = Parse.Object.extend("Category");
var gameScore = new GameScore();
var tasks = [];
var query = new Parse.Query(gameScore);
  query.find({
  success: (results) => {
  for (var i = 0; i < results.length; i++) {
  tasks[i] = [results[i].get("name"),results[i].get("picture") , results[i].get("nbrComment") , results[i].get("likes")];

}
 //Alert.alert('', tasks[0]);
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


}



const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor:'#eeecf6'
},
viewText:{
 flex: 1,
 alignItems: 'center',
 justifyContent: 'center'
},
txtSyle: {
color: 'white',
fontSize: 45,
textAlign: 'center',
fontStyle: 'normal'
},
btn: {
width: width-20,
height: 150,
margin: 10
},
img: {
  flex: 1,
}
});
