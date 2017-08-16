
import React, {Component} from 'react';
import { Container, Header, Left, Body, Right, Button, Icon,  Tab, TabHeading, Tabs,  CardItem, Title, Card  } from 'native-base';
import   {ScrollView , TouchableOpacity, StyleSheet,Text, View,Dimensions, Image} from 'react-native';
//import { StackNavigator, DrawerNavigator } from "react-navigation";
import Display from 'react-native-display';

const onPress = () => {
     Alert.alert('Sélectionner');
}
const {width, height} = Dimensions.get('window');

 export default class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    enableCatBtn :  true ,
    enablePost :  true , 
    enablePostTag : true ,
   

    };
  }
 
  render() {
 
    return (
    

      <View>
     <Display enable={this.state.enablePost}> 
       <ScrollView style={{flex: 1}}>

             <Card style= {{  flex: 1  ,   width :  width-10, marginTop :10,}}>
               <CardItem cardBody>
                   <Image source= { { uri: this.props.item.get("pictureURL") }} style={{height: 200, width: null, flex: 1}}    >
                   <TouchableOpacity     >
                <View style={styles.circle} >
                 <Image source={ require('./images/Share.png') } style={{ 
          backgroundColor:'transparent' ,       }} />
          </View>
               </TouchableOpacity>
               <Display enable={this.state.enableCatBtn}>
               <Button style= {{marginTop:127, height: 30  , backgroundColor : this.props.item.get("category")?   "#"+this.props.item.get("category").get("color"):  "blue" }}>
                  <Text style={{color: 'white'}}>  {this.props.item.get("category")?  this.props.item.get("category").get("name"):  " "} </Text>
               </Button>
               </Display>
                </Image>
                </CardItem>
               <CardItem style = {{backgroundColor: 'white'}}>
                <Body>
                  <Text  onPress={() =>  {this.props.navigation.navigate( 'PostDetails', { isStatusBarHidden: false  , postID: this.props.item.id })}}   > {this.props.item.get("title")} </Text>
                  <View style={{  borderBottomWidth: 1,   borderBottomColor: '#839fcc', width: width-50}} />
                </Body>
              </CardItem>
                 <CardItem  style= {{flexDirection:'row' ,    }}>
                      <Button transparent  style ={{marginLeft: 0 }}>
                       <Text>  05/04/2017 </Text>
                     <Icon  name="time"style= {{ color:'#0d5be9'}} />
                      </Button>
                     <Button transparent  style= {{ padding:20, }}>
                     <Text > {this.props.item.get("likes").length } </Text>
                     <Icon  name="heart" style= {{ color:'#0d5be9'}} />
                   </Button>

                    <Button transparent >
                    <Text  onPress={() =>  {this.props.navigation.navigate( 'PostDetails', { isStatusBarHidden: false  , postID: this.props.item.id })}} >  {this.props.item.get("nbrComment")}  </Text>
                     <Icon  name="chatbubbles"   style= {{ color:'#0d5be9'}}  />
                    </Button>
                 </CardItem>
               </Card>
   </ScrollView>
        </Display>
           

     
    </View>


 )}
   componentDidMount()
    {
       

  var a =  this.props.navigation.state.params.tag   ; 
  console.log("eee", a); 
     var itemCatName = this.props.item.get("category").get("name"); 
     var lik =  this.props.item.get("likes")  ; 
     
    var navigationCatName= this.props.navigation.state.params.id ; 
   
 
    if (this.props.navigation.state.routeName  != 'HomePage')
    {
   
      this.setState({
        enableCatBtn:  false
      })
    
     if (( navigationCatName !=  undefined ) &&(itemCatName != navigationCatName) )
     {
       this.setState({
        enablePost:  false
      })
     }
    }
   
  

    }


   }

const styles = StyleSheet.create({
   
  circle: { 
    width: 50,
    height: 50,
    borderRadius: 50/2,
    backgroundColor: 'blue',  
    justifyContent : 'center', 
    alignItems: 'center' , 
    marginTop: 8, 
    marginLeft: 8, 

  }
});
