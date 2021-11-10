import React from "react"
import { View, Text, StyleSheet, Button,Image,TouchableOpacity } from "react-native"
export const Item =(props) =>{

    
    return(
        <View style={styles.container}>
            <Text style={(props.status) ? styles.textDone : styles.text}>{props.text}</Text>
            <TouchableOpacity onPress ={ ()=> props.done(props.id)}>
                <Image style={styles.icon} source ={require('../assets/check-solid.png') }/>
            </TouchableOpacity>
            <TouchableOpacity onPress ={ ()=> props.delete(props.id)}>
                <Image style={styles.icon} source ={require('../assets/trash-alt-solid.png') }/>
            </TouchableOpacity>
            {/* <Button title="delete" onPress={ ()=> props.delete(props.id)}/> */}
            {/* <Button title="done" onPress ={ ()=> props.done(props.id)}/> */}
        </View>
    )
}

  const styles = StyleSheet.create({
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
          color:"black",
      },
      textDone:{
          flex:1,
          textDecorationLine:"line-through",
          color:"gray",
      },
      icon:{
          width:30,
          height:30,
      }
  })