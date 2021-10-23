import React  from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';


export const Item =(props)=>{
    const deleteItem =(id) => {
        props.delete(id)
    }
    return(
      <View style={style.container}>
        <Text style={style.text}>{props.text}</Text>
        <Button title="Delete" onPress={ ()=>deleteItem(props.id)}/>
        </View>
    )
  }

  const style = StyleSheet.create({
      container: {
          padding:10,
          backgroundColor: 'lightblue',
          borderBottomColor: 'black',
          borderBottomWidth:1,
          display:"flex",
          flexDirection:"row",
          alignItems:"center",
      },
      text:{
          flex:1,
      },
  })