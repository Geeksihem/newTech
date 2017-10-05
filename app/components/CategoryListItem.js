 import React, {Component} from 'react';
import   {ScrollView , TouchableOpacity, StyleSheet,Text, View,Dimensions, Image} from 'react-native';
 const onPress = () => {
      Alert.alert('Sélectionner');
}
const {width, height} = Dimensions.get('window');
class CategoryListItem extends Component {
  

  render() {
    return (
       <ScrollView style={{flex: 1}}>  
   <TouchableOpacity style={{width: width-20,height: 150,  alignItems: 'center',
 justifyContent: 'center' , margin: 10}}   onPress = { () =>  {this.props.navigation.navigate( 'Cat', { isStatusBarHidden: false , id:  this.props.item[0]  }  )} }>
       <Image source={{uri: this.props.item[1]   }}  style={{position: "absolute", width: width-20, height: 150}}  resizeMode="stretch" />  
      <Text style={{color: 'white',   fontSize: 45,     textAlign: 'center',  fontStyle: 'normal'}}> {this.props.item[0]}     </Text>
   </TouchableOpacity>
    </ScrollView>
 );
  }

  componentDidMount() {

 console.log("category name", this.props.item[0] );   
}
}
const styless = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor:'#eeecf6'
},
avatar: {
   backgroundColor: 'rgba(25, 173, 162, 0.55)',
    borderRadius: 20,
     width: 40,
      height: 40,
      alignItems: 'center',
       justifyContent: 'center',
     },
     letter: {
       color: "#ffffff",
        textAlign: "center",
         fontSize: 18,
          fontWeight : 'bold'
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
module.exports = CategoryListItem;
