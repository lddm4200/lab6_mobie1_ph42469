import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Detail = ({route,navigation}) => {
    const {name,id} = route.params;
  return (
    <View style={{padding:20}}>
    <Text style={styles.text}>Chao ban, {name}</Text>
      <Text style={styles.text}>Id cua ban la: {id}</Text>

      <Button title='Trở lại bằng goBack()' onPress={()=>navigation.goBack()}/>
      <Button title='Trở lại bằng reset' onPress={()=>navigation.reset({route:[{name:'home'}]})}/>
      <Button title='Trở lại bằng pop' onPress={()=>navigation.pop()}/>
      <Button title='Trở lại bằng popToTop' onPress={()=>navigation.popToTop()}/>
    </View>
  )
}

export default Detail

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
      }
})