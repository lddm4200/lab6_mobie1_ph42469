 import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import TrangChu from './Screen/TrangChu';
import GioiThieu from './Screen/GioiThieu';
import MyHeader from './Screen/MyHeader';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomDrawerContent from './Screen/CustomDrawerContent';
import Detail from './Screen/Detail';
import Chat from './Screen/Chat';
import Setting from './Screen/Setting';
import Help from './Screen/help';


 
const App = () => {
 

  const DrawerDEMO = createDrawerNavigator();

  const Stack = createNativeStackNavigator();
  const MyDrawer = ()=> {
    return (
      <DrawerDEMO.Navigator initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <DrawerDEMO.Screen options={{
          drawerIcon:({ focused, color, size })=>(
            <Image style={{width:20,height:20}} source={require('./Img/home.png')}/>
          )}} name="Home" component={TrangChu} />
        <DrawerDEMO.Screen options={{
          drawerIcon:({ focused, color, size })=>(
            <Image style={{width:20,height:20}} source={require('./Img/artile.png')}/>
          )}} name="Artice" component={GioiThieu} />
          <DrawerDEMO.Screen options={{
          drawerIcon:({ focused, color, size })=>(
            <Image style={{width:20,height:20}} source={require('./Img/chat.png')}/>
          )}} name="Chat" component={Chat} />
          <DrawerDEMO.Screen options={{
          drawerIcon:({ focused, color, size })=>(
            <Image style={{width:20,height:20}} source={require('./Img/settings.png')}/>
          )}} name="Setting" component={Setting} />
          <DrawerDEMO.Screen options={{
          drawerIcon:({ focused, color, size })=>(
            <Image style={{width:20,height:20}} source={require('./Img/help.png')}/>
          )}} name="Help" component={Help} />
      </DrawerDEMO.Navigator>
    );
   }
  
   

  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen options={{headerShown:false}}  name='Tragchu' component={MyDrawer} />
    <Stack.Screen options={{headerShown:false}}  name='home' component={TrangChu} />
    <Stack.Screen options={{headerShown:false}}  name='chiTiet' component={Detail} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})