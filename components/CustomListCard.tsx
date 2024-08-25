import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const CustomListCard = () => {
  return (
    <TouchableOpacity
      style={styles.container}
    >
    <View>
      <CustomText style={{ fontSize: 18, fontWeight: '500' }}>Scanned an eye</CustomText>
      <CustomText style={{color:'#A3A3A3'}}>20th April</CustomText>
    </View>
    <MaterialCommunityIcons name="format-list-text" size={24} color="black" />
  </TouchableOpacity>
  )
}

export default CustomListCard

const styles = StyleSheet.create({
    container:{
        width: '99%',
        padding: '5%',
        marginVertical:'2%',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 4,
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.2,
        shadowRadius: 1,
        backgroundColor: 'white',
      }
})