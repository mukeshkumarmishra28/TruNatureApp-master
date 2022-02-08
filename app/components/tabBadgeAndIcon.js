import React, { Component,PureComponent } from "react";
import { View,Text } from "react-native";
import {Icon } from "tnassets/Icons";

   class TabIcon extends PureComponent { 
    render() {
        const { name, color, size, type } = this.props;
      return (
          <View style={{ height: 28, width: 28, justifyContent: 'flex-end', alignItems: 'center' }}>
              <Icon name={name} color={color} size={size || 24} type={type} />
               {this.props.children}
          </View>
      );
    }
  }
   class BadgeIcon extends PureComponent { 
    render() {
       const {count} = this.props
        return (
              <View style={{ height: null, width: null, position: 'absolute', top: 2, right: 8 }}>
                  <View style={{ backgroundColor: 'red', position: 'absolute', height: null, width: null, paddingHorizontal: 4, borderRadius: 8, height: 16, minWidth: 16, justifyContent: 'center', alignItems: 'center' }}>
                      <Text numberOfLines={1} style={{ fontSize: 8, color: '#fff' }} >
                           {this.props.count}
                      </Text>
                  </View>
              </View>
         );
    }
  }
export {BadgeIcon,TabIcon};