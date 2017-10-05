
import React, {Component} from 'react';
import Parse from 'parse/react-native'; 

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
    like : false    ,
    userID: "",   
    nbrLike : this.props.item.get("likes").length,

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
          backgroundColor:'transparent' ,  }} />
          </View>
               </TouchableOpacity>
               <Display enable={this.state.enableCatBtn}>
               <Button style= {{marginTop:115, height: 30  , backgroundColor : this.props.item.get("category")?   "#"+this.props.item.get("category").get("color"):  "blue" }}>
                  <Text style={{color: 'white'}}>  {this.props.item.get("category")?  this.props.item.get("category").get("name"):  " "} </Text>
               </Button>
               </Display>
                </Image>
                </CardItem>
               <CardItem style = {{backgroundColor: 'white'}}>
                <Body>
                  <Text  onPress={() =>  {this.props.navigation.navigate( 'PostDetails', { isStatusBarHidden: false  , postID: this.props.item.id , loggedUser : this.props.navigation.state.params.loggedUser  , likedPost :  this.state.like  })}}   > {this.props.item.get("title")} </Text>
                  <View style={{  borderBottomWidth: 1,   borderBottomColor: '#839fcc', width: width-50}} />
                </Body>
              </CardItem>
                 <CardItem  style= {{flexDirection:'row' ,    }}>
                      <TouchableOpacity    style ={{marginLeft: 0 , flexDirection: 'row' }}>
                       <Text>  05/04/2017 </Text>
                     <Icon  name="time"style= {{ color:'#0d5be9'}} />
                      </TouchableOpacity>
                     <TouchableOpacity    style= {{ padding:20, flexDirection: 'row' }} disabled=  {this.state.like}  onPress={this.likePost.bind(this)} >
                     <Text > {this.state.nbrLike}  </Text>
                     <Icon  name="heart" style= {{ color:'#0d5be9'}} />
                   </TouchableOpacity>

                    <TouchableOpacity  style= {{flexDirection: 'row'}}  onPress={() =>  {this.props.navigation.navigate( 'PostDetails', { isStatusBarHidden: false  , postID: this.props.item.id , loggedUser :  this.loggedUser.bind(this)})}}  >
                    <Text >  {this.props.item.get("nbrComment")}  </Text>
                     <Icon  name="chatbubbles"   style= {{ color:'#0d5be9'}}  />
                    </TouchableOpacity>
                 </CardItem>
               </Card>
   </ScrollView>
        </Display>
    </View>

 )}
    loggedUser  ()  {
  if  ( this.state.userID != undefined )  
   {return ( this.state.userID ) 
   } 
  else {
 return ("")
 } 
 } 
   componentDidMount()
    {   
  console.log("logged ", this.props.navigation.state.params.loggedUser ); 
 if(this.props.navigation.state.params.loggedUser != undefined){
    var  au = this.props.navigation.state.params.loggedUser.id ; 
    this.setState({
     userID:   au
   })

     Parse.initialize("FA55638B3F62A6FB2C6A76264D438");
  Parse.serverURL = 'https://test.parse-server.karizma1.com/parse';
  var Post = Parse.Object.extend("Post");
  var post = new Post();
  var query = new Parse.Query(post);
  query.equalTo("objectId", this.props.item.id  ); 
  query.find({
   success: (results) => { 
  
if(results[0].get("likes").includes(this.props.navigation.state.params.loggedUser.id) )
{
   this.setState({
    like : true 
  })
}
}, 
error: (error) =>{}
}) 
 }  else
 {
this.setState({
    like : true 
  })

 } 

         if(  this.props.navigation.state.params!= undefined)
         {
          var a =  this.props.navigation.state.params.tag   ; 
 
     var itemCatName = this.props.item.get("category").get("name"); 
     console.log("cateeegg", itemCatName ); 
     var auxlike =  this.props.item.get("likes").length  ; 
     this.setState({
      nbrLike : auxlike
       })
   } 
      
   

 


    var navigationCatName= this.props.navigation.state.params.id ; 
   
 
    if (this.props.navigation.state.routeName  != 'HomePage')
    {
   
      this.setState({
        enableCatBtn:  false
      })
      console.log("ffr cateeggg11", navigationCatName); 
     if (( navigationCatName !=  undefined ) &&(itemCatName != navigationCatName) )
     {
       this.setState({
        enablePost:  false
      })
     }

     var pref = this.props.navigation.state.paramspreferedNews
    }
     if((pref  != '' ) && (this.state.like == true))
     {
        this.setState({
        enablePost:  true 
      })
     }
  

    }
likePost(){
    this.setState({
      like : true   
   }) 

   
   Parse.initialize("FA55638B3F62A6FB2C6A76264D438");
   Parse.serverURL = 'https://test.parse-server.karizma1.com/parse';
 // Declare the types.
var Post = Parse.Object.extend("Post");
var myPost = new Post();
 var query = new Parse.Query(myPost);
  
query.equalTo("objectId",  this.props.item.id )  ;
    query.first({
        success:  (Post) => {
         console.log("Post",Post); 
            Post.save(null, {
                success: (post) => {
                    var aux = post.get("likes") ; 
                    var auxN = post.get("note"); 
                   aux.push(  this.state.userID ); 
                    post.set("likes", aux );
                    post.set("note", auxN +1); 
                    post.save();
                    location.reload();
                      
                }
            });
        }
    });

  var auxLike = this.state.nbrLike ; 
  this.setState({
    nbrLike :auxLike+1
  })
 
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
