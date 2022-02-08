import React, { Component } from 'react';

import ReactNative, { StyleSheet, Platform, StatusBar, View, Image, Text, FlatList, Dimensions, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Icon, } from 'tnassets/Icons';
import { Label, StatusBarC } from '../../components/index'
import {
    SafeAreaProvider,
    SafeAreaView,
    Edge,
} from 'react-native-safe-area-context';

import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const { width, height } = Dimensions.get('window');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.45);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 2 / 1.38);

const FirstRoute = () => (
    <View style={[{ height: '100%', paddingHorizontal: 30, paddingVertical: 10,backgroundColor:'#f2f2f2' }]} >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
            <View style={{flex:1,marginRight:20}}>
                <TextInput
                 style={[
                    {
                        paddingHorizontal: 10,
                        backgroundColor:'#fff',
                        paddingVertical: 5,
                        borderRadius: 8,
                        fontWeight: 'bold', 
                        color:'#959595', width: '100%', fontSize: 18, height: 45, }]}
                   
                    onFocus={true}
                    autoCorrect={false}
                    placeholder={'First Name'}
                />
            </View>
            <View style={{flex:1}}>
                <TextInput
                style={[
                    {
                        backgroundColor:'#fff',
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        borderRadius: 8,
                        fontWeight: 'bold', 
                        color:'#959595', width: '100%', fontSize: 18, height: 45, }]}
                   
                    onFocus={true}
                    autoCorrect={false}
                    placeholder={'Last Name'}
                />
            </View>
        </View>
        <View style={{ backgroundColor: '#fff', borderRadius: 8, marginTop: 15 }}>
            <TextInput 
            style={[
                {
                    paddingHorizontal: 10,
                    backgroundColor:'#fff',
                    paddingVertical: 5,
                    borderRadius: 8,
                    fontWeight: 'bold', 
                    color:'#959595', width: '100%', fontSize: 18, height: 45, }]}
               
                onFocus={true}
                autoCorrect={false}
                placeholder={'Email Address'}
            />
        </View>
        <View style={{ backgroundColor: '#fff', borderRadius: 8, marginTop: 15 }}>
            <TextInput 
            style={[
                {
                    paddingHorizontal: 10,
                    backgroundColor:'#fff',
                    paddingVertical: 5,
                    borderRadius: 8,
                    fontWeight: 'bold', 
                    color:'#959595', width: '100%', fontSize: 18, height: 45, }]}
               
                onFocus={true}
                autoCorrect={false}
                placeholder={'Phone Number'}
            />
        </View>
        <View style={{ backgroundColor: '#fff', borderRadius: 8, marginTop: 15 }}>
            <TextInput style={[
                    {
                        paddingHorizontal: 10,
                        backgroundColor:'#fff',
                        paddingVertical: 5,
                        borderRadius: 8,
                        fontWeight: 'bold', 
                        color:'#959595', width: '100%', fontSize: 18, height: 45, }]}
                   
                    onFocus={true}
                    autoCorrect={false}
                placeholder={'Birthday'}
            />
        </View>
        <View style={{ backgroundColor: '#fff', borderRadius: 8, marginTop: 15 }}>
            <TextInput style={[
                    {
                        paddingHorizontal: 10,
                        backgroundColor:'#fff',
                        paddingVertical: 5,
                        borderRadius: 8,
                        fontWeight: 'bold', 
                        color:'#959595', width: '100%', fontSize: 18, height: 45, }]}
                   
                    onFocus={true}
                    autoCorrect={false}
                placeholder={'Gender'}
            />
        </View>
    </View>
);

const SecondRoute = () => (
    
    <View style={[{ height: '100%', paddingHorizontal: 30, paddingVertical: 10,backgroundColor:'#f2f2f2' }]} >
        <View style={{ backgroundColor: '#fff', borderRadius: 8, marginTop: 15 }}>
            <TextInput
                 style={[
                    {
                        paddingHorizontal: 10,
                        backgroundColor:'#fff',
                        paddingVertical: 5,
                        borderRadius: 8,
                        fontWeight: 'bold', 
                        color:'#959595', width: '100%', fontSize: 18, height: 45, }]}
                    autoCorrect={false}
                placeholder={'Address1'}
                 value={''}
            />
        </View>
        <View style={{ backgroundColor: '#fff', borderRadius: 8, marginTop: 15 }}>
            <TextInput 
                 style={[
                    {
                        paddingHorizontal: 10,
                        backgroundColor:'#fff',
                        paddingVertical: 5,
                        borderRadius: 8,
                        fontWeight: 'bold', 
                        color:'#959595', width: '100%', fontSize: 18, height: 45, }]}
                    autoCorrect={false}
                placeholder={'Address2'}
            />
        </View>
        <View style={{ backgroundColor: '#fff', borderRadius: 8, marginTop: 15 }}>
            <TextInput
                 style={[
                    {
                        paddingHorizontal: 10,
                        backgroundColor:'#fff',
                        paddingVertical: 5,
                        borderRadius: 8,
                        fontWeight: 'bold', 
                        color:'#959595', width: '100%', fontSize: 18, height: 45, }]}
                    autoCorrect={false}
                placeholder={'City'}
            />
        </View>
        <View style={{ backgroundColor: '#fff', borderRadius: 8, marginTop: 15 }}>
            <TextInput 
                 style={[
                    {
                        paddingHorizontal: 10,
                        backgroundColor:'#fff',
                        paddingVertical: 5,
                        borderRadius: 8,
                        fontWeight: 'bold', 
                        color:'#959595', width: '100%', fontSize: 18, height: 45, }]}
                    autoCorrect={false}
                placeholder={'State'}
            />
        </View>
        <View style={{ backgroundColor: '#fff', borderRadius: 8, marginTop: 15 }}>
            <TextInput 
                 style={[
                    {
                        paddingHorizontal: 10,
                        backgroundColor:'#fff',
                        paddingVertical: 5,
                        borderRadius: 8,
                        fontWeight: 'bold', 
                        color:'#959595', width: '100%', fontSize: 18, height: 45, }]}
                    autoCorrect={false}
                placeholder={'Pin Code'}
            />
        </View>
        <View style={{ backgroundColor: '#fff', borderRadius: 8, marginTop: 15 }}>
            <TextInput
                 style={[
                    {
                        paddingHorizontal: 10,
                        backgroundColor:'#fff',
                        paddingVertical: 5,
                        borderRadius: 8,
                        fontWeight: 'bold', 
                        color:'#959595', width: '100%', fontSize: 18, height: 45, }]}
                    autoCorrect={false}
                placeholder={'Country'}
            />
        </View>
    </View>
);


const LazyPlaceholder = ({ route }) => (
    <View style={styles.scene}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Loading {route.title}…</Text>
    </View>
);

class MyProfile extends Component {
    static navigationOptions = {
        headerShown: false
    };

    constructor() {
        super();
        this.state = {

            index: 0,
            routes: [
                { key: 'first', title: 'PROFILE' },
                { key: 'second', title: 'MANAGE ADDRESSES' },
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

    viewOrders = () => {
        const navigation = this.props.navigation;
        navigation.navigate("ViewOrders");
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
                            <View style={{ marginTop: 5, backgroundColor: 'grey', paddingVertical: 15 }}>
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
                            <ScrollView
                                contentContainerStyle={styles.contentContainer}
                                alwaysBounceVertical={false}
                            >
                                <View style={{ minHeight: 200, marginBottom: 20 }}>
                                    <TabView
                                        lazy
                                        navigationState={this.state}
                                        renderScene={SceneMap({
                                            first: FirstRoute,
                                            second: SecondRoute,
                                        })}
                                        renderLazyPlaceholder={this._renderLazyPlaceholder}
                                        onIndexChange={this._handleIndexChange}
                                        initialLayout={{ width: Dimensions.get('window').width }}
                                    />
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{ position: 'absolute', bottom: 40, left: 20, right: 20 }}>
                            <TouchableOpacity style={styles.listItemStyle, {
                                backgroundColor: 'grey',
                                paddingHorizontal: 30, paddingVertical: 10, borderRadius: 32, alignItems: 'center', justifyContent: 'center'
                            }}>
                                <View style={styles.textBox}>
                                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Update Profile</Text>
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
        paddingLeft: 0,
        paddingBottom: ITEM_HEIGHT / 2,
        justifyContent: 'flex-start',
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
export default MyProfile;