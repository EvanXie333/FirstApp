import React  from 'react';
import {View, Text} from 'react-native';

export const Item =(props)=>{
    return(
      <View>
        <Text>{props.text}</Text>
        </View>
    )
  }