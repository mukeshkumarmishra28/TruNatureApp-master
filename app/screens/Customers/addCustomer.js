import React, { Component } from 'react';
import ReactNative, { StyleSheet, Platform, StatusBar, View, Image, Text, TextInput, Dimensions, ScrollView, TouchableOpacity,Linking } from 'react-native';
import { Icon, } from 'tnassets/Icons';
import { Label, StatusBarC } from '../../components/index'

import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import axios from 'axios';
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



class AddCustomer extends Component {
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

     chkApiCall = () => {
        axios
          .get('http://schoolbyteapi.schoolbyte.in/ch/login.php?username=9891513285&userpass=abc')
          .then(function (response) {
            // handle success
            alert(JSON.stringify(response.data));
          })
          .catch(function (error) {
            // handle error
            alert(error.message);
          })
          .finally(function () {
            // always executed
           // alert('Finally called');
          });
      };
    

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
                                        <Icon name='search' type="EvilIcons" color="#fff" size={32} />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ top: 60, flex: 1, backgroundColor: '#f2f2f2' }}>
                        <ScrollView
                            horizontal={false}
                            >
                            <View style={{ justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: 30, marginTop: 20 }}>
                                <View style={{ marginBottom: 15 }}>
                                    <Label Color={'#000'} FontSize={16} TextAlign={'left'} style={{ marginBottom: 5 }}>
                                        Name
                                    </Label>
                                    <TextInput
                                        value='Chawal'
                                        placeholder="name"
                                        keyboardType="default"
                                        maxLength={40}
                                        autoFocus={true}
                                        autoCapitalize={true}
                                        style={{width:width-80, borderRadius: 8, height: 45, paddingVertical: 5, paddingHorizontal: 10, borderWidth: 1, borderColor: '#c4c4c4' }} />

                                </View>
                                <View style={{ marginBottom: 15 }}>
                                    <Label Color={'#000'} FontSize={16} TextAlign={'left'} style={{ marginBottom: 5 }}>
                                        Address
                                    </Label>
                                    <TextInput
                                        value='10'
                                        placeholder="contact name"
                                        keyboardType="default"
                                        maxLength={120}
                                        autoCapitalize={true}
                                        multiline={true}
                                        style={{width:width-80, borderRadius: 8, height: 45, paddingVertical: 5, paddingHorizontal: 10, borderWidth: 1, borderColor: '#c4c4c4' }} />

                                </View>
                                <View style={{ marginBottom: 15 }}>
                                    <Label Color={'#000'} FontSize={16} TextAlign={'left'} style={{ marginBottom: 5 }}>
                                        Phone Number
                                    </Label>
                                    <TextInput
                                        value='10'
                                        placeholder="phone number"
                                        keyboardType="phone-pad"
                                        style={{width:width-80, borderRadius: 8, height: 45, paddingVertical: 5, paddingHorizontal: 10, borderWidth: 1, borderColor: '#c4c4c4' }} />
                                </View>
                            </View>
                            </ScrollView>
                        </View>
                        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, alignSelf: 'center',backgroundColor:'#fff' }}>
                            <View style={{ alignItems: 'center',paddingVertical:5 }}>
                                <TouchableOpacity activeOpacity={1} onPress={() => this.chkApiCall()} style={{ height: 50, 
                                    borderRadius: 16, backgroundColor: 'blue', paddingVertical: 10, paddingHorizontal: 30,justifyContent:'center' }}>
                                    <Label Color={'#fff'} FontSize={16} TextAlign={'center'} style={{ fontWeight: 'bold', }}>
                                        Save
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

export default AddCustomer;
