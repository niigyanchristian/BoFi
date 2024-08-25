import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Homelayout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name='index'/>
      <Stack.Screen name='confirm'/>
      <Stack.Screen name='processing'/>
      <Stack.Screen name='result-completed'/>
      <Stack.Screen name='result'/>
    </Stack>
  )
}

export default Homelayout

const styles = StyleSheet.create({})