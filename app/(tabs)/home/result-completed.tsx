import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '@/components/CustomText'
import CustomButton from '@/components/CustomButton'
import CustomSeparator from '@/components/CustomSeparator'
import { router } from 'expo-router'
import { Colors } from '@/constants/Colors'

const ResultCompleted = () => {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/Man with a prosthetic arm collected an order.png')}/>
      
      <CustomSeparator height={'3%'}/>
      <CustomText>Your result is been completed</CustomText>

      <CustomSeparator height={'8%'}/>
      <CustomButton style={{width:'90%'}} onPress={()=>{
        router.navigate({ pathname: '/home/result', params: { id: 'imageUrl' } })
      }}>Proceed to view results</CustomButton>
    </View>
  )
}

export default ResultCompleted

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Colors.background,
    padding:'10%'
  }
})