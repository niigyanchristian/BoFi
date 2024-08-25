import { Colors } from '@/constants/Colors'
import React from 'react'
import { TouchableOpacity,Text,StyleSheet, ActivityIndicator } from 'react-native'

interface CustomButtonProps{
    children:String,
    background?:any,
    onPress:()=> void,
    style?:any,
    active?:boolean
}

function CustomButton({children,background,onPress,style,active}:CustomButtonProps) {
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={[styles.container,{backgroundColor:background?background:Colors.bg_second,...style}]}>
    {!active&&<Text style={{color:!background?Colors.background:Colors.bg_second,fontWeight:'700',fontSize:18}}>{children}</Text>}
    {active&&<ActivityIndicator size={16} color={Colors.background}/>}
  </TouchableOpacity>
  )
}

export default CustomButton

const styles  = StyleSheet.create({
  container:{
    borderRadius:5,padding:'5%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',
    elevation: 4,
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.2,
        shadowRadius: 1,
        backgroundColor: 'white'
  }
})
