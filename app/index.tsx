import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import CustomButton from '@/components/CustomButton'
import { useRouter } from 'expo-router'
import CustomSeparator from '@/components/CustomSeparator'

const index = () => {

  const router = useRouter();

  return (
    <View style={{flex:1,justifyContent:'flex-end',alignItems:'center',padding:'10%',backgroundColor:Colors.bg_second}}>

      {/* Image */}
      <View style={{width:'80%',height:'50%',marginBottom:'40%'}}>
        <Image resizeMode='contain' style={{width:'100%',height:'100%'}} source={require('../assets/images/Doctor rushing to the patient.png')}/>
      </View>

      {/* Button */}
      {/* <CustomButton background={Colors.background} 
      onPress={()=>router.navigate('/signup')}>Sign Up</CustomButton> */}

      <CustomSeparator height={20}/>
      <CustomButton background={Colors.background} 
      onPress={()=>router.replace('/login')}>Sign In</CustomButton>
      <CustomSeparator height={20}/>
    </View>
  )
}

export default index