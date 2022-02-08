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

const DATA = [
  {
    id: '1',
    title: 'Honey & Jaggary',
  },
  {
    id: '2',
    title: 'Honey & Jaggary',
  },
  {
    id: '3',
    title: 'Honey & Jaggary',
  },
  {
    id: '4',
    title: 'Honey & Jaggary',
  },
  {
    id: '5',
    title: 'Honey & Jaggary',
  },
  {
    id: '6',
    title: 'Honey & Jaggary',
  },
  {
    id: '7',
    title: 'Honey & Jaggary',
  },
  {
    id: '8',
    title: 'Honey & Jaggary',
  },
  {
    id: '9',
    title: 'Honey & Jaggary',
  },
];


class Home extends Component {
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

  productList =  () => {
    const navigation = this.props.navigation;
    navigation.navigate("ProductList");
}

addProducts=  () => {
  const navigation = this.props.navigation;
  navigation.navigate("AddProducts");
}
addSupllier=  () => {
  const navigation = this.props.navigation;
  navigation.navigate("AddSupplier");
}
addCustomer=  () => {
  const navigation = this.props.navigation;
  navigation.navigate("AddCustomer");
}
addStaffs=  () => {
  const navigation = this.props.navigation;
  navigation.navigate("AddProducts");
}

addStaffs=  () => {
  const navigation = this.props.navigation;
  navigation.navigate("AddProducts");
}

productDetails = () => {
  const navigation = this.props.navigation;
  navigation.navigate("ProductDetails");
}

signIn = () => {
  const navigation = this.props.navigation;
  navigation.navigate("SignIn");
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
                  {/* <View>
                    <Icon name='left' type="AntDesign" color="#fff" size={22} />
                  </View> */}
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
                    <Icon name='search' type="EvilIcons" color="#fff" size={32} />
                  </View>
                </View>
              </View>
            </View>
            <View style={{ top: 60, flex: 1, backgroundColor: '#fff',paddingHorizontal:15 }}>
              <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center',marginTop:20 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  padding:5,paddingTop:5,paddingBottom:0}}>
                  <TouchableOpacity activeOpacity={1} onPress={() => this.addProducts()} 
                  style={[styles.shadowCard,,{ borderWidth: 1, borderColor: 'lightblue', borderRadius: 8, 
                  minHeight: 120,width:'100%',justifyContent:'center' }]}>
                    <Label Color={'#000'} FontSize={16} TextAlign={'center'}>
                      Add {'\n'}Products
                    </Label>
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding:5,}}>
                  <TouchableOpacity activeOpacity={1} onPress={() => this.addCustomer()} 
                  style={[styles.shadowCard,,{ borderWidth: 1, borderColor: 'lightblue', borderRadius: 8, 
                  minHeight: 120,width:'100%',justifyContent:'center' }]}>
                    <Label Color={'#000'} FontSize={16} TextAlign={'center'}>
                      Add {'\n'}Customers
                    </Label>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop:5,paddingBottom:0,paddingHorizontal:5}}>
                  <TouchableOpacity activeOpacity={1} onPress={() => this.addSupllier()} 
                  style={[styles.shadowCard,,{ borderWidth: 1, borderColor: 'lightblue', borderRadius: 8, 
                  minHeight: 120,width:'100%',justifyContent:'center' }]}>
                    <Label Color={'#000'} FontSize={16} TextAlign={'center'}>
                      Add {'\n'}Suppliers
                    </Label>
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding:5,paddingTop:5,paddingBottom:0}}>
                  <TouchableOpacity activeOpacity={1} onPress={() => this.addProducts()} 
                  style={[styles.shadowCard,,{ borderWidth: 1, borderColor: 'lightblue', borderRadius: 8, 
                  minHeight: 120,width:'100%',justifyContent:'center' }]}>
                    <Label Color={'#000'} FontSize={16} TextAlign={'center'}>
                      Add {'\n'}Staffs
                    </Label>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 5,paddingTop:5,paddingBottom:0}}>
                  <TouchableOpacity activeOpacity={1} onPress={() => this.productList()}
                    style={[styles.shadowCard, , {
                      borderWidth: 1, borderColor: 'lightblue', borderRadius: 8,
                      minHeight: 120, width: '100%', justifyContent: 'center'
                    }]}>
                    <Label Color={'#000'} FontSize={16} TextAlign={'center'}>
                      Add {'\n'} Expenses
                    </Label>
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 5,paddingTop:5,paddingBottom:0}}>
                  <TouchableOpacity activeOpacity={1} onPress={() => alert('settings')}
                    style={[styles.shadowCard, , {
                      borderWidth: 1, borderColor: 'lightblue', borderRadius: 8,
                      minHeight: 120, width: '100%', justifyContent: 'center'
                    }]}>
                    <Label Color={'#000'} FontSize={16} TextAlign={'center'}>
                      Settings
                    </Label>
                  </TouchableOpacity>
                </View>
              </View>
              {/* <View style={{ alignItems: 'center', paddingVertical: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon name='location-pin' type="Entypo" color="red" size={22} />
                <Label Color={'#000'} FontSize={16} TextAlign={'center'} style={{ fontWeight: 'normal', textTransform: 'capitalize',marginLeft:5 }}>
                  Select your delivery location
                </Label>
              </View>
              <View style={{marginTop:5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10, paddingHorizontal: 10, }}>
                  <Label Color={'#000'} FontSize={16} TextAlign={'center'} style={{ fontWeight: 'normal' }}>
                    Shop by Category
                  </Label>
                  <Icon name='arrowright' type="AntDesign" color="#000" size={22} />
                </View>
              <View style={{ backgroundColor: '#fff', paddingBottom: 10 }}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{ paddinHorizontal: 30 }}
                  data={DATA}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => {
                    return (
                      <View key={item.id} style={{ alignItems: 'center', width: 100, marginHorizontal: 5, }}>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.productList()} style={{ height: 80, width: '100%', marginBottom: 5, }}>
                          <Image
                            style={{ height: 80, width: '100%' }}
                            source={require('tnassets/images/honeyjaggery.jpg')}
                          />
                        </TouchableOpacity>
                        <Label Color={'#000'} FontSize={14} TextAlign={'left'} style={{ fontWeight: 'normal', textTransform: 'capitalize', marginLeft: 5 }}>
                          {item.title}
                        </Label>
                      </View>
                    )
                  }}
                >
                </FlatList>
              </View>
              <ScrollView
            contentContainerStyle={styles.contentContainer}
            alwaysBounceVertical={false}
          >
             <View style={{ flex: 1, backgroundColor: '#f2f2f2', }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10, paddingHorizontal: 10, }}>
                  <Label Color={'#000'} FontSize={16} TextAlign={'center'} style={{ fontWeight: 'normal' }}>
                    Deals of the Week
                  </Label>
                  <Icon name='arrowright' type="AntDesign" color="#000" size={22} />
                </View>
                <View style={{ paddingBottom: 10, paddingLeft: 10 }}>
                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ paddinHorizontal: 30 }}
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                      return (
                        <View key={item.id} style={{ alignItems: 'center', width: ITEM_WIDTH, marginRight: 15, }}>
                          <TouchableOpacity activeOpacity={1} onPress={() => this.productDetails()}  style={{ height: ITEM_HEIGHT, width: '100%', marginBottom: 5, backgroundColor: '#fff', padding: 5, }}>
                            <View style={{ width: ITEM_WIDTH - 10, height: ITEM_WIDTH - 20,}}>
                              <View style={{zIndex:10, position: 'absolute', top: 0, right: 0, backgroundColor: 'green', height: 20, paddingHorizontal: 5 }}>
                                <Label Color={'#fff'} FontSize={14} TextAlign={'center'} style={{ fontWeight: 'bold', }}>
                                  15% Off
                                </Label>
                              </View>
                              <Image
                                style={{ width: ITEM_WIDTH - 10, height: ITEM_WIDTH - 20 }}
                                source={require('tnassets/images/sabarmati.png')}
                              />
                            </View>
                            <View style={{ marginTop: 10,}}>
                              <Label Color={'#4a9f03'} FontSize={16} TextAlign={'center'} style={{ fontWeight: '500', textTransform: 'capitalize', marginLeft: 5 }}>
                                Multigrain Millets Flour
                            </Label>
                              <View style={{marginTop:5,  flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                <Label Color={'#000'} FontSize={16} numberOfLines={1} TextAlign={'center'} style={{ fontWeight: 'bold', textTransform: 'capitalize', marginLeft: 5, }}>
                                  383
                                </Label>
                                <Label Color={'#959595'} FontSize={14} TextAlign={'center'} style={{ fontWeight: 'normal', textTransform: 'capitalize', marginLeft: 5, textDecorationLine: 'line-through' }}>
                                  383
                                </Label>
                                <Label Color={'#000'} FontSize={16} TextAlign={'center'} style={{ fontWeight: 'normal', textTransform: 'capitalize', marginLeft: 5 }}>
                                  5 KG
                                </Label>
                              </View>
                            </View>
                            <TouchableOpacity activeOpacity={1} onPress={() => this.signIn()} style={[styles.shadowCard, {
                              backgroundColor: '#e96125', alignSelf: 'center', paddingHorizontal: 30, borderRadius: 16,
                              paddingVertical: 2, width: ITEM_WIDTH - 35, marginTop: 8
                            }]}>
                              <Label Color={'#fff'} FontSize={14} TextAlign={'center'} style={{ fontWeight: 'bold', textTransform: 'uppercase', marginLeft: 5 }}>
                                Add
                              </Label>
                              <View style={{ position: 'absolute', right: 5, top: 5 }}>
                                <Icon name='plus' type="AntDesign" color="#fff" size={12} />
                              </View>
                            </TouchableOpacity>
                          </TouchableOpacity>
                        </View>
                      )
                    }}
                  >
                  </FlatList>
                </View>
                  <View style={{ width: SLIDER_WIDTH - 10, height: ITEM_HEIGHT,marginBottom: 20, borderRadius: 16, marginHorizontal: 5 }}>
                    <Image
                      style={{ height: '100%',width:'100%',resizeMode:'stretch', borderRadius: 16, }}
                      source={require('tnassets/images/Add1.jpg')}
                    />
                  </View>
                <View style={{ width: SLIDER_WIDTH - 10, height: ITEM_HEIGHT, borderRadius:16,marginHorizontal:5  }}>
                <Image
                      style={{ height: '100%',width:'100%',resizeMode:'stretch',borderRadius: 16, }}
                      source={require('tnassets/images/Add2.jpg')}
                    />
                </View>
              </View>
         
            </ScrollView>
                */}
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

export default Home;



// import React from "react";
// import { View, Button, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions ,Platform,SafeAreaView} from "react-native";
// import { Icon } from "tnassets/Icons";
// //import database from '@react-native-firebase/database';
// import NavigationService from  '../../utils/NavigationService'
// const { height, width } = Dimensions.get('window');
//  class Home extends React.Component {
//    constructor(props){
//      super(props)
//    }
//    componentDidMount() {
//    /// database().ref('/Events').on('value', querySnapShot => {
//     //  let data = querySnapShot.val() ? querySnapShot.val() : {};
//     //  let todoItems = {...data};
//      // console.log(JSON.stringify(todoItems))
//       // this.setState({
//       //   todos: todoItems,
//       // });
//     //});
//   }
//   render() {
//     return (
//       <View style={{ flex: 1, backgroundColor: '#f4f4f4',top:Platform.OS=='ios'?20:0 }}>
//       <View style={{ position: 'relative', top: 0, borderBottomColor: '#f6f6f6', borderBottomWidth: 2 }}>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', }}>
//           <View style={{alignItems: 'flex-start', paddingLeft: 20, paddingVertical: 10 }}>
//             <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style={{ justifyContent: 'center', alignItems: 'center', marginRight: 10, borderWidth: 2, borderColor: '#fff', borderRadius: 50 }}>
//               <View style={{ height: 30, width: 33, borderRadius: 10, backgroundColor: '#AAE3F6', alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 8, paddingVertical: 5 }}>
//                 <View style={{ height: 3, width: 14, backgroundColor: '#444', borderRadius: 16, marginBottom: 3 }} />
//                 <View style={{ height: 3, width: 20, backgroundColor: '#444', borderRadius: 16, marginBottom: 3 }} />
//                 <View style={{ height: 3, width: 14, backgroundColor: '#444', borderRadius: 16, marginBottom: 3 }} />
//               </View>
//             </TouchableOpacity>
//           </View>
//           <View style={{ alignItems: 'center'}}>
//             <Text style={{color:'#777',fontSize:16,textAlign:'center'}}>
//               Welcome Mr. Jhonson
//             </Text>
//           </View>
//           <View style={{ alignItems: 'flex-end', paddingRight: 20,}}>
//             <Icon name={'bell'} color={'#3f57d3'} type={'FontAwesome'} />
//           </View>
//         </View>
//       </View>
//       <View style={styles.center}>
//         <View>

//         </View>
//         <ScrollView
//           scrollEventThrottle={16}
//           >
//         <View style={{ paddingVertical: 20, backgroundColor: '#fff', }}>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, width: '100%' }}>
//             <View style={{ alignItems: 'flex-start' }}>
//               <Text style={{ color: '#666', fontSize: 16, fontWeight: 'bold' }}>
//                 NEWS
//               </Text>
//             </View>
//             <View style={{ alignItems: 'flex-end' }}>
//               <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
//               <Text style={{ color: '#3f57d3', fontSize: 15, fontWeight: 'bold',marginRight:5 }}>
//                 View All 
//               </Text>
//               <Icon name={'right'} color={'#3f57d3'} type={'AntDesign'} size={16}/>
//               </View>
//             </View>
//           </View>
//         </View>
//         <View style={{ flexDirection: 'row', justifyContent: 'center', height: 180, backgroundColor: '#fff', padding: 15, paddingBottom: 0, paddingTop: 0 }}>
//           <TouchableOpacity onPress={() => alert('')} style={[styles.shadowCard, { flex: 1, marginRight: 15, borderRadius: 8 }]}>
//             <View style={{ height: 80, width: '100%', borderRadius: 8, backgroundColor: 'transparent', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
//               <Image
//                 style={{
//                   width: '100%',
//                   height: '100%', borderTopLeftRadius: 8, borderTopRightRadius: 8
//                 }}
//                 source={{ uri: 'https://dubaitravelator.com/wp-content/themes/directorypress/thumbs/expensive-hotels-dubai-1024x576.jpeg' }}
//               />

//             </View>
//             <View style={{ paddingHorizontal: 10 }}>
//               <Text style={{ color: '#000', marginTop: 5 }} numberOfLines={1} ellipsizeMode='tail'>
//                 Seminar at on personality devvelopment
//               </Text>
//               <Text style={{ color: 'grey', fontSize: 12, marginTop: 5, }} numberOfLines={2} ellipsizeMode='tail'>
//                 Seminar at on personality devvelopment on 6th October 2020 at 5:30 pm.
//               </Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => alert('')} style={[styles.shadowCard, { flex: 1, borderRadius: 8, }]}>
//             <View style={{ height: 80, width: '100%', borderRadius: 8, backgroundColor: 'transparent', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
//               <Image
//                 style={{
//                   width: '100%',
//                   height: '100%', borderTopLeftRadius: 8, borderTopRightRadius: 8
//                 }}
//                 source={{ uri: 'https://dubaitravelator.com/wp-content/themes/directorypress/thumbs/expensive-hotels-dubai-1024x576.jpeg' }}
//               />
//             </View>
//             <View style={{ paddingHorizontal: 10 }}>
//               <Text style={{ color: '#000', marginTop: 5 }} numberOfLines={1} ellipsizeMode='tail'>
//                 Seminar at on personality devvelopment
//               </Text>
//               <Text style={{ color: 'grey', fontSize: 12, marginTop: 5, }} numberOfLines={2} ellipsizeMode='tail'>
//                 Seminar at on personality devvelopment on 6th October 2020 at 5:30 pm.
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
//           <View style={[styles.shadowCard, { backgroundColor: '#fff', paddingHorizontal: 10, paddingVertical: 5,borderRadius:8 }]}>
//             <View style={{ marginBottom: 5 }}>
//               <Text style={{ fontSize: 16 }}>Daily Pulse</Text>
//             </View>
//             <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',paddingRight:20 }}>
//               <View style={{ flexGrow: 1, marginRight: 20 }}>
//                 <Text style={{ fontSize: 12, color: 'grey' }}>The action or process of providing a feedback for the betterment.</Text>
//               </View>
//               <View>
//                 <Icon name={'right'} color={'#3f57d3'} type={'AntDesign'} />
//               </View>
//             </View>
//           </View>
//         </View>
//         <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
//           <View style={[styles.shadowCard, { backgroundColor: '#fff', paddingHorizontal: 10, paddingVertical: 5,borderRadius:8 }]}>
//             <View style={{ marginBottom: 5 }}>
//               <Text style={{ fontSize: 16 }}>Daily Pulse</Text>
//             </View>
//             <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',paddingRight:20 }}>
//               <View style={{ flexGrow: 1, marginRight: 20 }}>
//                 <Text style={{ fontSize: 12, color: 'grey' }}>The action or process of providing a feedback for the betterment.</Text>
//               </View>
//               <View>
//                 <Icon name={'right'} color={'#3f57d3'} type={'AntDesign'} />
//               </View>
//             </View>
//           </View>
//         </View>
//         <View style={{ paddingVertical: 20, backgroundColor: '#fff', }}>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, width: '100%' }}>
//             <View style={{ alignItems: 'flex-start' }}>
//               <Text style={{ color: '#666', fontSize: 16, fontWeight: 'bold' }}>
//                 Events
//               </Text>
//             </View>
//             <View style={{ alignItems: 'center' }}>
//               <Icon name={'calendar'} color={'green'} type={'AntDesign'} />
//             </View>
//             <View style={{ alignItems: 'flex-end' }}>
//               <Text style={{ color: '#3f57d3', fontSize: 16, fontWeight: 'bold' }}>
//                 View All
//               </Text>
//             </View>
//           </View>
//         </View>
//         <View style={{ flexDirection: 'row', justifyContent: 'center', height: 180, backgroundColor: '#fff', padding: 15, paddingBottom: 0, paddingTop: 0 }}>
//           <TouchableOpacity onPress={() => alert('')} style={[styles.shadowCard, { flex: 1, marginRight: 15, borderRadius: 8 }]}>
//             <View style={{ height: 80, width: '100%', borderRadius: 8, backgroundColor: 'transparent', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
//               <Image
//                 style={{
//                   width: '100%',
//                   height: '100%', borderTopLeftRadius: 8, borderTopRightRadius: 8
//                 }}
//                 source={{ uri: 'https://dubaitravelator.com/wp-content/themes/directorypress/thumbs/expensive-hotels-dubai-1024x576.jpeg' }}
//               />

//             </View>
//             <View style={{ paddingHorizontal: 10 }}>
//               <Text style={{ color: '#000', marginTop: 5 }} numberOfLines={1} ellipsizeMode='tail'>
//                 Seminar at on personality devvelopment
//               </Text>
//               <Text style={{ color: 'grey', fontSize: 12, marginTop: 5, }} numberOfLines={2} ellipsizeMode='tail'>
//                 Seminar at on personality devvelopment on 6th October 2020 at 5:30 pm.
//               </Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() =>alert('')} style={[styles.shadowCard, { flex: 1, borderRadius: 8, }]}>
//             <View style={{ height: 80, width: '100%', borderRadius: 8, backgroundColor: 'greetransparentn', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
//               <Image
//                 style={{
//                   width: '100%',
//                   height: '100%', borderTopLeftRadius: 8, borderTopRightRadius: 8
//                 }}
//                 source={{ uri: 'https://dubaitravelator.com/wp-content/themes/directorypress/thumbs/expensive-hotels-dubai-1024x576.jpeg' }}
//               />
//             </View>
//             <View style={{ paddingHorizontal: 10 }}>
//               <Text style={{ color: '#000', marginTop: 5 }} numberOfLines={1} ellipsizeMode='tail'>
//                 Seminar at on personality devvelopment
//               </Text>
//               <Text style={{ color: 'grey', fontSize: 12, marginTop: 5, }} numberOfLines={2} ellipsizeMode='tail'>
//                 Seminar at on personality devvelopment on 6th October 2020 at 5:30 pm.
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View style={{height:400}}>

//         </View>
//         </ScrollView>
//       </View>

//     </View>
   
//     )
//   }
// }
// const styles = StyleSheet.create({
//   Container: {
//     flex: 1,
//     justifyContent: "flex-start",
//     alignItems: "flex-start",
//   },
//   shadowCard: {
//     backgroundColor: 'white', marginBottom: 15, shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: Platform.OS == 'ios' ? 0.2 : 0.8,
//     shadowRadius: Platform.OS == 'ios' ? 1 : 8,
//     elevation: 5,
//   }
// });

// export default Home;