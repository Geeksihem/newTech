   import React, {Component} from 'react';
import   {ScrollView , TouchableOpacity, StyleSheet,  View,Dimensions, Image} from 'react-native';
import { Container, Header, Button, Icon, Title, Content, Card, Left, Right, CardItem, Thumbnail, List, ListItem, Text, Body } from 'native-base';


 
const {width, height} = Dimensions.get('window');
class CommentListItem extends Component {
  render() {
    return (
       <ScrollView style={{flex: 1}}>  

    <Text> {this.props.item[0]}  </Text> 

    </ScrollView>
 );
  }

 
}
const styless = StyleSheet.create({

});
module.exports = CommentListItem;
