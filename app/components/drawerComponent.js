import React, { Component } from 'react';
import ReactNative, { Image, TouchableOpacity, View, StyleSheet, FlatList, Text, Modal } from 'react-native';
import { IconX, Icon } from "tnassets/Icons";

import { ScrollView } from 'react-native-gesture-handler';


export default class DrawerCustomComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        // this.fillstate();

    }

    _closeDrawer = (navigation) => {
        this.props.navigation.closeDrawer();
    }

    _Settings = () => {
        //  alert('ok')
        this._closeDrawer();
        this.props.navigation.navigate("Survey")
    }



    _LogOut = async () => {
        await clearAllData();
        this._closeDrawer();
        this.props.navigation.navigate("GetStarted")
    }

    _LanguageSettings = () => {
        this._closeDrawer();
        // this.props.navigation.navigate("Language")
    }
    goToHome = () => {
        this.props.navigation.navigate("Home")
    }
    goToOrders = () => {
        this.props.navigation.navigate("MyOrders");
    }
    goToProfile = () => {
        this.props.navigation.navigate("MyProfile");
    }
    goToContact = () => {
        this.props.navigation.navigate("SelectIssues");
    }
    

    componentWillUnmount() {
        // this.UserResults.removeAllListeners();
    }

    render() {
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
            <View style={{ flex: 1 }} >
                <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#4a9f03', paddingTop: 30 }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 10 }} >
                        <View style={{
                            height: 80, width: 80, borderRadius: 80 / 2, borderColor: '#fff',
                            borderWidth: 2, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center'
                        }}>
                            <View style={{ position: 'absolute', alignSelf: 'center', justifyContent: 'center' }}>
                                {profileImage}
                            </View>
                            {/* <Image style={{width:'100%',backgroundColor:'grey',height:'100%',borderRadius:80/2,}}>
                                
                            </Image> */}
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'left', fontSize: 16 }}>Hi,{'\n'}Gurinder Singh</Text>
                            <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'left', fontSize: 14, marginTop: 5 }}>9810018000</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 4, }}>
                    <ScrollView contentContainerStyle={{ flex: 1 }}>
                        {/* <DrawerItems {...this.props} /> */}
                        <View style={{ margibTop: 15, paddingLeft: 10, flex: 1 }}>
                            <TouchableOpacity style={styles.listItemStyle} onPress={() => this.goToHome()}>
                                <View style={styles.textBox}>
                                    <Text style={styles.Text}>{'Home'}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.listItemStyle} onPress={() => this.goToProfile()}>
                                <View style={styles.textBox}>
                                    <Text style={styles.Text}>{'Your Account'}</Text>
                                </View>
                            </TouchableOpacity>
                            {/* <TouchableOpacity style={styles.listItemStyle} onPress={() => this.goToOrders()}>
                                <View style={styles.textBox}>
                                    <Text style={styles.Text}>{'Your Orders'}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.listItemStyle} onPress={() => this.goToWishList()}>
                                <View style={styles.textBox}>
                                    <Text style={styles.Text}>{'Wishlist'}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.listItemStyle}>
                                <View style={styles.textBox}>
                                    <Text style={styles.Text}>{'Notification'}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.listItemStyle} onPress={() => this.goToContact()}>
                                <View style={styles.textBox}>
                                    <Text style={styles.Text}>{'Contact Us'}</Text>
                                </View>
                            </TouchableOpacity> */}

                            <View style={{ position: 'absolute', bottom: 40, left: 20, right: 20 }}>
                                <TouchableOpacity style={styles.listItemStyle, {
                                    backgroundColor: '#e96125',
                                    paddingHorizontal: 30, paddingVertical: 10, borderRadius: 32, alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <View style={styles.textBox}>
                                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>{'Logout'}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: 'center',
    },
    phoneNumberSty: {
        fontSize: 16
    },

    listItemStyle: {
        //    backgroundColor:'yellow',
        padding: 8,
        paddingVertical: 12,
        flexDirection: 'row',
        flexWrap: 'wrap',
        //  justifyContent:'center',
        //  alignItems:'flex-start',
    },
    iconBoxStyle: {
        overflow: "hidden",
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    },
    iconStyle: {
        fontSize: 16,
        color: '#fff',
    },
    textBox: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1,
    },
    Text: {
        fontSize: 16,
        color: 'grey',
        fontWeight: 'bold',
        //  marginLeft:30,

    },
})