import { View, Text, DimensionValue } from 'react-native'
import React from 'react'

const CustomSeparator = ({height}:{height:DimensionValue}) => {
  return (
    <View style={{width:'100%',height:height}}/>
  )
}

export default CustomSeparator