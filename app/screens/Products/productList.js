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
    title: 'Seeds',
  },
  {
    id: '2',
    title: 'Nuts',
  },
  {
    id: '3',
    title: 'Berries',
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


class ProductList extends Component {
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

  productGrid =  () => {
    const navigation = this.props.navigation;
    navigation.navigate("ProductGrid");
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
                <View style={{ flex: 1, height: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>
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
                    <Icon name='search' type="EvilIcons" color="#fff" size={32} />
                  </View>
                </View>
              </View>
            </View>
            <View style={{ top: 60, flex: 1, backgroundColor: '#fff' }}>
              <ScrollView
              contentContainerStyle={styles.contentContainer}
              alwaysBounceVertical={false}
            >
             <View style={{ flex: 1, backgroundColor: '#f2f2f2', }}>
                <View style={{ paddingBottom: 10, paddingLeft: 10 }}>
                </View>
                <View style={{ paddingBottom: 10,}}>
                  <FlatList
                    horizontal
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    style={{ paddinHorizontal: 0 }}
                    data={DATA}
                    keyExtractor={item => item.id}
                    numColumns={1}
                    renderItem={({ item }) => {
                      return (
                        <View key={item.id} style={{ alignItems: 'center', width: SLIDER_WIDTH,paddingHorizontal:10, }}>
                          <TouchableOpacity activeOpacity={1} onPress={() => this.productDetails()} style={{ height: ITEM_WIDTH, width: '100%', marginBottom: 20, flexDirection:'row',
                          justifyContent:'flex-start',backgroundColor:'#fff',borderRadius:8}}>
                            <View style={{ width: ITEM_WIDTH - 50, height: ITEM_WIDTH , }}>
                              <View style={{ position: 'absolute', top: 0, right: 0, backgroundColor: 'green', height: 20, paddingHorizontal: 5 }}>
                                <Label Color={'#fff'} FontSize={14} TextAlign={'center'} style={{ fontWeight: 'bold', }}>
                                  15% Off
                                </Label>
                              </View>
                              <Image
                                style={{ width: ITEM_WIDTH - 50, height: ITEM_WIDTH - 50 }}
                                source={require('tnassets/images/sabarmati.png')}
                              />
                            </View>
                            <View style={{ marginTop: 2,flexGrow:1}}>
                              <Label Color={'#000'} FontSize={14} TextAlign={'left'} style={{ fontWeight: 'bold', textTransform: 'capitalize', marginLeft: 5 }}>
                                Cashew Nut W240
                            </Label> 
                            <Label Color={'#959595'} FontSize={14} TextAlign={'left'} style={{ fontWeight: 'normal', textTransform: 'capitalize', marginLeft: 5 }}>
                                Premium Quality Kaju
                            </Label>
                            <Label Color={'#000'} FontSize={14} TextAlign={'left'} style={{ fontWeight: 'normal', textTransform: 'capitalize', marginLeft: 5 }}>
                                250 Grams
                            </Label>
                            <Label Color={'#000'} FontSize={14} TextAlign={'left'} style={{ fontWeight: 'normal', textTransform: 'capitalize', marginLeft: 5,marginTop:10 }}>
                                In Stock
                            </Label>
                              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',marginTop:15,paddingRight:10}}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'flex-start',flex:1,marginLeft: 5,}}>
                                  <Label Color={'#000'} FontSize={16} numberOfLines={1} TextAlign={'left'} style={{ fontWeight: 'bold', textTransform: 'capitalize',}}>
                                    383
                                </Label>
                                  <Label Color={'#959595'} FontSize={14} TextAlign={'left'} style={{ fontWeight: 'normal', textTransform: 'capitalize',
                                  textDecorationLine: 'line-through',marginLeft:30 }}>
                                    383
                                </Label>
                                </View>
                              </View>
                              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-evenly', marginTop:15, paddingRight: 10 ,}}>
                                <View style={[styles.shadowCard, {
                                  backgroundColor: '#2196F3', borderRadius: 0,paddingHorizontal:15,
                                  paddingVertical: 5,
                                }]}>
                                  <Label Color={'#fff'} FontSize={14} TextAlign={'center'} style={{ fontWeight: 'bold', }}>
                                    Order
                                </Label>
                                </View>
                                <View style={[styles.shadowCard, {
                                  backgroundColor: '#2196F3', borderRadius: 0,paddingHorizontal:15,
                                  paddingVertical: 5,
                                }]}>
                                  <Label Color={'#fff'} FontSize={14} TextAlign={'center'} style={{ fontWeight: 'bold', }}>
                                    Edit
                                </Label>
                                </View>
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
    backgroundColor: 'white', shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: Platform.OS == 'ios' ? 0.2 : 0.8,
    shadowRadius: Platform.OS == 'ios' ? 1 : 8,
    elevation: 5,
},
});

export default ProductList;
