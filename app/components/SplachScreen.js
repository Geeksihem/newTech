import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  } from 'react-native';
  import Image from 'react-native-image-progress';
  import ProgressBar from 'react-native-progress/Bar';
  export default class SplachScreen extends Component {

    constructor(props){
      super(props)
      this.state = {
        done: false,
        visible: true
      }

      }

    timer(){
          setTimeout(()=>{
                this.setState({
                  done: true,
                  visible: !this.state.visible

                });
          }, 1500)
    }


    componentDidMount() {
      this.timer();

    }


render() {
let {width, height} = Dimensions.get('window');
return (

  this.state.done ?
  ({...this.props.children}) :
   (

    <View style={[styles.container]}>
    <Image
         source={require('./images/01-Splash.png')}

         style={{
         width: width,
        height: height,

       }}
       resizeMode="stretch"/>

    </View>)

);
}



  }
  const styles = StyleSheet.create({

    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#353535',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,


    },

  })