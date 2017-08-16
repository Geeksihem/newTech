  import React, { Component } from 'react';
import Parse from 'parse/react-native'; 
import CommentListItem from './CommentListItem'; 
import * as moment from 'moment'
import { View, StyleSheet, ScrollView,ListView ,  Dimensions, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Button, Icon, Title, Content, Card, Left, Right, CardItem, Thumbnail, List, ListItem, Text, Body } from 'native-base';
const {width, height} = Dimensions.get('window');
 

class PostDetails extends Component {
 static navigationOptions = ({ navigation, screenProps }) => ({
   drawerLabel: "PostDetails",
   header:null ,
 });
 constructor(props) {
  super(props);
  this.state = {
   tabDetails: [],
   show: false,
   postID : this.props.navigation.state.params.postID,
   postNote : this.props.navigation.state.params.id,
   tabTags: [], 
   tabTagsName :[], 
 tabComment : [], 
   
 }
}



render() {
  const { params } = this.props.navigation.state;

  return (

    <View style={{ flex:1, backgroundColor:'white'}}>
     <Header>
     <Image
      style={{ width: width , position: "absolute"}}
       source= {require('./images/bg-header.png') } />
          <Left>
           <TouchableOpacity  onPress={() =>  this.props.navigation.goBack()} >
           <Image  source={require('./images/back.png')} style={{  height: 24 , width: 24 }}   />
          </TouchableOpacity>
          </Left>
          <Right>
         <TouchableOpacity onPress={() => this.props.navigation.navigate("DrawerOpen")}>
          <Image  source={require('./images/menu.png') } style={{  height: 24 , width: 24 }} />
        </TouchableOpacity>
          </Right>

        </Header>


    <ScrollView>
    <Card style= {{  flex: 1  , marginTop :0}}>
    <CardItem cardBody>
    <Image source= {{ uri :  this.state.tabDetails['pic'] }}   style={{height: 200, width: null, flex: 1}}>
    <TouchableOpacity   >

    </TouchableOpacity>
    </Image>
    </CardItem>
    <CardItem style = {{backgroundColor: '#eeecf6'}}>
    <Body>
    <Text style= {styles.txt}>
    {this.state.tabDetails['title'] }
    </Text>
    <View style={{  borderBottomWidth: 1,  borderBottomColor: '#839fcc',  width: width-30 }} />
    </Body>
    </CardItem >
    <CardItem style = {{backgroundColor: '#eeecf6' , flexDirection:'row'  , width: width }}  >
    <TouchableOpacity  style={{ flexDirection:'row' }}  >
    <Text> 05-07-2017 </Text>
    <Image source= {require('./images/time.png')} style= {{width: 20 ,  height: 20 }} />
    </TouchableOpacity>
    <TouchableOpacity  style={{ flexDirection:'row' , padding :15}} >
    <Text > شارك </Text>
    <Image source= {require('./images/Share-2.png')} style= {{width: 20 ,  height: 20  }} />
    </TouchableOpacity>

    <TouchableOpacity  style={{ flexDirection:'row' ,  padding: 17 }} >
    <Text >{this.state.tabDetails['likes']}</Text>
    <Image source= {require('./images/like-active.png')} style= {{width: 20 ,  height: 20 }} />
    </TouchableOpacity>

    <TouchableOpacity  style={{ flexDirection:'row'  }} >
    <Text>{this.state.tabDetails['nbCmnt']}</Text>
    <Image source= {require('./images/comment-active.png')} style= {{width: 20 ,  height: 20,  }} />
    </TouchableOpacity>
    </CardItem>
    </Card>

    <Text>  {this.state.tabDetails['content'] } </Text>
    <View style= {{backgroundColor: '#eeecf6',flexDirection: 'row',  marginLeft : 0 , width: width ,  height: 50}} >
    {this.lapsList()}
    </View>
    <TouchableOpacity style= {{ flexDirection: 'row' , marginRight:10 }}>
   
    <Text>  أضف تعليقا   </Text>
     <Image source= { require('./images/comment-active.png') }  />
    </TouchableOpacity>
    <TouchableOpacity style= {{backgroundColor: '#7992b9',flexDirection: 'row', width: width , height: 30}} >
    <Text> اضغط هنا لكتابة تعليق  </Text>
    </ TouchableOpacity>

         <View>
         <List  dataArray={this.state.tabComment} 

           renderRow={(item) => <ListItem avatar >
                 
              
              <Left>
                <Thumbnail source={{ uri:  item.cmnt.get("user").get("avatar")  }} />
              </Left>
              <Body>
                <Text> {item.cmnt.get("user").get("username")} </Text>
                <Text note > {item.cmnt.get("content")  }  </Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
          


              </ListItem>
            }> 
          </List>
     </View> 

            



    </ScrollView>
    </View>
    )
}
 
 lapsList() {

    return this.state.tabTagsName.map((element, index) => {
      return (
        <Button style={{    height: 25 , marginLeft: 10, marginRight :10 , marginTop : 10 , backgroundColor:'#7b879f'}}>
              <Title style= {{fontSize: 15  , color:'#c9ddff'}}>
              {element.name} 
              </Title>
            </Button>
     
      )
    })

}
_renderItem  = (item) =>   {
    return (
 <CommentListItem   item={item} navigation= {this.props.navigation}  />
 ); 

}


componentDidMount() {
  var a = this.state.postID ; 
  
  Parse.initialize("FA55638B3F62A6FB2C6A76264D438");
  Parse.serverURL = 'https://test.parse-server.karizma1.com/parse';
  var Post = Parse.Object.extend("Post");
  var post = new Post();
  var query = new Parse.Query(post);
  
  query.equalTo("objectId", a ); 
  var aux = [];
  var auxTag=[]; 
  query.find({
   success: (results) => { 
   
      aux.push ( {
        title: results[0].get("title"), 
        nbCmnt: results[0].get("nbrComment"), 
        pic:  results[0].get("pictureURL"), 
        video: results[0].get("videoURL"), 
        tags:  results[0].get("tags"),
        createDate: results[0].get("createdt") , 
        content: results[0].get("content"),  
        likes: results[0].get("likes").length

        }); 
 

        this.setState({
        tabDetails:  aux[0], 
      }) 

   var  a= results[0].get("tags").length
   var tabT = []; 
    for(var i =0; i<  a ; i++)
   {
      var Tag = Parse.Object.extend("Tag");
      var tag = new Tag();
      var queryTag = new Parse.Query(tag);

     var auxResult= []; 
    queryTag.equalTo("objectId",results[0].get("tags")[i]  )
    queryTag.find({
      success: (result) =>{
      
      console.log("tag result ", result[0].get("name"));
       auxResult.push({
        name: result[0].get("name")
       })   
        this.setState({
          tabTagsName:  auxResult
        })

      }, 
      error: (error)=>{

      }
    })

   }

   
    },
    error: function(error) {

    },
  })

var Comment  = Parse.Object.extend("Comment");
  var comment  = new Comment();
  var queryComment  = new Parse.Query(comment ); 
  var auxComment = [];
  queryComment.include("post"); 
    queryComment.include("user"); 

   queryComment.find({
  success: (results) => {

  for (var i = 0; i < results.length; i++) {
  console.log("content", results[i].get("content"))
    if(results[i].get("post").id  == a ){   
   auxComment.push({
   cmnt :   results[i] 

   }) 
}
    this.setState({
  tabComment:   auxComment
 })

}
 
  
  },
  error: function(error) {
  
 },
})


 
}


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: { 
    marginLeft : 0
  }, 
  txtComment: {
    fontSize: 14
  }
});

export default PostDetails ;
 