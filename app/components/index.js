import React, { Component } from 'react';
import {
    Text, StyleSheet, Dimensions, View, Platform, StatusBar
} from 'react-native';
var width = Dimensions.get('window').width - 40; //full width

export class Label extends Component {
    render() {
        return (
            <Text numberOfLines={this.props.numberOfLines} style={[styles.defaultTextStyle, this.props.style, { fontSize: this.props.FontSize, color: this.props.Color, textAlign: this.props.TextAlign }]}>
                {this.props.children}
            </Text>
        )

    }
}
export class MuteLabel extends Component {
    render() {
        return (
            <Text style={[styles.muteTextStyle, this.props.style, { fontSize: this.props.FontSize, color: this.props.Color }]}>
                {this.props.children}
            </Text>
        )

    }
}
export const StatusBarC = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 20;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
    shadowCard: {
        backgroundColor: 'white', shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: Platform.OS == 'ios' ? 0.2 : 0.8,
        shadowRadius: Platform.OS == 'ios' ? 1 : 8,
        elevation: 5,
    },
    defaultTextStyle:{
        fontSize:14,
        color:'#fff',
    },
    muteTextStyle:{
        fontSize:12,
        color:'#959595',
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    }

});