import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';

interface CustomTextInputProps {
  borderRadius?: number | string;
  backgroundColor?: string;
  orderStyles?: any;
  placeholder?: string;
  textContentType?: any;
  onChangeText?: (text: string) => void;
  onBlur?: () => void;
  value?: string;
  padding?: number | string;
  secureTextEntry?: boolean;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  borderRadius = 5,
  backgroundColor = Colors.background,
  orderStyles = {},
  placeholder = '',
  textContentType = 'none',
  onChangeText,
  onBlur,
  value,
  padding = 10,
  secureTextEntry = false,
}) => {
  return (
    <View style={[styles.container, { borderRadius, backgroundColor,...orderStyles }]}>
      <TextInput
        placeholder={placeholder}
        textContentType={textContentType}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        style={[
          styles.textInputBox,
        //   { fontSize: 20, color: Colors.text, padding },
        ]}
        secureTextEntry={secureTextEntry}
        // keyboardType={keyboardType}
        // multiline={multiline}
        // maxLength={maxLength}
        // placeholderTextColor={Colors.mediumDark}
        // onFocus={onFocus}
        // editable={editable}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
    container:{
        width:'100%', 
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor:Colors.lightGrey,
        overflow:'hidden'
        // paddingVertical:'4%',
        // paddingHorizontal:'2%'
    },
        textInputBox:{
        flex:1,
        // marginHorizontal:10,
        fontSize:16,
        // backgroundColor:'red',
        padding:'4%'
    }
    });