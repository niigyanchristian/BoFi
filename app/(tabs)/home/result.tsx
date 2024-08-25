import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '@/components/CustomText'
import { Colors } from '@/constants/Colors'
import CustomSeparator from '@/components/CustomSeparator'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'

const Result = () => {
  return (
    <View style={styles.container}>
        <CustomText style={{fontWeight:'700',width:'100%',marginBottom:'3%',fontSize:25,textAlign:'left'}}>Result</CustomText>
        <View style={{width:'100%',height:'40%',backgroundColor:Colors.bg_second,justifyContent:'center',alignItems:'center'}}>
        <CustomText style={{color:Colors.background}}>NO NEONATAL
        JAUNDICE</CustomText>
        </View>

        <CustomSeparator height={'10%'}/>    
        <CustomText>This result is based on our AI Model as well as
        the picture you have provided us</CustomText>
        <CustomSeparator height={'10%'}/>    
        <CustomButton onPress={()=>{
            router.navigate('/home/history')
        }}>History</CustomButton>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.background,
        padding:'10%'
    }
})