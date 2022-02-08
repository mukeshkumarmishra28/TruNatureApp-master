import React, { Component } from 'react';
import ReactNative, { StyleSheet, Platform, StatusBar, View, Image, Text, FlatList, Dimensions, ScrollView, TouchableOpacity,Linking } from 'react-native';
import { Icon, } from 'tnassets/Icons';
import { Label, StatusBarC } from '../../components/index'

import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import {
    SafeAreaProvider,
    SafeAreaView,
    Edge,
} from 'react-native-safe-area-context';

const FirstRoute = () => (
    <View style={[{ height: 200, paddingHorizontal: 0, paddingVertical: 10 }]} >
        <Label FontSize={16} Color={'#959595'} style={{}}>
            Nuts and seeds are considered nutrition powerhouses, and the kidney-shaped cashews are no exception. TruNaturals brings you this healthy blockbuster, which is a favourite snack for people of any age group. And our quality W-240 is one of the finer qualities with its large size, sweet taste, and pearly white colour.
        </Label>
    </View>
);

const SecondRoute = () => (
    <View FontSize={16} style={[{ height: 200, paddingHorizontal: 0, paddingVertical: 10 }]} >
        <Label Color={'#959595'} style={{}}>
            Some Text here
        </Label>
    </View>
);
const ThirdRoute = () => (
    <View FontSize={16} style={[{ height: 200, paddingHorizontal: 0, paddingVertical: 10 }]}>
        <Label Color={'#959595'} style={{}}>
            This content including advice provides generic information only.
          </Label>
    </View>
);

const LazyPlaceholder = ({ route }) => (
    <View style={styles.scene}>
        <Text>Loading {route.title}…</Text>
    </View>
);

const { width, height } = Dimensions.get('window');
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

class ProductDetails extends Component {
    static navigationOptions = {
        headerShown: false
    };
    constructor() {
        super();
        this.state = {
            index: 0,
            routes: [
                { key: 'first', title: 'Description' },
                { key: 'second', title: 'Benefits' },
                { key: 'third', title: 'Disclaimer' },
            ],

        }
    }

    _handleIndexChange = index => this.setState({ index });

    _renderLazyPlaceholder = ({ route }) => <LazyPlaceholder route={route} />;

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
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, height: '100%', paddingHorizontal: 5, }}>
                                <View style={{ flex: 1, height: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>
                                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.goBack()} >
                                        <Icon name='left' type="AntDesign" color="#fff" size={22} />
                                    </TouchableOpacity>
                                    <TouchableOpacity ctiveOpacity={1} onPress={() => this.props.navigation.openDrawer()} >
                                        <Icon name='menu' type="Feather" color="#fff" size={22} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 3, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Label Color={'#fff'} FontSize={22} TextAlign={'center'} style={{ fontWeight: 'bold' }}>
                                        Trunaturals
                  </Label>
                                </View>
                                <View style={{ flex: 1, height: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>
                                    <View>
                                        <Icon name='search' type="EvilIcons" color="#fff" size={22} />
                                    </View>
                                    <View>
                                        <Icon name='shopping-cart' type="Entypo" color="#fff" size={22} />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ top: 60, flex: 1, backgroundColor: '#f2f2f2' }}>
                            <View style={{
                                alignItems: 'center', paddingVertical: 5, flexDirection: 'row',
                                justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'
                            }}>
                                <Icon name='location-pin' type="Entypo" color="red" size={22} />
                                <Label Color={'#000'} FontSize={16} TextAlign={'center'} style={{ fontWeight: 'normal', textTransform: 'capitalize', marginLeft: 5 }}>
                                    12202| Gurgaon
                                </Label>
                            </View>
                            <ScrollView
                                contentContainerStyle={styles.contentContainer}
                                alwaysBounceVertical={false}
                            >
                                <View style={{
                                    alignItems: 'center', justifyContent: 'center',
                                    width: '100%', paddingHorizontal: 20, backgroundColor: '#fff', marginTop: 10,
                                    paddingTop: 10, paddingBottom: 20
                                }}>
                                    <View style={{ alignItems: 'center', width: ITEM_WIDTH + 20, height: ITEM_WIDTH }}>
                                        <Image
                                            style={{ width: '100%', height: ITEM_WIDTH + 40 }}
                                            source={require('tnassets/images/sabarmati.png')}
                                        />
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'flex-start', marginTop: 60 }}>
                                        <View style={{ alignItems: 'flex-start' }}>
                                            <Label Color={'#000'} FontSize={20} TextAlign={'left'} style={{
                                                fontWeight: 'bold', textTransform:
                                                    'capitalize',
                                            }}>
                                                Cashew Nuts W240
                                    </Label>
                                            <Label Color={'#959595'} FontSize={16} TextAlign={'left'} style={{
                                                fontWeight: 'bold',
                                                textTransform: 'capitalize', marginTop: 5
                                            }}>
                                                Premium quality kaju
                                    </Label>
                                            <Label Color={'#2196F3'} FontSize={20} TextAlign={'left'}
                                                style={{ fontWeight: 'bold', textTransform: 'capitalize', marginTop: 5 }}>
                                                250 grams
                                    </Label>
                                        </View>
                                        <View style={{ alignItems: 'flex-end' }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                                <Label Color={'#959595'} FontSize={16} TextAlign={'left'} style={{
                                                    fontWeight: 'bold',
                                                    textTransform: 'capitalize', textDecorationLine: 'line-through'
                                                }}>
                                                    Rs 439
                                            </Label>
                                                <Label Color={'#000'} FontSize={20} TextAlign={'left'} style={{
                                                    fontWeight: 'bold',
                                                    textTransform: 'capitalize', marginLeft: 15
                                                }}>
                                                    rs 399
                                            </Label>
                                            </View>
                                            <TouchableOpacity activeOpacity={1} onPress={() => this.signIn()}style={[styles.shadowCard, {
                                                backgroundColor: '#e96125', alignSelf: 'center', paddingHorizontal: 30, borderRadius: 16,
                                                paddingVertical: 10, width: ITEM_WIDTH - 35, marginTop: 20
                                            }]}>
                                                <Label Color={'#fff'} FontSize={14} TextAlign={'center'} style={{
                                                    fontWeight: 'bold',
                                                    textTransform: 'uppercase', marginLeft: 5
                                                }}>
                                                    Add
                                            </Label>
                                                <View style={{ position: 'absolute', right: 10, top: 6 }}>
                                                    <Icon name='plus' type="AntDesign" color="#fff" size={22} />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ height: 200, marginTop: 20, paddingHorizontal: 10, marginBottom: 20 }}>
                                    <TabView
                                        lazy
                                        navigationState={this.state}
                                        renderScene={SceneMap({
                                            first: FirstRoute,
                                            second: SecondRoute,
                                            third: ThirdRoute,
                                        })}
                                        renderLazyPlaceholder={this._renderLazyPlaceholder}
                                        onIndexChange={this._handleIndexChange}
                                        initialLayout={{ width: Dimensions.get('window').width }}
                                    />
                                </View>
                                <TouchableOpacity onPress={() => {Linking.openURL('https://trunaturals.co.in/recipes?category=healthy-recipes-for-a-sweet-tooth')}} style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 10,backgroundColor:'#e96125'}}>
                                    <Label Color={'#fff'} FontSize={18} TextAlign={'center'} style={{ fontWeight: 'bold', }}>
                                        Recipies usihng Cashew Nuts
                                    </Label>
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10, paddingHorizontal: 10, }}>
                                    <Label Color={'#000'} FontSize={16} TextAlign={'center'} style={{ fontWeight: 'normal' }}>
                                        Related Products
                                    </Label>
                                    <Icon name='arrowright' type="AntDesign" color="#000" size={22} />
                                </View>
                                <View style={{ paddingBottom: 10, paddingLeft: 10,marginTop:10,backgroundColor:'#fff' }}>
                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ paddinHorizontal: 30 }}
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                      return (
                        <View key={item.id} style={{ alignItems: 'center', width: ITEM_WIDTH, marginRight: 15,borderColor:'grey',borderWidth:1,padding:5 }}>
                          <TouchableOpacity activeOpacity={1} onPress={() => this.productList()}  style={{ height: ITEM_HEIGHT+10, 
                            marginBottom: 5, backgroundColor: '#fff',}}>
                            <View style={{ width: ITEM_WIDTH - 30, height: ITEM_WIDTH - 20,}}>
                              <View style={{ position: 'absolute', top: 0, right: 0, backgroundColor: 'green', height: 20, paddingHorizontal: 5 }}>
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
                              <Label Color={'#4a9f03'} FontSize={16} TextAlign={'center'} style={{ fontWeight: '500', textTransform: 'capitalize', marginLeft: 5 }}>
                                Multigrain Millets Flour
                            </Label>
                            </View>
                            <View style={[styles.shadowCard, {
                              backgroundColor: '#e96125', alignSelf: 'center', paddingHorizontal: 30, borderRadius: 16,
                              paddingVertical: 10, width: ITEM_WIDTH - 35, marginTop: 8
                            }]}>
                              <Label Color={'#fff'} FontSize={14} TextAlign={'center'} style={{ fontWeight: 'bold', textTransform: 'uppercase', marginLeft: 5 }}>
                                Add
                              </Label>
                              <View style={{ position: 'absolute', right: 5, top: 5 }}>
                                <Icon name='plus' type="AntDesign" color="#fff" size={22} />
                              </View>
                            </View>
                          </TouchableOpacity>
                        </View>
                      )
                    }}
                  >
                  </FlatList>
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
        paddingLeft: 0,
        paddingBottom: ITEM_HEIGHT / 4,
        justifyContent: 'center',
        marginTop:10,
        backgroundColor:'#f2f2f2',
        
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
    scene: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default ProductDetails;
