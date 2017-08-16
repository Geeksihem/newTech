import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  ListView,
  Image,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const DrawerItem = ({ navigation, image, name, screenName }) =>
  <TouchableOpacity
    style={styles.menuItem}
    onPress={() =>
      navigation.navigate(`${screenName}`, { isStatusBarHidden: false })}
 >
    <Image source ={{image}}   /> 
    <Text style={styles.menuItemText}>{name}</Text> 
   
  </TouchableOpacity>
const styles = StyleSheet.create({
  menuItem: {
    flexDirection:'row'
  },
  menuItemText: {
    fontSize:15,
    fontWeight:'300',
    margin:15,
  }
})

export default DrawerItem
