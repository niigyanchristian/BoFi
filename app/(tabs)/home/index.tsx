import { View, Alert, Platform, StyleSheet, TouchableOpacity, ImageBackground, Image, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import * as ImagePicker from 'expo-image-picker';

import CustomText from '@/components/CustomText';
import CustomSeparator from '@/components/CustomSeparator';
import { Colors } from '@/constants/Colors';
import useFirebase from '../../../hooks/useFirebase'
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router'

const Home = () => {
  const router =useRouter();

  const pickImage = async (): Promise<void> => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission required', 'Camera roll permissions are needed to select an image!');
        return;
      }
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      navigateToConfirm(result.assets[0].uri);
    }
  };

  let openCameraPickerAsync = async () => {

    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchCameraAsync();  
    if (pickerResult.canceled === true) {
      return;
    }
    navigateToConfirm(pickerResult.assets[0].uri)
  };


  function navigateToConfirm(imageUrl:any):void{
    router.navigate({ pathname: '/home/confirm', params: { imageUrl: imageUrl } });
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center',padding:'5%'}}>
      <ScrollView style={{width:'90%'}}>
      <CustomSeparator height={'30%'}/>
      <CustomText style={{fontSize:20, fontWeight:'700'}}>Welcome <CustomText style={{color:Colors.bg_second,fontSize:20, fontWeight:'700'}}>Macbeth!</CustomText></CustomText>
      
      <CustomSeparator height={20}/>
      <CustomText style={{width:'80%'}}>To start using BoFi,capture or upload image
      from your phone</CustomText>

      <CustomSeparator height={20}/>
      <TouchableOpacity 
      onPress={openCameraPickerAsync}
      style={{borderWidth:1, borderStyle:'dashed',height:'60%',justifyContent:'center',alignItems:'center',borderColor:Colors.lightGrey}}>
      <SimpleLineIcons name="camera" size={50} color={Colors.deepGrey} />
      <CustomText style={{fontSize:16,color:Colors.deepGrey}}>Capture from camera</CustomText>
      </TouchableOpacity>



      <CustomSeparator height={20}/>
      <TouchableOpacity 
      onPress={pickImage}
      style={{borderWidth:1, borderStyle:'dashed',height:'60%',justifyContent:'center',alignItems:'center',borderColor:Colors.lightGrey}}>
        <SimpleLineIcons name="cloud-upload" size={50} color={Colors.deepGrey} />
        <CustomText style={{fontSize:16,color:Colors.deepGrey}}>Capture from camera</CustomText>
      </TouchableOpacity>
      
      </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default Home;

const styles =StyleSheet.create({
    container:{
        backgroundColor:Colors.background,
        flex:1
    }
})