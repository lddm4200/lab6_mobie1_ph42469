import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import MyHeader from './MyHeader'

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
                <MyHeader />
                <DrawerItemList {...props} />
               
              </DrawerContentScrollView>
   
  )
}

export default CustomDrawerContent

const styles = StyleSheet.create({})