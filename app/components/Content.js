 import React, {  Component } from 'react'; 
import { View, StyleSheet ,ScrollView ,  Text,Dimensions, TouchableOpacity,  Image} from 'react-native';
import {   Card, CardItem,   Button, Icon, Left, Body, Right } from 'native-base';
 import PostDetails from './PostDetails'; 
import { StackNavigator, DrawerNavigator } from "react-navigation";
const {width, height} = Dimensions.get('window');

export default class Content  extends   Component{
 


 render() {

return (   
     <View style={{ flex: 1 ,alignItems : 'center', backgroundColor: '#eeecf6'}}>
     <View style={{  borderBottomWidth: 2,   borderBottomColor: 'red', width: width, marginTop:0  }} /> 

  <ScrollView style={{flex: 1}}>
        <Card style= {{  flex: 1  ,   width :  width-30, marginTop :10,}}>  
          <CardItem cardBody>
              <Image source= { require('./images/post-media/1.png') } style={{height: 200, width: null, flex: 1}} >
              <TouchableOpacity  onPress={() => this.props.navigation.navigate( 'PostDetails', { isStatusBarHidden: false })}    >
            <Image source={ require('./images/Share.png') } style={{marginTop: 8, marginLeft: 8,  }} />        
          </TouchableOpacity> 
          <Button style= {{marginTop:130 , height: 30}}> 
             <Text style={styles.cat}>category </Text>
          </Button>
           </Image>
           </CardItem>
          <CardItem style = {{backgroundColor: 'white'}}>
           <Body>
             <Text style= {styles.txt}>
              إستمتع بلاصوت  الطبيعية مع تطبيق 
             </Text>
             <View style={{  borderBottomWidth: 1,   borderBottomColor: '#839fcc', width: width-70 }} /> 
           </Body>
         </CardItem>
            <CardItem  style= {{flexDirection:'row'}}>
                 <Button transparent > 
                  <Text>2017.07.05 </Text>
                <Icon  name="time"style= {{ color:'#0d5be9'}} />
                 </Button>
              
                <Button transparent > 
                <Text >325</Text>
                <Icon  name="heart" style= {{ color:'#0d5be9'}} />
              </Button>
               <Button transparent > 
               <Text>325</Text>
                <Icon  name="chatbubbles"   style= {{ color:'#0d5be9'}}  />     
               </Button>
            </CardItem>
          </Card>

          

        </ScrollView>
 
          </View>
)}
};

const styles = StyleSheet.create({
txt:{
color: '#1a1a1a'  ,
 textAlign: 'right',
}, 
cat: {
  color:'white'
}
}); 

Content.defaultProps = {};
Content.propTypes = {};

