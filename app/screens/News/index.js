import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, Platform } from "react-native";
import { Icon } from "tnassets/Icons";
//import database from '@react-native-firebase/database';

const { height, width } = Dimensions.get('window');

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      NewsData: [],
    }
  }
  componentDidMount() {
    let arrData=[];
  //  database().ref('/News').on('value', querySnapShot => {
  
  //   querySnapShot.forEach(childSnapshot=>{
  //     var childData = childSnapshot.val();
  //     arrData.push(childData)
  //   })

  //    this.setState({
  //     NewsData:arrData
  //    })
  //  console.log(this.state.NewsData)
  //  });
 }
 render() {
  // console.log(this.state.NewsData)
  return (
    <View style={{ flex: 1, backgroundColor: '#f4f4f4', }}>

<View style={{marginTop:5,justifyContent:'flex-start',flex:1}}>
<ScrollView contentContainerStyle={{flex:1,paddingHorizontal:15}} horizontal={false} showsVerticalScrollIndicator={false} >
  {
    this.state.NewsData.length>0?
    this.state.NewsData.map((item,index) =>(
      <TouchableOpacity key={index} style={{height:100,backgroundColor:'red',}}>
<Text>{item.Title}</Text>
      </TouchableOpacity>
    ))
    :
    null
  }
  

         {
              this.state.NewsData.length>0?
                this.state.NewsData.map((item,index) =>(
                  <TouchableOpacity key={index} style={{ height: 100, paddingTop: 15, borderRadius: 8, paddingHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                      <View>
                        <Text style={{ fontSize: 16, color: '#666' }}>
                            {item.Title}
                        </Text>
                        <Text style={{ fontSize: 12, color: 'grey', marginTop: -2 }}>

                        </Text>
                      </View>
                      <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 16, color: '#666' }}>

                        </Text>
                        <Text style={{ fontSize: 12, color: 'grey', marginTop: 5 }}>

                        </Text>
                      </View>
                    </View>

                  </TouchableOpacity>
               ))
    :
    null
            }
          </ScrollView>
        </View>

        {/* <View style={styles.center}>
        <View>
          <View style={{ height: height / 2, width: '100%' }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
              }}
              source={{ uri: 'https://dubaitravelator.com/wp-content/themes/directorypress/thumbs/expensive-hotels-dubai-1024x576.jpeg' }}
            />
          </View>
          <TouchableOpacity onPress={()=> navigation.goBack()} style={{position:'absolute',top:25,left:10}}> 
          <   Icon name={'left'} color={'#fff'} type={'AntDesign'} size={26}/>
          </TouchableOpacity>
        </View>
        <ScrollView
          scrollEventThrottle={16}
          contentContainerStyle={{ backgroundColor: 'transparent' }}
        >
          <View style={[{ backgroundColor: '#f2f2f2', paddingTop: 15, paddingHorizontal: 10 }]}>
            <View style={{ backgroundColor: '#fff', padding: 10 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                  <Text style={{ fontSize: 16, color: 'grey', lineHeight: 20,fontWeight:'bold' }}>
                    Festival of Lights
                    </Text>
                  <Text style={{ fontSize: 12, color: 'grey', lineHeight: 16,marginTop:2 }}>
                    location
                  </Text>
                </View>
                <View style={{ flex: 2, alignItems: 'flex-end' }}>
                  <Text style={{ fontSize: 14, color: 'grey', lineHeight: 14 }}>
                    Wed, 09 Nov 20
                  </Text>
                  <Text style={{ fontSize: 16, color: 'grey', lineHeight: 20,fontWeight:'bold' }}>
                    5:00 <Text style={{ fontSize: 12 }}>PM  to</Text> 7:00 <Text style={{ fontSize: 12 }}>PM</Text>
                  </Text>
                </View>
              </View>
              <Text style={{ fontSize: 14, color: 'grey', lineHeight: 18 }}>
                Any description about the event can appear here if there is no description then this area will be blank. 
              </Text>
            </View>
          </View>
      
          <View style={{ height: 800 }}>

          </View>
        </ScrollView>
        
      </View>
      <TouchableOpacity onPress={()=> alert()} style={{backgroundColor:'orange', alignItems:'center', borderRadius:16,position:'absolute',bottom:10,left:30,right:30,paddingVertical:10}}>
<Text style={{textTransform:'uppercase',color:'#fff',fontSize:18}}>Register</Text>
</TouchableOpacity> */}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  shadowCard: {
    backgroundColor: 'white', marginBottom: 15, shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: Platform.OS == 'ios' ? 0.2 : 0.8,
    shadowRadius: Platform.OS == 'ios' ? 1 : 8,
    elevation: 5,
  }
});

export default News;