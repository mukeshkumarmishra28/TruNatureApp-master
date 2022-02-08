import React, { Component } from 'react';

import ReactNative, { StyleSheet, Platform, StatusBar, View, Image, Text, FlatList, Dimensions, ScrollView,TouchableOpacity } from 'react-native';
import { Icon, } from 'tnassets/Icons';
import { Label, StatusBarC } from '../../components/index'
import {
    SafeAreaProvider,
    SafeAreaView,
    Edge,
} from 'react-native-safe-area-context';
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

];
class MyOrders extends Component {
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

    orderDetails =  () => {
        const navigation = this.props.navigation;
        navigation.navigate("OrderDetails");
    }

    render() {
        const { navigate } = this.props.navigation;
        var profileImage = null;
        if (this.state.ImgSource == null || this.state.ImgSource == "") {
            profileImage = <Icon size={40} color={'#fff'}
                type="Entypo" name="user" />
        }
        else {
            profileImage = <Image style={{ paddingVertical: 0, width: 40, height: 40, borderRadius: 20 }}
                source={{ uri: "data:image/png;base64," + this.state.ImgSource }}
            />
        }
        const { croppedImage } = this.state;
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
                            backgroundColor: '#4a9f03', height: 60, justifyContent: 'center', alignSelf: 'center'
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
                            <View style={{ alignItems: 'center', paddingVertical: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name='location-pin' type="Entypo" color="red" size={22} />
                                <Label Color={'#000'} FontSize={16} TextAlign={'center'} style={{ fontWeight: 'normal', textTransform: 'capitalize', marginLeft: 5 }}>
                                    Select your delivery location
                                </Label>
                            </View>
                            <View style={{ marginTop: 5, backgroundColor: 'grey',paddingVertical:15 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 10 }} >
                                    <View style={{
                                        height: 80, width: 80, borderRadius: 80 / 2, borderColor: '#fff',
                                        borderWidth: 2, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <View style={{ position: 'absolute', alignSelf: 'center', justifyContent: 'center' }}>
                                            {profileImage}
                                        </View>
                                    </View>
                                    <View style={{ marginLeft: 20 }}>
                                        <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'left', fontSize: 16 }}>Gurinder Singh</Text>
                                        <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'left', fontSize: 14, marginTop: 5 }}>nitwh1@gmail.com</Text>
                                        <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'left', fontSize: 14, marginTop: 5 }}>9810018000</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{marginTop:10, alignItems: 'center', justifyContent: 'center', paddingVertical: 10, backgroundColor: '#4a9f03', width: '100%' }}>
                                <Label Color={'#fff'} FontSize={18} TextAlign={'center'} style={{ fontWeight: 'bold' }}>
                                    My Orders
                                </Label>
                            </View>
                            <View style={{ paddinHorizontal: 10 }}>
                                <View style={{
                                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff',
                                    borderRadius: 8,
                                    paddingHorizontal: 10, paddingVertical: 10, width: '100%', marginBottom: 10,marginTop:5,
                                }}>
                                    <View style={{ flex: 1,}}>
                                        <Label Color={'#959595'} FontSize={16} TextAlign={'left'} style={{ fontWeight: 'normal' }}>
                                            Products
                                        </Label>
                                    </View>
                                    <View style={{ flex: 1, }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                            <Label Color={'#959595'} FontSize={16} TextAlign={'left'} style={{ fontWeight: 'bold' }}>
                                                Amount
                                            </Label>
                                            <Label Color={'#959595'} FontSize={16} TextAlign={'left'} style={{ fontWeight: 'bold' }}>
                                                Status
                                            </Label>
                                        </View>
                                    </View>
                                </View>
                                <TouchableOpacity activeOpacity={1} onPress={() => this.orderDetails()}  style={styles.shadowCard, {
                                    flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', backgroundColor: '#fff',
                                    borderRadius: 8,
                                    paddingHorizontal: 10, paddingVertical: 10, width: '100%', marginBottom: 10
                                }}>
                                    <View style={{ flex: 1, }}>
                                        <Label Color={'#959595'} FontSize={16} TextAlign={'left'} style={{ fontWeight: 'bold' }}>
                                            Cashew Nuts + 6
                                        </Label>
                                        <Label Color={'#959595'} FontSize={14} TextAlign={'left'} style={{ fontWeight: 'normal',marginTop:5 }}>
                                            Order no: 1120-1
                                        </Label>
                                    </View>
                                    <View style={{ flex: 1,}}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                            <Label Color={'#959595'} FontSize={16} TextAlign={'right'} style={{ fontWeight: 'bold' }}>
                                                Rs2200
                                            </Label>
                                            <Label Color={'#959595'} FontSize={16} TextAlign={'left'} style={{ fontWeight: 'bold' }}>
                                                Delivered
                                            </Label>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.shadowCard, {
                                    flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', backgroundColor: '#fff',
                                    borderRadius: 8,
                                    paddingHorizontal: 10, paddingVertical: 10, width: '100%', marginBottom: 10
                                }}>
                                    <View style={{ flex: 1, }}>
                                        <Label Color={'#959595'} FontSize={16} TextAlign={'left'} style={{ fontWeight: 'bold' }}>
                                            Cashew Nuts + 6
                                        </Label>
                                        <Label Color={'#959595'} FontSize={14} TextAlign={'left'} style={{ fontWeight: 'normal',marginTop:5 }}>
                                            Order no: 1120-1
                                        </Label>
                                    </View>
                                    <View style={{ flex: 1,}}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                            <Label Color={'#959595'} FontSize={16} TextAlign={'right'} style={{ fontWeight: 'bold' }}>
                                                Rs2200
                                            </Label>
                                            <Label Color={'#959595'} FontSize={16} TextAlign={'left'} style={{ fontWeight: 'bold' }}>
                                                Delivered
                                            </Label>
                                        </View>
                                    </View>
                                </View>
                            </View>
{/* 
                            <ScrollView
                                contentContainerStyle={styles.contentContainer}
                                alwaysBounceVertical={false}
                            >
                                <View style={{ flex: 1, backgroundColor: '#f2f2f2', }}>
                                    <View style={{ paddingHorizontal: 5 }}>
                                        <FlatList
                                            showsHorizontalScrollIndicator={false}
                                            data={DATA}
                                            keyExtractor={item => item.id}
                                            renderItem={({ item }) => {
                                                return (
                                                    <View key={item.id} style={{
                                                        width: '100%', borderRadius: 8,
                                                        paddingVertical: 5, backgroundColor: '#fff',
                                                    }}>
                                                        <View style={{
                                                            flexDirection: 'row', justifyContent: 'space-between',
                                                            alignItems: 'center', width: '100%'
                                                        }}>
                                                            <View style={{ width: '50%' }}>
                                                                <View style={{}}>
                                                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                                        <View style={{ width: 50, height: 50, }}>
                                                                            <Image
                                                                                style={{ width: '100%', height: '100%' }}
                                                                                source={require('tnassets/images/sabarmati.png')}
                                                                            />
                                                                        </View>
                                                                        <View style={{ marginLeft: 5 }}>
                                                                            <Label Color={'#000'} FontSize={16} TextAlign={'left'} style={{ fontWeight: 'normal' }}>
                                                                                Pistachios Salted
</Label>
                                                                            <Label Color={'#959595'} FontSize={14} TextAlign={'left'} style={{ fontWeight: 'normal' }}>
                                                                                250 Grams
</Label>
                                                                        </View>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                            <View style={{ width: '50%', paddingLeft: 20 }}>
                                                                <View style={{}}>
                                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                                        <Label Color={'#000'} FontSize={14} TextAlign={'left'} style={{ fontWeight: 'normal' }}>
                                                                            Rs 399
</Label>
                                                                        <Label Color={'#000'} FontSize={14} TextAlign={'left'} style={{ fontWeight: 'normal' }}>
                                                                            Qty 2
</Label>
                                                                        <View style={[styles.shadowCard, {

                                                                            backgroundColor: '#2196F3', borderRadius: 16, paddingHorizontal: 10,
                                                                            paddingVertical: 5,
                                                                        }]}>
                                                                            <Label Color={'#fff'} FontSize={14} TextAlign={'center'} style={{ fontWeight: 'bold', }}>
                                                                                Reorder
</Label>
                                                                        </View>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </View>
                                                )
                                            }}
                                        >
                                        </FlatList>
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
        paddingLeft: 0,
        paddingBottom: ITEM_HEIGHT / 2,
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
        // flex: '1',
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
export default MyOrders;