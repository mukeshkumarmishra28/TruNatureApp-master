import React, { Component } from 'react';
import ReactNative, {StyleSheet, Platform,  StatusBar, View,Image, Text,FlatList,Dimensions,ScrollView,TouchableOpacity } from 'react-native';
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

class SelectIssues extends Component {
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
              <View style={{marginTop:5, alignItems: 'flex-start', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 10,backgroundColor:'grey' }}>
                  <Label Color={'#fff'} FontSize={18} TextAlign={'center'} style={{ fontWeight: 'bold' }}>
                    Please Select an Issue
                  </Label>
                </View>
             <View style={{ minHeight: 200, marginBottom: 20,backgroundColor:'#f2f2f2'}}>
               <TouchableOpacity activeOpacity={1} onPress={() => this.writeToUs()} style={{marginTop:5, 
               alignItems: 'flex-start', justifyContent: 'center', paddingVertical: 10, backgroundColor:'#fff',borderRadius:8,
               paddingHorizontal: 10,}}>
                  <Label Color={'#959595'} FontSize={16} TextAlign={'center'} style={{ fontWeight: 'bold' }}>
                    Billing 
                  </Label>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => this.writeToUs()}  style={{marginTop:5, alignItems: 'flex-start', 
                justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 10,  backgroundColor:'#fff',borderRadius:8,}}>
                  <Label Color={'#959595'} FontSize={16} TextAlign={'center'} style={{ fontWeight: 'bold' }}>
                    Non Delivery
                  </Label>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => this.writeToUs()} style={{ backgroundColor:'#fff',borderRadius:8,marginTop:5, alignItems: 'flex-start', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 10, }}>
                  <Label Color={'#959595'} FontSize={16} TextAlign={'center'} style={{ fontWeight: 'bold' }}>
                    Late Delivery
                  </Label>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => this.writeToUs()} style={{ backgroundColor:'#fff',borderRadius:8,marginTop:5, alignItems: 'flex-start', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 10, }}>
                  <Label Color={'#959595'} FontSize={16} TextAlign={'center'} style={{ fontWeight: 'bold' }}>
                    Damaged or Torn Packaging 
                  </Label>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => this.writeToUs()} style={{marginBottom:5, backgroundColor:'#fff',borderRadius:8,marginTop:5, alignItems: 'flex-start', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 10, }}>
                  <Label Color={'#959595'} FontSize={16} TextAlign={'center'} style={{ fontWeight: 'bold' }}>
                    Others
                  </Label>
                </TouchableOpacity>
                </View>
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

export default SelectIssues;

