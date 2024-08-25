import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '@/components/CustomText'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Colors } from '@/constants/Colors';
import CustomListCard from '@/components/CustomListCard';
import CustomSeparator from '@/components/CustomSeparator';

const History = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center',width:'100%'}}>
      <ScrollView style={{width:'90%'}} contentContainerStyle={{justifyContent:'center',alignItems:'center',}}>
      <CustomSeparator height={'20%'}/>
      <CustomListCard/>
      <CustomListCard/>
      <CustomListCard/>
      <CustomListCard/>
      <CustomListCard/>
      </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default History

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:Colors.background
  }
})