
import React, { Component } from "react"
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView, 
  Image, 
  FlatList,
  Dimensions, 
   Switch, 
  SearchBar
} from "react-native"
import { StackNavigator, DrawerNavigator } from "react-navigation";
import DrawerItem from './DrawerItemComponent'; 
  import { Header, Left, Body, Right, Button, Icon, Title , List, ListItem } from 'native-base';

const {width, height} = Dimensions.get('window');
 
class DrawerMenu extends Component {
     
  constructor(props) {
    super(props);
  
    this.state = {
       switchValue: true ,
        
    };
  }
     toggleSwitch = (value) =>  this.setState({ switchValue: value })
   componentDidMount(){
 
  }


  render() {
    return (
      <View style={styles.container  }>
      <ScrollView>
      <View style = {{ height: 100 }}> 
         <Image source={ require('./images/category/bg-logo-menu.png')} style= {{   height : 100 }}>

   <Image source={ require('./images/logo-home.png')} style= {{ width: 150, height : 40  , marginTop:  30,marginLeft: width-230}} />
   </Image>
   </View> 
         <List >
         <View style= {{backgroundColor: '#b9cbea', }}>
            <ListItem  style= {{backgroundColor: '#b9cbea', }} icon onPress={() => this.props.navigation.navigate( 'HomePage', { isStatusBarHidden: false , })}  >
              <Body >
                <Text style= {styles.txt1}> ﺭﺎﺒﺧﻷا ﺮﺧﺃ</Text>
              </Body>
               <Right>
           <Image source={ require('./images/category/news.png')}  style= {styles.img} />
               </Right>
            </ListItem>  
      </View>
           <View style= {{backgroundColor: '#b9cbea', }}>
            <ListItem  style= {{backgroundColor: '#b9cbea', }} icon onPress={() => this.props.navigation.navigate( 'Cat', { isStatusBarHidden: false  ,  note:'note' })}  >
              <Body >
                <Text  style= {styles.txt1}>  ﺓﺪﻫﺎﺸﻣ ﺮﺜﻛﻷا ﺭﺎﺒﺧﻷا </Text>
              </Body>
               <Right>
           <Image source={ require('./images/category/news.png')}  style= {styles.img} />
               </Right>
            </ListItem>  
      </View>
                  <View style= {{backgroundColor: '#b9cbea', }}>

         <ListItem  icon onPress={() => this.props.navigation.navigate( 'Hashtag', { isStatusBarHidden: false })}  >
              <Body >
                <Text style= {styles.txt1} > ﻕﺎﺘﺷﺎﻬﻟا</Text>
              </Body>
               <Right>
           <Image source={ require('./images/category/news.png')}  style= {styles.img} />
               </Right>
            </ListItem>
              </View>
              
                  <View style= {{backgroundColor: '#b9cbea', }}>

              <ListItem  icon onPress={() => this.props.navigation.navigate( 'HomePage', { isStatusBarHidden: false })}  >
              <Body >
                <Text style= {styles.txt1} >  ﺔﻠﻀﻔﻤﻟا ﺭﺎﺒﺧﻷا</Text>
              </Body>
               <Right>
           <Image source={ require('./images/category/news.png')}  style= {styles.img} />
               </Right>
            </ListItem>
             </View>
             <View style= {{backgroundColor: '#b9cbea', }}>
            <ListItem icon onPress={() => this.props.navigation.navigate( 'Category', { isStatusBarHidden: false })} >
              <Body  >
                <Text style= {styles.txt1}>ﺔﻴﻨﻘﺘﻟا ﻡﺎﺴﻗﻷ</Text>
              </Body>
              <Right>
              <Image source={ require('./images/category/category.png')}  style= {styles.img}  />
              </Right> 
           </ListItem>
                 </View>
            <ListItem icon >
              <Body>
                <Text >ﺕﺎﻫﻮﻳﺪﻴﻔﻟا</Text>
              </Body>
              <Right>
        <Image source={ require('./images/category/video.png')} style= {styles.img}  />
              </Right>
            </ListItem>
           
             <ListItem icon >
              <Body>
                <Text   >ﺔﺑاﻮﺒﻟا ﻦﻋ</Text>
              </Body>
              <Right>
        <Image source={ require('./images/category/about.png')}  style= {styles.img}/>
              </Right>
            </ListItem>

             <ListItem icon >
              <Body>
                <Text   > ﺎﻨﺑ ﻞﺼﺗﺇ</Text>
              </Body>
              <Right>
        <Image source={ require('./images/category/contact.png')} style= {styles.img} />
              </Right>
            </ListItem>

             <ListItem icon >
              <Body>
                <Text   >ﺎﻨﻛﺭﺎﺷ  </Text>
              </Body>
              <Right>
        <Image source={ require('./images/category/share-menu.png')} style= {styles.img} />
              </Right>
            </ListItem>

             <ListItem icon >
           
            <Left>
  <Switch  thumbTintColor = {"#6fc58d"} onTintColor = {"#6fc58d"}   onValueChange = {this.toggleSwitch} value = {this.state.switchValue}/>
              </Left> 
              <Body>
             
       
        <Text >ﺕﺎﻬﻴﺒﻨﺗ</Text>
              </Body>
              <Right>
        <Image source={ require('./images/category/notification.png')} style= {styles.img} />
              </Right>
               
            </ListItem>

             <ListItem icon >
              <Body>
                <Text >ﻖﻴﺒﻄﺘﻟا ﻢﻴﻗ</Text>
              </Body>
              <Right>
        <Image source={ require('./images/category/star.png')} style= {styles.img}  />
              </Right>
            </ListItem>

   </List>
   </ScrollView>
   <View  style= {{ backgroundColor: '#7992b9' ,   flexDirection: 'row', width: width , height: 40}} >
           <Image source={ require('./images/instagram-logo.png')} style={{ width: 25,  height: 25 , marginRight :10 , marginTop : 10,  marginLeft : (width-265)/2 ,}}/>
           <Image source={ require('./images/linkedin-logo-button.png')}  style={{  width: 25,  height: 24.5, marginLeft: 10, marginRight :10 , marginTop : 10 }} />       
           <Image source={ require('./images/google-plus-logo-button.png')} style={{  width: 25,  height: 25 , marginLeft: 10, marginRight :10 , marginTop : 10   }} /> 
           <Image source={ require('./images/twitter-logo-button.png')} style={{  width: 25,  height: 24.5 , marginLeft: 10, marginRight :10 , marginTop : 10  }}/> 
           <Image source={ require('./images/facebook-logo-button.png')} style={{  width: 25,  height: 25 , marginLeft: 10 ,   marginTop : 10  }}  /> 
       </View> 

     </View>     
  )}; 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(255,255,255,0.43)',

  },
  menuItem: {
    flexDirection:'row'
  },
  menuItemText: {
    fontSize:15,
    fontWeight:'300',
    margin:15,
  }, 
  img :{
     width: 25, 
     height:  25.5,
     marginLeft: 10
  },
  txt2: {
     color: '#37496c'
  }, 
  txt1: {
     color: "#0d5be9" 
  }
})


DrawerMenu.defaultProps = {};

DrawerMenu.propTypes = {};

export default DrawerMenu;