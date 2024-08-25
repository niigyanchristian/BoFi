import { Colors } from "@/constants/Colors";
import { StyleSheet, Text } from "react-native";

interface CustomTextProps{ 
  children: any; 
  style?: any;
  onPress?:()=>void
}

function CustomText({ children, onPress,style = {} }:CustomTextProps ) {
  return <Text onPress={onPress} style={[styles.constainer,{ ...style}]}>{children}</Text>;
}

export default CustomText;

const styles =StyleSheet.create({
  constainer:{
    fontSize:16,
    color:Colors.text
  }
})