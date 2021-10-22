import React  from 'react';
import {View, Text, StyleSheet} from 'react-native';


export const Item =(props)=>{
    return(
      <View style={style.container}>
        <Text>{props.text}</Text>
        </View>
    )
  }

  const style = StyleSheet.create({
      container: {
          padding:10,
          backgroundColor: 'lightblue',
          borderBottomColor: 'black',
          borderBottomWidth:1,
      },
  })