  import React, { Component } from 'react';
import Parse from 'parse/react-native'; 
import CommentListItem from './CommentListItem'; 
import * as moment from 'moment'; 
import Display from 'react-native-display';

import { View, StyleSheet,Alert, ScrollView,ListView , TextInput,  Dimensions, Image, Share, TouchableOpacity } from 'react-native';
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
   userID : "",
   postNote : this.props.navigation.state.params.id,
   tabTags: [], 
   tabTagsName :[], 
   tabComment : [], 
   enableCmnt : false , 
   enableTypCmnt : false , 
  cmpt : 1 , 
  cmntText : '', 
  post : null , 
  nbrLike : 0 , 
  nbrComment: 0 , 
  like : true , 
   
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
    <TouchableOpacity  style={{ flexDirection:'row' , padding :15}} onPress= {this.share.bind(this)}>
    <Text > ﺷﺎﺭﻙ </Text>
    <Image source= {require('./images/Share-2.png')} style= {{width: 20 ,  height: 20  }} />
    </TouchableOpacity>

    <TouchableOpacity  style={{ flexDirection:'row' ,  padding: 17    }} disabled=  {this.state.like}  onPress={this.likePost.bind(this)}>
    <Text >{this.state.nbrLike}</Text>
    <Image source= {require('./images/like-active.png')} style= {{width: 20 ,  height: 20 }} />
    </TouchableOpacity>

    <TouchableOpacity  style={{ flexDirection:'row'  }} >
    <Text>{this.state.nbrComment}</Text>
    <Image source= {require('./images/comment-active.png')} style= {{width: 20 ,  height: 20,  }} />
    </TouchableOpacity>
    </CardItem>
    </Card>
 
 
    <Text>  {this.state.tabDetails['content'] } </Text>
    <View style= {{backgroundColor: '#eeecf6',flexDirection: 'row',  marginLeft : 0 , width: width ,  height: 50, justifyContent: 'flex-end' }} >
    {this.lapsList()}
    </View>
    <TouchableOpacity style= {{ flexDirection: 'row' , marginRight:10 , justifyContent: 'flex-end' }} onPress= {this.enableComment.bind(this)}>
   
    <Text>   اﻟﺘﻌﻠﻴﻘﺎﺕ     </Text>
     <Image source= { require('./images/comment-active.png') }  />
    </TouchableOpacity>
    <Display enable={this.state.enableCmnt} > 
    <TouchableOpacity style= {{backgroundColor: '#7992b9',flexDirection: 'row', width: width , height: 30 ,justifyContent: 'flex-end'}}  onPress= {this.enableTypingComment.bind(this)} >
    <Text> اﺿﻐﻂ ﻫﻨﺎ ﻟﻜﺘﺎﺑﺔ ﺗﻌﻠﻴﻖ  </Text>
    </ TouchableOpacity>
    <Display  enable={this.state.enableTypCmnt} > 
   <View  style= {{ flexDirection:'row' }}>
   <Icon name='paper-plane' style= {{color: "blue"}}  onPress= {this.sendCmnt.bind(this)}/> 
  <TextInput
        editable = {true}
        style= {{ width: width-30,  textAlign : 'right'  }}
        multiline= {true}
        maxLength = {200}
         onChangeText={(cmntText) => this.setState({cmntText})}
         value={this.state.cmntText} 
      /> 
   </View>
  </Display> 

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

            
</Display>


    </ScrollView>
    </View>
    )
}
shareResult(){
  console.log("success"); 
}
share(){
   Share.share({
      message: this.state.tabDetails['content'],
      title:   this.state.tabDetails['title'] ,
      
    }, {
      dialogTitle: 'This is share dialog title',
      
      tintColor: 'green'
    })
    .then(this.shareResult)
    .catch(err => console.log(err)) 

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
 
query.equalTo("objectId", this.state.postID )  ;
    query.first({
        success:  (Post) => {
          
            
            Post.save(null, {
                success: (post) => {
                    var aux = post.get("likes") ; 
                    var auxN = post.get("note"); 
                   aux.push(  this.state.userID); 
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
sendCmnt(){
  console.log("the comment ",  this.state.nbrComment   )
    if(this.state.cmntText !='')
  {
   Parse.initialize("FA55638B3F62A6FB2C6A76264D438");
   Parse.serverURL = 'https://test.parse-server.karizma1.com/parse';
 // Declare the types.
var Post = Parse.Object.extend("Post");
var User = Parse.Object.extend("User");
var Comment = Parse.Object.extend("Comment");
console.log("user", this.state.userID  ); 
// Create the post
var myPost = new Post();
myPost.id = this.state.post[0].id  ; 
 
var usr  = new User();
usr.id =  this.state.userID.id  ; 
  
// Create the comment
var myComment = new Comment();
myComment.set("content",  this.state.cmntText );

// Add the post as a value in the comment
myComment.set("post",  myPost  );
myComment.set("user",  usr  );

  myComment.save();
 var auxCom = this.state.nbrComment; 
this.setState({
  cmntText: '', 
  nbrComment: auxCom + 1
})
 

 var query = new Parse.Query(myPost);
    query.equalTo("objectId",  myPost.id);
    query.first({
        success: function (Post ) {
          var auxCmnt = Post.get("nbrComment"); 
          var  auxNote = Post.get("note");
            Post.save(null, {
                success: function (post) {
                    post.increment("nbrComment");
                    post.increment("note" );
                    post.save();
                    location.reload();


                }
            });
        }
    }); 
}
}
 
 lapsList() {
    return this.state.tabTagsName.map((element,index  ) => {
      return (
        <Button key={index} style={{height: 25 , marginLeft: 10, marginRight :10 , marginTop : 10 , backgroundColor:'#7b879f'}}>
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
enableComment(){
   if ( this.state.cmpt  %  2 != 0 )
   {
    this.setState({ 
    enableCmnt: true , 
    cmpt: this.state.cmpt +1  
  }) 
   }
   else 
   {
    this.setState({ 
    enableCmnt: false  , 
    cmpt: this.state.cmpt +1  
  }) 
   }
  
 
}
enableTypingComment(){
this.setState({
  enableTypCmnt : true 
})
}
componentDidMount() {

   var  au = this.props.navigation.state.params.loggedUser; 
     this.setState({
  userID:   au
})
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
  
if(results[0].get("likes").includes(this.props.navigation.state.params.loggedUser.id) )
{
  this.setState({
    like : true 
  })
}
 
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
        post: results ,
        nbrLike: aux[0].likes ,
        nbrComment: aux[0].nbCmnt

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
   console.log(results.length); 
  for (var i = 0; i < results.length; i++) {
  console.log("content", results[i].get("content"))
    if(results[i].get("post").id  == a ){   
      console.log(" this",results[i].get("content")); 
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
 