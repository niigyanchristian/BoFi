import CustomText from '@/components/CustomText'
import CustomTextInput from '@/components/CustomTextInput'
import { Colors } from '@/constants/Colors'
import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Alert, View,Platform } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import CustomButton from '@/components/CustomButton';
import useFirebase from '../hooks/useFirebase'

function predict() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
      setSelectedImage(result.assets[0].uri);
    }
  };

  const uploadImage = async (): Promise<void> => {
    if (selectedImage) {
      const imageUrl = await useFirebase().uploadImage(selectedImage,'images');
      console.log('====================================');
      console.log(imageUrl);
      console.log('====================================');
      try {
        const response = await fetch('http://172.20.10.4:3000/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify({ image_url: imageUrl }),
        });

        console.log("response=>",response);
        // Alert.alert('Prediction', `Result: ${response}`);
      } catch (error:any) {
        console.error('Error uploading image:', error);
        Alert.alert('Upload failed', 'There was an error uploading the image.');
      }
    } else {
      Alert.alert('No image selected', 'Please select an image first.');
    }
  };


  return (
    <View style={{flex:1, backgroundColor:Colors.background}}>
        <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center',paddingVertical:'10%',width:'100%'}}>
          <ScrollView style={{width:'100%'}}>
            <CustomText style={{fontWeight:'700',fontSize:25}}>Let's create an account!</CustomText>

            {/* Form */}
            {/* <CustomText>Email</CustomText>
            <View>
            <CustomTextInput placeholder='werty' orderStyles={{marginTop:10}}/>
            </View> */}

            <CustomButton  background={"red"} onPress={()=>pickImage()} children={"pick"}/>
            <CustomButton  background={"red"} onPress={()=>uploadImage()} children={"Send"}/>

          </ScrollView>
        </SafeAreaView>
    </View>
  )
}

export default predict