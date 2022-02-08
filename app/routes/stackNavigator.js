
import React from "react";
import { Image, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "tnassets/Icons";
import ProductList from "../screens/Products/productList";
import AddProducts from "../screens/Products/addProducts";
import AddSupplier from "../screens/Suppliers/addSupplier";
import AddCustomer from "../screens/Customers/addCustomer";
import ProductDetails from "../screens/Products/productDetails";
import ProductGrid from "../screens/Products/productGrid";
import MyOrders from '../screens/Orders/myOrders';
import OrderDetails from '../screens/Orders/orderDetails';
import MyProfile from '../screens/MyAccount/profile';
import SelectIssues from '../screens/ContactUs/selectIssues';
import WriteToUs from '../screens/ContactUs/writeToUs';
import SignIn from '../screens/MyAccount/signIn';

import { Login, Home, Search, MyID, ServiceRequest, News, Survey } from "../screens";

import { productList } from "products/productList";
function LogoTitle() {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <TouchableOpacity>
        <Image
          style={{ width: 40, height: 40, borderRadius: 20 }}
          source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }}
        />
      </TouchableOpacity>
      <View style={{ alignItems: 'flex-end', }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Icon name={'search'} color={'#3f57d3'} type={'EvilIcons'} />
          <View style={{ marginLeft: 5 }}>
            <Icon name={'bell'} color={'#3f57d3'} type={'FontAwesome'} />

          </View>
        </View>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}
    >
      <Stack.Screen name="Home" component={Home}
        options={{
          headerShown: false

        }}
      />
      <Stack.Screen name="ProductList" component={ProductList}
        options={{
          headerShown: false

        }} />
         <Stack.Screen name="AddProducts" component={AddProducts}
          options={{
          headerShown: false

        }} />
           <Stack.Screen name="AddSupplier" component={AddSupplier}
          options={{
          headerShown: false

        }} />
            <Stack.Screen name="AddCustomer" component={AddCustomer}
          options={{
          headerShown: false

        }} />
      <Stack.Screen name="ProductDetails" component={ProductDetails}
        options={{
          headerShown: false

        }} />
      <Stack.Screen name="ProductGrid" component={ProductGrid}
        options={{
          headerShown: false

        }} />
      <Stack.Screen name="MyOrders" component={MyOrders}
        options={{
          headerShown: false
        }} />
      <Stack.Screen name="OrderDetails" component={OrderDetails}
        options={{
          headerShown: false
        }} />
         <Stack.Screen name="MyProfile" component={MyProfile}
        options={{
          headerShown: false
        }} />
         <Stack.Screen name="SelectIssues" component={SelectIssues}
        options={{
          headerShown: false
        }} />
             <Stack.Screen name="WriteToUs" component={WriteToUs}
        options={{
          headerShown: false
        }} />
          <Stack.Screen name="SignIn" component={SignIn}
        options={{
          headerShown: false
        }} />
    </Stack.Navigator>
    
  );
}

const RequestStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Request" component={ServiceRequest} />

    </Stack.Navigator>
  );

}
const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}
const MyIdStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="MyId" component={MyID} />
    </Stack.Navigator>
  );
}
const NewsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="News" component={News} options={{
        headerShown: false

      }}
      // options={{ headerTitle: props => <LogoTitle {...props} /> }}
      />

    </Stack.Navigator>
  );
}

const SurveyStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} screenOptions={{
      headerShown: false,
      title: 'Survey'
    }}>
      <Stack.Screen name="Survey" component={Survey} />

    </Stack.Navigator>
  );
}

const ProductListNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductList" component={ProductList} />
    </Stack.Navigator>
  );
}

export {
  MainStackNavigator, RequestStackNavigator, SearchStackNavigator, MyIdStackNavigator, LoginStackNavigator,
  ProductListNavigator,
  NewsStackNavigator, SurveyStackNavigator
};