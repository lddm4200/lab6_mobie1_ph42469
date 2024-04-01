import { FlatList, StyleSheet, Text, View,Image ,ScrollView, Touchable, TouchableOpacity, TextInput, Button, Alert} from 'react-native'
import React, { useState } from 'react'


const TrangChu = ({navigation}) => {
  const [hoTen, sethoTen] = useState('')
  const [id, setid] = useState('')

  return (
    <View style={{justifyContent:'center',padding:10}}>
    <Text style={styles.text}>Chào bạn đây là màn hình chính</Text>
    <TextInput style={styles.input} placeholder='Nhap id' onChangeText={(txt)=>setid(txt)}/>
    <TextInput style={styles.input} placeholder='Nhap ho ten' onChangeText={(txt)=>sethoTen(txt)}/>
    <Button title='Đi tới màn hình chi tiết' onPress={()=>{
      if(hoTen.trim()!=""&&id.trim()!=""){
      navigation.navigate('chiTiet',{name:hoTen,id:id})
      }else{
        Alert.alert("Nhap day du")
      }
    }}/>
</View>
  )
}

export default TrangChu

const styles = StyleSheet.create({
  input:{
    borderRadius:10,
    borderWidth:1,
    margin:10,
    height:45,
    padding:10
  }, text:{
    fontSize:20,
    color:'blue',
    fontWeight:'bold',
    textAlign:'center',
    marginTop:240
  }
})