import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import { useRoute } from '@react-navigation/native';
import { Colors } from '@/constants/Colors';
import CustomText from '@/components/CustomText';
import CustomButton from '@/components/CustomButton';
import CustomSeparator from '@/components/CustomSeparator';

const Confirm = () => {
  const route = useRoute();
  const { id }:any = route.params;

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center',padding:'5%'}}>
      <View style={{width:'90%'}}>
        <CustomText>Please make sure you have a better images before you proceed, this enhances the quality of our system</CustomText>


        <View style={{width:'100%',height:'30%',marginVertical:'10%',borderRadius:10,overflow:'hidden'}}>
          <ImageBackground resizeMode='cover' style={{width:'100%',height:'100%'}} source={{uri:id}}/>
        </View>
        
        <CustomButton onPress={()=>{router.navigate('/home/processing')}}> Proceed</CustomButton>
        <CustomSeparator height={'8%'}/>
        <CustomButton background={Colors.background} onPress={()=>router.back()}> Retake</CustomButton>
    </View>
    </SafeAreaView>
    </View>
  )
}

export default Confirm;

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.background,
    flex:1
}
});