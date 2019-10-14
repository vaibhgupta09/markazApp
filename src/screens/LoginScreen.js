import React, { PureComponent } from 'react';
import {
  Platform,
  StyleSheet,PixelRatio,TextInput,Dimensions,
  Text,TouchableOpacity,ActivityIndicator,
  View,
  Image 
} from 'react-native';
import defaultlogo from '../assets/defaultlogo.png'
import gmail from '../assets/gmail.png'
import fb from '../assets/fb.png'
import link from '../assets/link.png'
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height
export default class LoginScreen extends PureComponent {

  constructor() {
    super()
    this.state = {
      logintxt:''
      
    };
  
  
  }
  navigate()
  {
    var str = this.state.logintxt;
      var search = str.search(/\+/);
     if(search==0)
     {
       Actions.push('OTPScreen',{value:'Phone'});
     }
     else{
      Actions.push('OTPScreen',{value:'Email'});
     }
  }


  render() {
    return (
      <KeyboardAwareScrollView style={styles.container}>
       <View style={{width:width,height:height}}>
          <View style={{width:'100%',height:'40%',backgroundColor:null,justifyContent:'center',alignItems:'center'}}>
            <Image source={defaultlogo} style={{height:'50%',width:'50%',resizeMode:'contain'}}/>
          <Text style={{fontSize:24,marginTop:20,color:'grey',fontWeight:'bold'}}>LOGIN | SIGN UP </Text>
          </View>
          <View style={{width:'100%',height:'30%',backgroundColor:null,justifyContent:'center',alignItems:'center'}}>
          <TextInput
          style={{height: 50,width:'80%',borderBottomColor:'grey',borderBottomWidth:1,fontSize:18}}
          onChangeText={(logintxt) => this.setState({logintxt})}
          placeholder={'(+code) Mobile number or Email'}    
          value={this.state.logintxt} 
        />
        <TouchableOpacity onPress={()=>this.navigate()} style={{width:'45%',height:'20%',borderRadius:10,borderWidth:1,borderColor:'grey',backgroundColor:'#f5f5f5',marginTop:15,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:16,color:'grey'}}>LOGIN NOW</Text>
        </TouchableOpacity>
        <Text style={{fontSize:12,color:'grey',marginTop:10}}>We will send you a One Time Password to verify.</Text>
         
          </View> 
       <View style={{flexDirection:'row',width:'100%',marginTop:10,justifyContent:'center',alignItems:'center'}}>
          <View style={{width:'28%',height:1,backgroundColor:'grey'}}/>
          <Text style={{marginLeft:5,marginRight:5,fontSize:14,color:'grey'}}>LOGIN WITH</Text>
          <View style={{width:'28%',height:1,backgroundColor:'grey'}}/>

       </View>
       <View style={{flexDirection:'row',width:'100%',marginTop:10,justifyContent:'center',alignItems:'center',height:'15%'}}>
       <Image source={fb} style={{width:'15%',height:'80%',resizeMode:'contain'}}/>
       <Image source={gmail} style={{width:'15%',height:'80%',resizeMode:'contain',marginLeft:15}}/>
       <Image source={link} style={{width:'15%',height:'80%',resizeMode:'contain',marginLeft:15}}/>
       </View>  


       </View>
       </KeyboardAwareScrollView>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#fff',
  },
  results: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    
    width: 300,
    height: 300
  },
   preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  image: {
    width: 150,
    height: 100
  },
});