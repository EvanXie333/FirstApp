import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants'
import {Item} from './components/Item'




export default function App() {
  const AppData =[
    { id: "1", name: "Apple"},
    { id: "2", name: "Orange"},
    { id: "3", name: "Banana"},
    { id: "4", name: "Blueberry"},
    { id: "5", name: "Tomato"},
  ]


  const Renderer =({item}) => (<Item text = {item.name}/>)

  return (
    <View style={styles.container}>
      <Text>Hello there! This is a first app!</Text>
      <FlatList data ={AppData} keyExtractor={(item =>item.id)} renderItem={Renderer}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
});
