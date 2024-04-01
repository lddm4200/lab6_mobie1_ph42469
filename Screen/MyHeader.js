import { StyleSheet, Text, View,Image, ImageBackground } from 'react-native'
import React from 'react'

const MyHeader = () => {
  return (
    <ImageBackground source={require('../Img/logoo.webp')} style={{height: 150, width:'100%'}}>
    <Text style={{textAlign:'center',fontSize:20,color:'white', marginTop:110,fontWeight:'bold'}}>Đào Duy MInh Long</Text>
  </ImageBackground>
  )
}

export default MyHeader

const styles = StyleSheet.create({})