import React, { PureComponent } from 'react';
import {
  Platform,
  StyleSheet, PixelRatio, TextInput,
  Text, TouchableOpacity, ActivityIndicator, ScrollView, FlatList,
  View,
  Image, Dimensions
} from 'react-native';
import noimage from '../assets/City.png'
import property from '../assets/Property.png';
import Motor from '../assets/Motor.png';
import Mobile from '../assets/Mobile.png';
import Electronic from '../assets/Electronic.png';
import down from '../assets/down.png';
import Map from '../assets/Map.png';
import prop from '../assets/prop.png';
import Feature from '../assets/Feature.png';
import Free from '../assets/Free.png';
import Sofa from '../assets/Sofa.png';
import Ref from '../assets/Ref.png';
import Com from '../assets/Com.png';
import Rent from '../assets/Rent.png';
import { Icon, CheckBox } from 'native-base'
import Imageadd from '../assets/Imageadd.png';
import { Router, Stack, Actions } from 'react-native-router-flux';
import close from '../assets/close.png'
import StepIndicator from 'react-native-step-indicator';
const labels = ["Location", "Category", "Details","Post Ad","Finished"];
const customStyles = {
  stepIndicatorSize: 10,
  currentStepIndicatorSize: 20,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#e4717a',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#e4717a',
  stepStrokeUnFinishedColor: '#dedede',
  separatorFinishedColor: '#e4717a',
  separatorUnFinishedColor: '#dedede',
  stepIndicatorFinishedColor: '#e4717a',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: '#898989',
  labelSize: 11,
  labelFontFamily: 'OpenSans-Regular',
  currentStepLabelColor: '#e4717a',

}
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height
export default class PostAdScreen extends PureComponent {

  constructor() {
    super()
    this.state = {
      currentPosition: 0,
      selectTab: 'CLASSIFIED'
    }

  }
  locationRender() {
    return (
      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'grey' }}>Select City</Text>
        <Text style={{ fontSize: 13, color: 'grey' }}>Where you want to show your ad</Text>
        <Image source={noimage} style={{ width: 50, height: 50, marginTop: 10 }} />
        <Text style={{ fontSize: 15, color: 'grey' }}>United Arab Emirates</Text>
        <View style={{ width: '100%' }}>

          <FlatList
            contentContainerStyle={{ marginBottom: 40 }}
            data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }, { key: 'f' }, { key: 'i' }, { key: 'j' }]}
            renderItem={({ item }) =>
              <TouchableOpacity onPress={()=>this.setState({currentPosition:1})} style={{ marginTop: 15, borderBottomColor: 'grey', borderBottomWidth: 1, width: '90%', marginLeft: '5%', marginRight: '5%' }}>
                <Text style={{ fontSize: 18, color: 'grey' }}>Abu dhabi</Text>
              </TouchableOpacity>
            }
          />
        </View>

      </View>
    )
  }
  goliveRender() {
    return (
      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'grey' }}>Finished</Text>
        <Text style={{ fontSize: 13, color: 'grey', alignItems: 'center', width: '80%', marginTop: 15 }}>Your ad is now live and being heard by minnion of People</Text>
        <TouchableOpacity onPress={() => Actions.push('Tabs')}  style={{ width: '50%', marginTop: 20, height: 45, backgroundColor: '#c0c0c0', justifyContent: 'center', alignItems: 'center', borderRadius: 8 }} >
          <Text>Check your live ad </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 13, color: 'grey', alignItems: 'center', marginTop: 20 }}>Congrats you earned 50 points</Text>

        <View style={{ marginBottom: 20, marginTop: 40, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity  style={{ width: '35%', height: 40, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center', borderRadius: 8 }} >
            <Text>Promote your Ad </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>this.setState({currentPosition:0})} style={{ width: '35%', marginLeft: 10, height: 40, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center', borderRadius: 8 }} >
            <Text>Post another Ad </Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
  PostadRender() {
    return (
      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'grey' }}>You are almost Done!</Text>
        <Text style={{ fontSize: 13, color: 'grey' }}>People are searching for you item post now!</Text>

        <FlatList
          data={[{ key: 'a', title: 'Free', img: Free }, { key: 'b', title: 'Featured', img: Feature }, { key: 'c', title: 'Promoted', img: prop }]}
          horizontal

          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) =>
            <View style={{ width: 80, height: 120, marginLeft: 10, marginTop: 10 }}>
              <View style={{ width: 80, backgroundColor: '#fff', borderWidth: 1, borderColor: 'grey', borderRadius: 40, justifyContent: 'center', alignItems: 'center', height: 80 }}>

                <Image source={item.img} style={{ width: '50%', height: '50%', resizeMode: 'contain' }} />
              </View>


              <Text style={{ marginTop: 10, fontSize: 14, color: 'grey', textAlign: 'center' }}>{item.title}</Text>

            </View>
          }
        />
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'grey', marginTop: 30 }}>Order Summary</Text>
        <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
          <CheckBox style={{ color: 'grey' }} />
          <Text style={{ fontSize: 12, marginLeft: 15, color: 'grey' }}>I acknowledge and accept the term and conditions</Text>
        </View>
        <TouchableOpacity onPress={()=>this.setState({currentPosition:4})} style={{ width: '80%', height: 45, backgroundColor: '#c0c0c0', justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginTop: 30 }} >
          <Text>Live Your ad Now </Text>
        </TouchableOpacity>

      </View>
    )
  }
  detailRender() {
    return (
      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'grey' }}>Add Your Ad Detail</Text>

        <FlatList
          data={[{ key: 'a', title: 'RAK', img: noimage }, { key: 'b', title: 'SELL | RENT', img: Rent }, { key: 'c', title: 'Property', img: property }]}
          horizontal

          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) =>
            <View style={{ width: 80, height: 120, marginLeft: 10, marginTop: 10 }}>
              <View style={{ width: 80, backgroundColor: '#fff', borderWidth: 1, borderColor: 'grey', borderRadius: 40, justifyContent: 'center', alignItems: 'center', height: 80 }}>

                <Image source={item.img} style={{ width: '50%', height: '50%', resizeMode: 'contain' }} />
              </View>


              <Text style={{ marginTop: 10, fontSize: 14, color: 'grey', textAlign: 'center' }}>{item.title}</Text>

            </View>
          }
        />
        <View style={{ flex: 1 }} >
          <TextInput
            style={{ height: 40, borderBottomWidth: 1, borderBottomColor: 'grey', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, marginTop: 10, fontSize: 18 }}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
            placeholder={"Ad Title"}
          />
          <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
              style={{ height: 40, marginTop: 10, fontSize: 18, width: '90%' }}
              onChangeText={(text1) => this.setState({ text1 })}
              value={this.state.text1}
              editable={false}
              placeholder={"Select Property type"}
            />
            <Image source={down} style={{ width: 25, height: 25 }} />
          </View>
          <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
              style={{ height: 40, marginTop: 10, fontSize: 18, width: '90%' }}
              onChangeText={(text2) => this.setState({ text2 })}
              value={this.state.text2}
              editable={false}
              placeholder={"Select listing type"}
            />
            <Image source={down} style={{ width: 25, height: 25 }} />
          </View>
          <View style={{ flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
              style={{ height: 40, marginTop: 10, fontSize: 18, width: '90%' }}
              onChangeText={(text3) => this.setState({ text3 })}
              value={this.state.text3}
              editable={false}
              placeholder={"Add Photos (max 10)"}
            />
            <Image source={Imageadd} style={{ width: 25, height: 25 }} />
          </View>
          <TextInput
            style={{ height: 40, borderBottomWidth: 1, borderBottomColor: 'grey', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, marginTop: 10, fontSize: 18 }}
            onChangeText={(text4) => this.setState({ text4 })}
            value={this.state.text4}
            placeholder={"Phone no (+971 45451245)"}
          />
          <View style={{ flexDirection: 'row', width: "100%" }}>
            <TextInput
              style={{ height: 40, borderBottomWidth: 1, width: '60%', borderBottomColor: 'grey', borderBottomWidth: 1, marginLeft: 20, marginTop: 10, fontSize: 18 }}
              onChangeText={(text5) => this.setState({ text5 })}
              value={this.state.text5}
              placeholder={"Add price"}
            />
            <View style={{ flexDirection: 'row', width: '25%', borderBottomColor: 'grey', borderBottomWidth: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}>
              <TextInput
                style={{ height: 40, marginTop: 10, fontSize: 18, width: '90%' }}
                onChangeText={(text6) => this.setState({ text6 })}
                value={this.state.text6}
                editable={false}
                placeholder={"AED"}
              />
              <Image source={down} style={{ width: 25, height: 25 }} />
            </View>
          </View>
          <TextInput
            style={{ height: 40, borderBottomWidth: 1, borderBottomColor: 'grey', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, marginTop: 10, fontSize: 18 }}
            onChangeText={(text7) => this.setState({ text7 })}
            value={this.state.text7}
            placeholder={"Building name"}
          />
          <TextInput
            style={{ height: 40, borderBottomWidth: 1, borderBottomColor: 'grey', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, marginTop: 10, fontSize: 18 }}
            onChangeText={(text8) => this.setState({ text8 })}
            value={this.state.text8}
            placeholder={"Description"}
          />
          <TextInput
            style={{ height: 40, borderBottomWidth: 1, borderBottomColor: 'grey', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, marginTop: 10, fontSize: 18 }}
            onChangeText={(text9) => this.setState({ text9 })}
            value={this.state.text9}
            placeholder={"Size"}
          />
          <TextInput
            style={{ height: 40, borderBottomWidth: 1, borderBottomColor: 'grey', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, marginTop: 10, fontSize: 18 }}
            onChangeText={(text10) => this.setState({ text10 })}
            value={this.state.text10}
            placeholder={"Bedroom"}
          />
          <TextInput
            style={{ height: 40, borderBottomWidth: 1, borderBottomColor: 'grey', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, marginTop: 10, fontSize: 18 }}
            onChangeText={(text11) => this.setState({ text11 })}
            value={this.state.text11}
            placeholder={"Bathroom"}
          />
          <TextInput
            style={{ height: 40, borderBottomWidth: 1, borderBottomColor: 'grey', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, marginTop: 10, fontSize: 18 }}
            onChangeText={(text12) => this.setState({ text12 })}
            value={this.state.text12}
            placeholder={"Available from"}
          />

          <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'grey', textAlign: 'center', marginTop: 15 }}>Select location</Text>
          <TextInput
            style={{ height: 40, borderBottomWidth: 1, borderBottomColor: 'grey', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, marginTop: 10, fontSize: 18 }}
            onChangeText={(text13) => this.setState({ text13 })}
            value={this.state.text13}
            placeholder={"Property location"}
          />
          <Image source={Map} style={{ width: width, height: height / 2.5, marginTop: 10 }} />

          <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
            <CheckBox style={{ color: 'grey' }} />
            <Text style={{ fontSize: 12, marginLeft: 15, color: 'grey' }}>I acknowledge and accept the term and conditions</Text>
          </View>
          <View style={{ marginBottom: 20, marginTop: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => Actions.push('DetailScreen')} style={{ width: '30%', height: 45, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center', borderRadius: 8 }} >
              <Text>Preview </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.setState({currentPosition:3})}  style={{ width: '45%', marginLeft: 10, height: 45, backgroundColor: '#c0c0c0', justifyContent: 'center', alignItems: 'center', borderRadius: 8 }} >
              <Text>Confirm & Proceed </Text>
            </TouchableOpacity>
          </View>


        </View>



      </View>
    )
  }
  categoryRender() {
    return (
      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'grey' }}>Select Category</Text>
        <Text style={{ fontSize: 13, color: 'grey' }}>Which category suites best to your promote your ad</Text>
        <FlatList
          data={[{ key: 'CLASSIFIED' }, { key: 'AUCTION' }, { key: 'COMMUNITY' }, { key: 'ASK FOR' }]}
          horizontal

          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => this.setState({ selectTab: item.key })} style={{ height: 40, justifyContent: 'center', alignItems: 'center', width: width / 3, marginTop: 20, borderRadius: 5, borderWidth: 1, borderColor: 'grey', backgroundColor: this.state.selectTab == item.key ? "lightgrey" : null }}>
              <Text style={{ fontSize: 16 }}>{item.key}</Text>
            </TouchableOpacity>
          }
        />
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'grey', marginTop: 50 }}>SELL | FOR RENT</Text>
        <Text style={{ fontSize: 13, color: 'grey' }}>Which category suites best to your promote your ad</Text>
        <View style={{ width: width, height: 120, flexDirection: 'row', marginTop: 20 }}>
          <FlatList
            data={[{ key: 'a', title: 'Property', img: property }, { key: 'b', title: 'Motor', img: Motor }, { key: 'c', title: 'Mobile', img: Mobile }, { key: 'd', title: 'Electronics', img: Electronic }, { key: 'e', title: 'Furniture & Garden', img: Sofa }, { key: 'f', title: 'Home Appliance', img: Ref }, { key: 'g', title: 'Computer & Network', img: Com }]}
            horizontal

            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) =>
              <TouchableOpacity onPress={()=>this.setState({currentPosition:2})} style={{ width: 80, height: 80, marginLeft: 10 }}>
                <View style={{ width: 80, backgroundColor: '#fff', borderWidth: 1, borderColor: 'grey', borderRadius: 40, justifyContent: 'center', alignItems: 'center', height: 80 }}>

                  <Image source={item.img} style={{ width: '50%', height: '50%', resizeMode: 'contain' }} />
                </View>


                <Text style={{ marginTop: 10, fontSize: 16, color: 'grey', textAlign: 'center' }}>{item.title}</Text>

              </TouchableOpacity>
            }
          />
        </View>


      </View>
    )
  }
  onPageChange(position) {
    this.setState({ currentPosition: position });
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ flex: 1 }}>
            <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
              <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                {/* <Image source={back} style={{ width: 30, height: 30 }} /> */}
              </TouchableOpacity>
              <View style={{ width: '60%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: 'grey' }}>Post Your Ad</Text>
              </View>
              <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={close} style={{ width: 30, height: 30 }} />
              </View>
            </View>


            <StepIndicator
              customStyles={customStyles}
              currentPosition={this.state.currentPosition}
              labels={labels}
            />
          {this.state.currentPosition==0?this.locationRender():null}
          {this.state.currentPosition==1?this.categoryRender():null}
          {this.state.currentPosition==2?this.detailRender():null}
          {this.state.currentPosition==3?this.PostadRender():null}
          {this.state.currentPosition==4?this.goliveRender():null}
          
        

          </View>


        </ScrollView>




      </View>
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