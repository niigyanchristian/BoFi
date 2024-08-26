import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '@/components/CustomButton';
import useAuth from '@/auth/useAuth';

const Settings = () => {
  const {logOut}=useAuth()
  return (
    <View style={styles.container}>
      <Text>Settings</Text>

      <CustomButton onPress={()=>logOut()}>LogOut</CustomButton>
    </View>
  )
}

export default Settings;

const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})