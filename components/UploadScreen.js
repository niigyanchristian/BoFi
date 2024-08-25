// import React from "react";
// import { View, StyleSheet, Modal } from "react-native";
// import * as Progress from "react-native-progress";
// import LottieView from "lottie-react-native";

// import { Colors } from "@/constants/Colors";

// function UploadScreen({ onDone, progress = 0, visible = false }) {

//   return (
//     <Modal visible={visible}>
//       <View style={[styles.container,{backgroundColor:Colors.background}]}>
//         {progress < 1 ? (
//           <Progress.Bar
//             color={Colors.bg_second}
//             progress={progress}
//             width={200}
//           />
//         ) : (
//           <LottieView
//             autoPlay
//             loop={false}
//             onAnimationFinish={onDone}
//             source={require("../assets/animations/03IsZkzp6Q.json")}
//             style={[styles.animation,{backgroundColor:Colors.background}]}
//           />
//         )}
//       </View>
//     </Modal>
//   );
// }

// const styles = StyleSheet.create({
//   animation: {
//     width: 250,
//   },
//   container: {
//     alignItems: "center",
//     flex: 1,
//     justifyContent: "center",
//   },
// });

// export default UploadScreen;
