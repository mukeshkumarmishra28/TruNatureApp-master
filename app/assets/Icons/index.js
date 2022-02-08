
import React from 'react';

import SvgIcon from 'react-native-svg-icon';
import svgs from '../Icons/Svg/Svgs';
// import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconZocial from 'react-native-vector-icons/Zocial';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

 
 toLowerCaseKeys=(obj)=>{
    return Object.keys(obj).reduce(function(accum,key){
       accum[key.toLowerCase()] = obj[key];
       return accum
    },{});
 }
const keySrc =  toLowerCaseKeys(svgs);
const IconCustom = (props) => <SvgIcon {...props} svgs={keySrc} />;


 svgIcon = (nameX) =>{
    let svgIconName
    const key  = nameX.toLowerCase().trim();
    if (keySrc[key] !== undefined){
           svgIconName = key
      }else{
           svgIconName = 'blank'
      }
      return svgIconName;
  } 

const IconX = (props)=>{
   
      let iconName = props.name ? svgIcon(props.name) :'blank';
     
    return(
           
          <IconCustom
                        name = {iconName}   
                        fill ={props.color}
                        height ={props.size} 
                        width= {props.size} 
                       // {...props}
                    /> 
          
           )
}


//  const myIcon =  (props)  = <Icon name="rocket" size={30} color="#900" />;

const  IconZ = (props) => {
  
const    name = props.name;
const    size = props.size;
const    color = props.color;

const  default_color = '#171717';
const  default_size = 24;

    if (props.type === 'CustomIcon') {
        let iconName = props.name ? svgIcon(props.name) :'blank';
        return ( <IconCustom
            name = {iconName}   
            fill ={props.color}
            height ={props.size} 
            width= {props.size} 
            // {...props}
        /> )
    }else if (props.type === 'FontAwesome') {
        return (<IconFontAwesome name={name} size={size ? size : default_size} color={color ? color : default_color} />)
    }else if (props.type === 'FontAwesome5') {
        return (<FontAwesome5 name={name} size={size ? size : default_size} color={color ? color : default_color} />)
    } else if (props.type === 'Ionicons') {
        return (<IconIonicons name={name} size={size ? size : default_size} color={color ? color : default_color} />)
    } else if (props.type === 'AntDesign') {
        return (<IconAntDesign name={name} size={size ? size : default_size} color={color ? color : default_color} />)
    } else if (props.type === 'EvilIcons') {
        return (<IconEvilIcons name={name} size={size ? size : default_size} color={color ? color : default_color} />)
    } else if (props.type === 'Foundation') {
        return (<IconFoundation name={name} size={size ? size : default_size} color={color ? color : default_color} />)
    } else if (props.type === 'MaterialIcons') {
        return (<IconMaterialIcons name={name} size={size ? size : default_size} color={color ? color : default_color} />)
    } else if (props.type === 'MaterialCommunityIcons') {
        return (<IconMaterialCommunityIcons name={name} size={size ? size : default_size} color={color ? color : default_color} />)
    } else if (props.type === 'Zocial') {
        return (<IconZocial name={name} size={size ? size : default_size} color={color ? color : default_color} />)
    } else if (props.type === 'SimpleLineIcons') {
        return (<IconSimpleLineIcons name={name} size={size ? size : default_size} color={color ? color : default_color} />)
    }else if (props.type === 'Octicons') {
        return (<IconOcticons name={name} size={size ? size : default_size} color={color ? color : default_color} />)
    }else if (props.type === 'Entypo') {
        return (<IconEntypo name={name} size={size ? size : default_size} color={color ? color : default_color} />)
    }else if (props.type === 'Feather') {
        return (<IconFeather name={name} size={size ? size : default_size} color={color ? color : default_color} />)
    }else {
        return (<IconIonicons name={name} size={size ? size : default_size} color={color ? color : default_color} />)
    }

}; 
const Icon = (props)=>{
    return( <IconZ {...props} />)
}

export   {IconX ,Icon};





