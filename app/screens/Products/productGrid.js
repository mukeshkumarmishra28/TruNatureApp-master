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
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
  {
    id: '4',
    title: 'First Item',
  },
  {
    id: '5',
    title: 'Second Item',
  },
  {
    id: '6',
    title: 'Third Item',
  },
  {
    id: '7',
    title: 'First Item',
  },
  {
    id: '8',
    title: 'Second Item',
  },
  {
    id: '9',
    title: 'Third Item',
  },  
  {
    id: '10',
    title: 'Third Item',
  },
];


class ProductGrid extends Component {
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

  productDetails = () => {
    const navigation = this.props.navigation;
    navigation.navigate("ProductDetails");
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
                <View style={{ flex: 1,height: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',}}>
                <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()} >
                    <Icon name='left' type="AntDesign" color="#fff" size={22} />
                  </TouchableOpacity>
                  <TouchableOpacity ctiveOpacity={1} onPress={() => this.props.navigation.openDrawer()} >
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
              <View style={{ backgroundColor: '#f2f2f2', paddingBottom: 10,paddingTop:10,flexDirection: 'row', justifyContent: 'center', alignItems: 'center'  }}>
                <View style={{ alignItems: 'center', width: 100, marginHorizontal: 5, height: 80, }}>
                  <Label Color={'#000'} FontSize={16} TextAlign={'center'} style={{ fontWeight: 'normal', textTransform: 'capitalize', marginLeft: 5, marginTop: 10 }}>
                    Grain Flour & Rice
                </Label>
                </View>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{ paddinHorizontal: 30 }}
                  data={DATA}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => {
                    return (
                      <View key={item.id} style={{ alignItems: 'center', width: ITEM_WIDTH - 20, marginHorizontal: 5,flexDirection:'row',alignItems:'flex-start',backgroundColor:'#fff' }}>
                        <View style={{ height: 60, marginBottom: 5, backgroundColor: 'red',width:70 }}>
                        <Image
                  style={{height:60,width:70}}
                  source={require('tnassets/images/honeyjaggery.jpg')}
                />
                        </View>
                        <View style={{ width: (ITEM_WIDTH - 30) / 2,alignSelf:'flex-start' }}>
                          <Label Color={'#000'} FontSize={12} TextAlign={'left'} style={{ fontWeight: 'bold', textTransform: 'capitalize', marginLeft: 5, marginTop: 5 }}>
                            Grains Flours & Rice
                        </Label>
                        </View>
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
                <View style={{ paddingBottom: 10, paddingLeft: 10 }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ paddinHorizontal: 30 }}
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                      return (
                        <View key={item.id} style={{ alignItems: 'center',marginRight: 15, }}>
                            <View style={{ width: ITEM_WIDTH - 20, backgroundColor: '#e96125',paddingVertical:10 }}>
                              <Label Color={'#fff'} FontSize={14} TextAlign={'center'} style={{ fontWeight: 'bold', }}>
                                {item.title}
                              </Label>
                            </View>
                        </View>
                      )
                    }}
                  >
                  </FlatList>
                </View>
                <View style={{ paddingBottom: 10, paddingLeft: 10 }}>
                  <FlatList
                    horizontal
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    style={{ paddinHorizontal: 30 }}
                    data={DATA}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    renderItem={({ item }) => {
                      return (
                        <View key={item.id} style={{ alignItems: 'center', width: ITEM_WIDTH, marginRight: 15, }}>
                          <TouchableOpacity activeOpacity={1} onPress={() => this.productDetails()}  style={{ height: ITEM_HEIGHT, width: '100%', marginBottom: 5, backgroundColor: '#fff', padding: 5, }}>
                            <View style={{ width: ITEM_WIDTH - 10, height: ITEM_WIDTH - 20, }}>
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
                            <View style={{ marginTop: 10 }}>
                              <Label Color={'#4a9f03'} FontSize={14} TextAlign={'center'} style={{ fontWeight: 'normal', textTransform: 'capitalize', marginLeft: 5 }}>
                                Multigrain Millets Flour
                            </Label>
                              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
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
                            <View style={[styles.shadowCard, {
                              backgroundColor: '#e96125', alignSelf: 'center', paddingHorizontal: 30, borderRadius: 16,
                              paddingVertical: 2, width: ITEM_WIDTH - 35, marginTop: 8
                            }]}>
                              <Label Color={'#fff'} FontSize={14} TextAlign={'center'} style={{ fontWeight: 'bold', textTransform: 'uppercase', marginLeft: 5 }}>
                                Add
                              </Label>
                              <View style={{ position: 'absolute', right: 5, top: 5 }}>
                                <Icon name='plus' type="AntDesign" color="#fff" size={12} />
                              </View>
                            </View>
                          </TouchableOpacity>
                        </View>
                      )
                    }}
                  >
                  </FlatList>
                </View>
              </View>         
            </ScrollView>
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

export default ProductGrid;

