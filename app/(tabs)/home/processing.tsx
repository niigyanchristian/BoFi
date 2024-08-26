import { StyleSheet, Alert, View,DimensionValue } from 'react-native'
import React, { useEffect, useState } from 'react'
// import UploadScreen from '@/components/UploadScreen';
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";
import { Colors } from '@/constants/Colors';
import CustomText from '@/components/CustomText';
import { router } from 'expo-router';
import { useRoute } from '@react-navigation/native';
import useFirebase from '@/hooks/useFirebase';

const processing = () => {
    const [count,setCount]=useState<number>(0);
    const [loaingCount,setLoaingCount]=useState<number>(1);
    const [done,setDone]=useState<boolean>(false);
    const route = useRoute();
    const { imageUrl : image_url }:any = route.params;


    useEffect(() => {
        // const intervalId = setInterval(() => {
        //   setLoaingCount((prevLoaingCount) => (prevLoaingCount < 3 ? prevLoaingCount + 1 : 1));
        //   setCount((prevCount) => {
        //     const newCount = prevCount + 0.1;
        //     if (newCount >= 100) {
        //       setDone(true);
        //     }
        //     return newCount;
        //   });
        // }, 3000);
      
        // return () => clearInterval(intervalId);
      }, []);

      const uploadImage = async (): Promise<void> => {
        if (image_url) {
          const imageUrl = await useFirebase().uploadImage(image_url,'images');
          console.log('====================================');
          console.log(imageUrl);
          console.log('====================================');
        //   try {
        //     const response = await fetch('http://172.20.10.4:3000/predict', {
        //       method: 'POST',
        //       headers: {
        //         'Content-Type': 'application/json', 
        //       },
        //       body: JSON.stringify({ image_url: imageUrl }),
        //     });
    
        //     console.log("response=>",response);
        //     // Alert.alert('Prediction', `Result: ${response}`);
        //   } catch (error:any) {
        //     console.error('Error uploading image:', error);
        //     Alert.alert('Upload failed', 'There was an error uploading the image.');
        //   }
        } else {
          Alert.alert('No image selected', 'Please select an image first.');
        }
      };

      
  return (
    <View style={styles.container}>
      {count < 1 ? (
        <><Progress.Circle 
        color={Colors.bg_second}
        progress={count}
        size={250}
        unfilledColor={'#99bbee'}
        borderColor={'#fff'}
        style={{position:'relative'}}
    >
    <CustomText style={{ position: 'absolute', top: '50%', left: '28%'}}>
{`${Math.floor(count * 100)}%`}
</CustomText>
    </Progress.Circle>
    <CustomText style={{marginTop:'10%', width:'70%',textAlign:'center',}}>Please wait while your results is been processed</CustomText></>
      ):(<LottieView
        autoPlay
        loop={false}
        onAnimationFinish={()=>{
            router.navigate({ pathname: '/home/result-completed', params: { id: 'imageUrl' } })
        }}
        source={require("@/assets/animations/03IsZkzp6Q.json")}
        style={[styles.animation]}
      />)}
        

            

            
    </View>
  )
}

export default processing

const styles = StyleSheet.create({
    animation: {
        width: 250,
        height:200
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.background
        
    }
})