import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GioiThieu = () => {
  return (
    <ImageBackground source={require('../Img/anh.jpg')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding:50}}>
        <Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>APP Made by Student: Dao Duy Minh Long, the most handsome person in Fpoly</Text>
      </ImageBackground>
  )
}

export default GioiThieu

const styles = StyleSheet.create({})