// and here the drawer menu ,  so i want to detect  here if there is user or a guest , 
// if  guest  for exple  , there is no logout - I get it .
import React, { Component } from "react"
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView, 
  Image, 
  Alert,
  FlatList,
  Dimensions, 
   Switch, 
  SearchBar
} from "react-native"; 
import Display from 'react-native-display'; 
import Parse from 'parse/react-native';
import { StackNavigator, DrawerNavigator } from "react-navigation";
import DrawerItem from './DrawerItemComponent'; 
  import { Header, Left, Body, Right, Button, Icon,Thumbnail,  Title , List, ListItem } from 'native-base';

const {width, height} = Dimensions.get('window');
 // i will explain to you , the architecture of my pages? 
 // the first page is starter page 

class DrawerMenu extends Component {
     
  constructor(props) {
    super(props);
  
    this.state = {
       switchValue: true ,
       usrinfo: '',
       usrname : 'Guest',
       usrimg: require('./images/logo-home.png')
    };
  }
     toggleSwitch = (value) =>  this.setState({ switchValue: value })
 


  render() {
    console.log('UserName/Image',this.state.usrname+"/"+this.state.usrimg);
    return (
      <View style={styles.container  }>
      <ScrollView>
      <View style = {{ height: 80 }}> 

         <Image source={ require('./images/category/bg-logo-menu.png')} style= {{   height : 80 }}>
            

           <Display> 
            <Image source={ this.state.usrimg } style= {{ width: 150, height : 40  , marginTop:  30,marginLeft: width-230}} />
          </Display>

           <View>
             <List>
            <ListItem avatar>
              
              <Body style= {{flexDirection: 'row' , padding : 30}}>
                <Text style= {{marginTop: 20}}> {this.state.usrname}</Text>
                <Thumbnail source={this.state.usrimg}  />
 
              </Body>
             
            </ListItem>
          </List> 
      </View>
   </Image>
   </View> 
         <List >
         <View style= {{backgroundColor: '#b9cbea', }}>
            <ListItem  style= {{backgroundColor: '#b9cbea', }} icon onPress={() => this.props.navigation.navigate( 'HomePage', { isStatusBarHidden: false , })}  >
              <Body >
                <Text style= {styles.txt1}> ﺃﺧﺮ اﻷﺧﺒﺎﺭ</Text>
              </Body>
               <Right>
           <Image source={ require('./images/category/news.png')}  style= {styles.img} />
               </Right>
            </ListItem>  
      </View>
           <View style= {{backgroundColor: '#b9cbea', }}>
            <ListItem  style= {{backgroundColor: '#b9cbea', }} icon onPress={() => this.props.navigation.navigate( 'Cat', { isStatusBarHidden: false , note: 'note'  })}  >
              <Body >
                <Text  style= {styles.txt1}>  اﻷﺧﺒﺎﺭ اﻷﻛﺜﺮ ﻣﺸﺎﻫﺪﺓ </Text>
              </Body>
               <Right>
           <Image source={ require('./images/category/news.png')}  style= {styles.img} />
               </Right>
            </ListItem>  
      </View>   
            <View style= {{backgroundColor: '#b9cbea', }}>

         <ListItem  icon onPress={() => this.props.navigation.navigate( 'Hashtag', { isStatusBarHidden: false })}  >
              <Body >
                <Text style= {styles.txt1} > اﻟﻬﺎﺷﺘﺎﻕ</Text>
              </Body>
               <Right>
           <Image source={ require('./images/category/news.png')}  style= {styles.img} />
               </Right>
            </ListItem>
              </View>
                 <Display enable= {this.state.enableuser}> 
                  <View style= {{backgroundColor: '#b9cbea', }}>

              <ListItem  icon onPress={() => this.props.navigation.navigate( 'Cat', { isStatusBarHidden: false , prefered : 'like' })}  >
              <Body >
                <Text style= {styles.txt1} >  اﻷﺧﺒﺎﺭ اﻟﻤﻔﻀﻠﺔ</Text>
              </Body>
               <Right>
           <Image source={ require('./images/category/news.png')}  style= {styles.img} />
               </Right>
            </ListItem>
             </View>
             </Display> 
             <View style= {{backgroundColor: '#b9cbea', }}>
            <ListItem icon onPress={() => this.props.navigation.navigate( 'Category', { isStatusBarHidden: false })} >
              <Body  >
                <Text style= {styles.txt1}>ﻷﻗﺴﺎﻡ اﻟﺘﻘﻨﻴﺔ</Text>
              </Body>
              <Right>
              <Image source={ require('./images/category/category.png')}  style= {styles.img}  />
              </Right> 
           </ListItem>
                 </View>
            <ListItem icon >
              <Body>
                <Text >اﻟﻔﻴﺪﻳﻮﻫﺎﺕ</Text>
              </Body>
              <Right>
        <Image source={ require('./images/category/video.png')} style= {styles.img}  />
              </Right>
            </ListItem>
           
             <ListItem icon >
              <Body>
                <Text   >ﻋﻦ اﻟﺒﻮاﺑﺔ</Text>
              </Body>
              <Right>
        <Image source={ require('./images/category/about.png')}  style= {styles.img}/>
              </Right>
            </ListItem>

             <ListItem icon >
              <Body>
                <Text   > ﺇﺗﺼﻞ ﺑﻨﺎ</Text>
              </Body>
              <Right>
        <Image source={ require('./images/category/contact.png')} style= {styles.img} />
              </Right>
            </ListItem>

             <ListItem icon >
              <Body>
                <Text   >ﺷﺎﺭﻛﻨﺎ  </Text>
              </Body>
              <Right>
        <Image source={ require('./images/category/share-menu.png')} style= {styles.img} />
              </Right>
            </ListItem>
<Display enable= {this.state.enableuser}> 
             <ListItem icon >
           
            <Left>
  <Switch  thumbTintColor = {"#6fc58d"} onTintColor = {"#6fc58d"}   onValueChange = {this.toggleSwitch} value = {this.state.switchValue}/>
              </Left> 
              <Body>
        <Text >ﺗﻨﺒﻴﻬﺎﺕ</Text>
              </Body>
              <Right>
        <Image source={ require('./images/category/notification.png')} style= {styles.img} />
              </Right>
               
            </ListItem>
      </Display> 
             <ListItem icon >
              <Body>
                <Text >ﻗﻴﻢ اﻟﺘﻄﺒﻴﻖ</Text>
              </Body>
              <Right>
        <Image source={ require('./images/category/star.png')} style= {styles.img}  />
              </Right>
            </ListItem>
    <ListItem icon   onPress={this.logOut.bind(this)}  >
              <Body>
                <Text > خروج   </Text>
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
// i think it s time , 23h , if u can 7atta tomorrow ? 
// No it's ok .. it's 1 am now at baghdad :D
// looool it s too laate , sooorryy 3attaltiikk ,  
// No it's ok .. it's really hard to think while your kids around you.
// so i always prefer to finsh my code alone
// hh ahaa , may god bless them :D 
// Thank you.
componentDidUpdate() {
 if (typeof this.props.navigation.state.params !== "undefined") {

    if (typeof this.props.navigation.state.params.usrinfo !== "undefined") {
     console.log("srInfo",this.props.navigation.state.params.usrinfo);
   }
 } else 
 console.log("No Data",this.props.navigation.state);
}
componentWillReceiveProps(props) {
  if (typeof props.navigation.state.params !== "undefined") {

    if (typeof props.navigation.state.params.usrinfo !== "undefined") {
     console.log("srInfo",props.navigation.state.params.usrinfo);
    if (props.navigation.state.params.usrinfo != "") {
       this.setState({
    enablelogo: false  , 
    enableuser: true,  
    usrname:props.navigation.state.params.usrinfo ,
    usrimg: { uri: 'https://test.parse-server.karizma1.com/parse/files/FA55638B3F62A6FB2C6A76264D438/41908f68d0ed65316ffed8e4b38aea8e_sami%40g.fr.png' }
    
     });
    } }
  }
 console.log("ReceiverPhase",props.navigation);// here it s unedefined 
}

   // it s unedefined here , if u put else , 
   // It must be defined since we passed params from login page to this page 
  //. yep normally , i hve passed it correctly 
 componentDidMount() {

  // Our problem is that this phase is calling as soon as the app start running. not when we click on the menu icon.
  // aah yeeessss that s iiiiit , 
  // event when i do consol.log in the  drawer menu ,  it s displayed  only one  time .
  // However we have 2 options to solve this problem but the navigator must pass the params so the
  // componentDidUpdate and / or componentWillReceiveProps trigger by this.navi ... etc.
  // Got it ? 
  // +- , do u mean that i won'tuse  componentDidMount ? , instead of it i use compUpdte ? Sure.
  // Because as react native said this will run first time only even when you click back it wont work again.
  //  aah , i get it ,  but in the whole work i use it lool , i have to change all my work .
  // No, Not everything .. just things that need to be updated after the user logged in as example.
  // I prefer to use another DrawerMenu for guest.
  // But How to pass the LOGIN params to your router ? like this screen: loggedin ? DrawerMenu : anotherMenu,
  // Got it ?
  //yep , if logged i use this else , i use the other menu , 
  // i wanna to optomize  my work , i tried to write one drawermenu and case the params i custume the menu. deal? 
  // as you like. i'm just giving ideas. 
  //  it will be simple if i use 2  drawerMenu , but the same code it will be repeated 
  // Yes correct.
  console.log("ComponentDidMount","Drawer");

   Parse.initialize("FA55638B3F62A6FB2C6A76264D438");
  Parse.serverURL = 'https://test.parse-server.karizma1.com/parse';
 // log out  tna7ili current user , besides yab9a mssajel ; 
 //that's because componentDidMount run for first time only, it wont run again with back button.
 // how can i fix it 
 // You should rebulid your router, and reset every scene you need to re-run componentDidMount in it
 // can't understand :( )
 // First of all, in your app u need to use COOKIE for your login session and save it in your app as Remember me (option)
 // Cookie need to be declared from serverside if you'r using PHP it would be setcookie("cookiename","value",expire after)
 // at your test.parse-server.karizma1.com i don't know what is the back-end language.
 // amusing parse,nosql databse, i willcheck it
 // OK, check it because it's important.
 // Now let's fix your problem.
 /*
Parse.User.currentAsync()
.then((currentUser)=>{
    if (currentUser) {
      console.log("Loged username:",currentUser.get("username"));
    this.setState({
    enablelogo: false  , 
    enableuser: true,  
    usrname:currentUser.get("username") ,
    usrimg: { uri: 'https://test.parse-server.karizma1.com/parse/files/FA55638B3F62A6FB2C6A76264D438/41908f68d0ed65316ffed8e4b38aea8e_sami%40g.fr.png' }
    
     })
     // Can we complete the problem at morinig ?

     // // I can'otk keeyty htomorrow nchlllh ^^ when u will be available , i hve class   from 8h30 to 15h , 
     // i'm available from 9 am to 11pm 
     // that's cool , nchllaah we will discusss , thank uu a looooooot 
     // u welcome :)
   

    }

}
);
 */
 if (typeof this.props.navigation.state.params !== "undefined") {
  console.log("Username",this.props.navigation.state.params.usrinfo);
    this.setState({
    enablelogo: false  , 
    enableuser: true,  
    usrname:this.state.usrinfo ,
    usrimg: { uri: 'https://test.parse-server.karizma1.com/parse/files/FA55638B3F62A6FB2C6A76264D438/41908f68d0ed65316ffed8e4b38aea8e_sami%40g.fr.png' }
    
     });
 } else {
     this.setState({
    enablelogo: false  , 
    enableuser: true,  
    usrname: "Guest" ,
    usrimg: require('./images/logo-home.png')
    
     });
 }

 
}
logOut(){
if(this.state.usrname  != ''){
 this.setState( {
  switchValue: true ,
       usrname : 'Guest',
       usrimg: require('./images/logo-home.png')
 })
Parse.User.logOut().then(() => {
  var currentUser = Parse.User.current();   
    this.props.navigation.navigate ('Login'); 
});
  }
  else
  { 

     this.props.navigation.navigate ('Login');  
  }

  }
}
// you should add Skip in login page so if the user wanted to login but then changed his mind he can skip.
///clear, but ican go to the starter page ya3ni this page , aaah okkeeyyy i understand uu 


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