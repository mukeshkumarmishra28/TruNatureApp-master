import React, { Component } from 'react';
import ReactNative, {StyleSheet, Platform,  StatusBar, View,Image,Text, TextInput,FlatList,Dimensions,ScrollView,TouchableOpacity } from 'react-native';
import { Icon, } from 'tnassets/Icons';
import {Label,StatusBarC } from '../../components/index'

import {
  SafeAreaProvider,
  SafeAreaView,
  Edge,
} from 'react-native-safe-area-context';

const {width,height } = Dimensions.get('window');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.45);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 2 / 1.38);

class IssueDetails extends Component {
  static navigationOptions = {
    headerShown: false
  };
  constructor() {
    super();
    this.state = {
    }
  }
   componentWillUnmount() { 
  }
  
  UNSAFE_componentWillMount() {
    this.fillstate();
  }

  fillstate = async () => {
   
  }

writeToUs = () => {
  const navigation = this.props.navigation;
  navigation.navigate("WriteToUs");
}

  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <SafeAreaProvider>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor='#4a9f03'
        />
        <View style={styles.background}>
          <SafeAreaView style={[
            styles.safeArea,
          ]}>
            <View style={{
              position: 'absolute', top: (Platform.OS) === 'ios' ? 20 : 0, width: '100%', left: 0, right: 0,
              backgroundColor: '#4a9f03', height: 60
            }}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center',flex: 1, height: '100%',paddingHorizontal:5,}}>
                <View style={{ flex: 1,height: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',}}>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()} >
                                        <Icon name='left' type="AntDesign" color="#fff" size={22} />
                                    </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.openDrawer()} style={{marginLeft:20}}>
                    <Icon name='menu' type="Feather" color="#fff" size={22} />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 3,height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                  <Label Color={'#fff'} FontSize={22} TextAlign={'center'} style={{ fontWeight:'bold' }}>
                    Trunaturals
                  </Label>
                </View>
                <View style={{ flex: 1,height: '100%', flexDirection: 'row',  justifyContent: 'space-around', alignItems: 'center',}}>
                  <View>
                    <Icon name='search' type="EvilIcons" color="#fff" size={22} />
                  </View>
                  <View>
                    <Icon name='shopping-cart' type="Entypo" color="#fff" size={22} />
                  </View>
                </View>
              </View>
            </View>
            <View style={{ top: 60, flex: 1, backgroundColor: '#fff' }}>
              <View style={{ alignItems: 'center', paddingVertical: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon name='location-pin' type="Entypo" color="red" size={22} />
                <Label Color={'#000'} FontSize={16} TextAlign={'center'} style={{ fontWeight: 'normal', textTransform: 'capitalize',marginLeft:5 }}>
                  Select your delivery location
                </Label>
              </View>
              {/* <View style={{marginTop:5, alignItems: 'flex-start', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 10,backgroundColor:'grey' }}>
                  <Label Color={'#fff'} FontSize={16} TextAlign={'center'} style={{ fontWeight: 'normal' }}>
                    Please Select an Issue
                  </Label>
                </View>
             */}
             
             <View style={{ minHeight: 200, marginBottom: 20,flex:1,paddingHorizontal:20,backgroundColor:'#f2f2f2' }}>
               <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start',marginTop:10}}>
               <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()}>
               <Label Color={'blue'} FontSize={16} TextAlign={'left'} style={{ fontWeight:'normal' }}>
                    Cancel
                  </Label>
               </TouchableOpacity>
                  <Icon name='mail' type="Entypo" color="blue" size={22} />
               </View>
               <Label Color={'#000'} FontSize={18} TextAlign={'center'} style={{ fontWeight:'bold',marginTop:10,marginBottom:10 }}>
                    Billing Issues | 9810087000
                  </Label>
                  <View style={{ minHeight: 200,backgroundColor:'#f2f2f2' }}>
                <View style={{
                  backgroundColor: '#fff', marginTop: 15, marginBottom: 5,
                  flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',paddingLeft:10
                }}>
                  <Label Color={'#000'} FontSize={16} TextAlign={'center'} style={{ fontWeight: 'bold' }}>
                    To:
                  </Label>
                  <TextInput
                    style={[
                      {
                        paddingHorizontal: 10,
                        backgroundColor: '#fff',
                        paddingVertical: 5,
                        fontWeight: 'bold',
                        color: '#959595',fontSize: 16, height: 45,
                        textAlign:'left'
                      }]}
                    autoCorrect={false}
                    value={'customercare@trunaturals.in'}
                  />
                </View>
                <View style={{
                  backgroundColor: '#fff', marginTop: 15, marginBottom: 5,
                  flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',paddingLeft:10
                }}>
                  <Label Color={'#959595'} FontSize={16} TextAlign={'center'} style={{ fontWeight: 'bold' }}>
                    Cc/Bcc:
                  </Label>
                  <TextInput
                    style={[
                      {
                        paddingHorizontal: 10,
                        backgroundColor: '#fff',
                        paddingVertical: 5,
                        fontWeight: 'bold',
                        color: '#959595',fontSize: 16, height: 45,
                        textAlign:'left'
                      }]}
                    autoCorrect={false}
                    value={'test@example.com'}
                  />
                </View>
                <View style={{
                  backgroundColor: '#fff', marginTop: 15, marginBottom: 5,
                  flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',paddingLeft:10
                }}>
                  <Label Color={'#959595'} FontSize={16} TextAlign={'center'} style={{ fontWeight: 'bold' }}>
                    Subject:
                  </Label>
                  <TextInput
                    style={[
                      {
                        paddingHorizontal: 10,
                        backgroundColor: '#fff',
                        paddingVertical: 5,
                        fontWeight: 'bold',
                        color: '#959595',fontSize: 16, height: 45,
                        textAlign:'left'
                      }]}
                    autoCorrect={false}
                    value={'Billing Issues'}
                  />
                </View>
              </View>
              
               </View>
               <View style={{bottom:160,position:'absolute',left:20}}>
               <Text style={{ color: '#000', fontSize: 14, fontWeight: 'normal' }}>**Please don't change the subject for quick response</Text>
               </View>
              </View>
            
              <View style={{ position: 'absolute', bottom: 40, left: 20, right: 20 }}>
                            <TouchableOpacity style={styles.listItemStyle, {
                                backgroundColor: 'grey',
                                paddingHorizontal: 30, paddingVertical: 10, borderRadius: 32, alignItems: 'center', justifyContent: 'center'
                            }}>
                                <View style={styles.textBox}>
                                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Send</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
          </SafeAreaView>
        </View>
      </SafeAreaProvider>
    );
  }
}
const marginColor = '#5f27cd';
const paddingColor = '#10ac84';
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#4a9f03',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#4a9f03',
  },
  contentContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingLeft:0,
    paddingBottom:ITEM_HEIGHT/2,
    justifyContent: 'center',
  },
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    backgroundColor: '#4a9f03'
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'#e1e4e8',
    width: null,
    height: null
  },
  logoImage: {
    width: 130,
    height: 130
  },
  formContainer: {
    //  flex: '1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    marginBottom: 20
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText: {
    marginVertical: 15,
    fontSize: 18,
    // color: 'rgba(255, 255, 255, 0.7)'
  },
  TextInputStyle: {
    borderWidth: 1,
    borderColor: '#009688',
    width: '100%',
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  mb15: {
    marginBottom: 5
  },
  shadowCard: {
    backgroundColor: 'white', marginBottom: 15, shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: Platform.OS == 'ios' ? 0.2 : 0.8,
    shadowRadius: Platform.OS == 'ios' ? 1 : 8,
    elevation: 5,
},
});

export default IssueDetails;

