import { StyleSheet, Text, View,DimensionValue } from 'react-native'
import React, { useEffect, useState } from 'react'
// import UploadScreen from '@/components/UploadScreen';
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";
import { Colors } from '@/constants/Colors';
import CustomText from '@/components/CustomText';
import { router } from 'expo-router';


const processing = () => {
    const [count,setCount]=useState<number>(0);
    const [loaingCount,setLoaingCount]=useState<number>(1);
    const [done,setDone]=useState<boolean>(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setLoaingCount((prevLoaingCount) => (prevLoaingCount < 3 ? prevLoaingCount + 1 : 1));
          setCount((prevCount) => {
            const newCount = prevCount + 0.1;
            if (newCount >= 100) {
              setDone(true);
            }
            return newCount;
          });
        }, 3000);
      
        return () => clearInterval(intervalId);
      }, []);

      
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