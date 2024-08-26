import CustomText from '@/components/CustomText'
import CustomTextInput from '@/components/CustomTextInput'
import { Colors } from '@/constants/Colors'
import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Alert, View,Platform } from 'react-native';
import { Formik } from 'formik';

import CustomButton from '@/components/CustomButton'
import axios from 'axios';
import useFirebase from '../hooks/useFirebase'
import CustomSeparator from '@/components/CustomSeparator';
import useApi from '../hooks/useApi';
import auth from '../api/auth'
import { router } from 'expo-router';
import useAuth from '@/auth/useAuth';

function SigIn() {
  const [active, setActive] = useState<boolean>(false);
  const {logIn,user} =useAuth();
  
  const loginApi =useApi(auth.login);

  async function handleSubmit({email,password}:any):Promise<void>{
    setActive(true);
    const result = await loginApi.request({email:email.trim(),password:password.trim()});
    if(!result.ok){
      setActive(false);
      return;
    };

    logIn(result.data);
  }
  return (
    <View style={{flex:1, backgroundColor:Colors.background}}>
        <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center',width:'100%'}}>
          <ScrollView style={{width:'90%'}}>
          <CustomSeparator height={'30%'}/>
            <CustomText style={{fontWeight:'700',fontSize:25}}>Let's sign you <CustomText style={{color:Colors.bg_second,fontWeight:'700',fontSize:25}}>In!</CustomText></CustomText>

            <CustomSeparator height={20}/>
            {/* Form */}
            <Formik
          initialValues={{email:"", password:""}}
          // validationSchema={ReviewSchema}
          onSubmit={handleSubmit}
          >
            {(props)=>(<>
              <CustomText>Email</CustomText>
            <View>
            <CustomTextInput 
            placeholder='werty' 
            onChangeText={props.handleChange('email')}
            // onBlur={props.handleBlur('email')}
            value={props.values.email}
            // touched={props.touched.email}
            orderStyles={{marginTop:10}}/>
            </View>
           
            <CustomSeparator height={20}/>
            <CustomText>Password</CustomText>
            <View>
            <CustomTextInput 
            placeholder='enter your password' 
            onChangeText={props.handleChange('password')}
            // onBlur={props.handleBlur('password')}
            value={props.values.password}
            // touched={props.touched.password}
            orderStyles={{marginTop:10}}/>
            </View>


            <CustomSeparator height={'10%'}/>
            <CustomButton 
            onPress={props.handleSubmit} 
            children={'SigIn'} 
            active={active}
            />
            <CustomSeparator height={'8%'}/>
            <CustomText>Don't have an account ? <CustomText style={{color:Colors.bg_second}}
            onPress={()=>router.navigate('/signup')}>Sign Up</CustomText></CustomText>
            
            </>)}</Formik>
            

          

          </ScrollView>
        </SafeAreaView>
    </View>
  )
}

export default SigIn