import CustomText from '@/components/CustomText'
import CustomTextInput from '@/components/CustomTextInput'
import { Colors } from '@/constants/Colors'
import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Alert, View,Platform } from 'react-native';
import { Formik } from 'formik';

import CustomButton from '@/components/CustomButton'
import axios from 'axios';
import useFirebase from '../hooks/useFirebase'
import CustomSeparator from '@/components/CustomSeparator'
import useApi from '../hooks/useApi';
import resgister from '../api/register'
import { router } from 'expo-router';
import useAuth from '@/auth/useAuth';

function SignUp() {
  const [active, setActive] = useState<boolean>(false);
  const {logIn,user} =useAuth();
  const registerApi =useApi(resgister.register)


  async function handleSubmit({email,password,username}:any):Promise<void>{
    setActive(true);
    const result = await registerApi.request({email:email.trim(),username:username.trim(),password:password.trim()});
    if(!result.ok){
      setActive(false);
      return;
    };
    logIn(result.data);
  }
  return (
    <View style={{flex:1, backgroundColor:Colors.background}}>
        <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center',paddingVertical:'10%',width:'100%'}}>
          <ScrollView style={{width:'90%'}}>
            <CustomSeparator height={'20%'}/>
            <CustomText style={{fontWeight:'700',fontSize:25}}>Let's create your <CustomText style={{color:Colors.bg_second,fontWeight:'700',fontSize:25}}>account!</CustomText></CustomText>

            <CustomSeparator height={20}/>
            {/* Form */}
            <Formik
          initialValues={{username:"",email:"", password:""}}
          // validationSchema={ReviewSchema}
          onSubmit={handleSubmit}
          >
            {(props)=>(<>
              <CustomText>Username</CustomText>
            <View>
            <CustomTextInput 
            placeholder='enter your username' 
            onChangeText={props.handleChange('username')}
            // onBlur={props.handleBlur('username')}
            value={props.values.username}
            // touched={props.touched.username}
            orderStyles={{marginTop:10}}/>
            </View>
            <CustomSeparator height={20}/>
            
            <CustomText>Email</CustomText>
            <View>
            <CustomTextInput 
            placeholder='enter your email' 
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
            children={'SignUp'} 
            active={active}
            />
            
            <CustomSeparator height={'8%'}/>
            <CustomText>Already have an account ? <CustomText style={{color:Colors.bg_second}}
            
            onPress={()=>router.navigate('/login')}>Sign In</CustomText></CustomText>

            </>)}</Formik>
            

          

          </ScrollView>
        </SafeAreaView>
    </View>
  )
}

export default SignUp