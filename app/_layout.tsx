import AuthContext from '@/auth/context';
import { useFonts } from 'expo-font';
import { router, Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import authStorage from '@/auth/storage';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [user,setUser]=useState();
  const [isReady,setIsReady]= useState(false);
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const restoreToken = async ()=>{
    const token = await authStorage.getToken();
     if(!token) return;
     setUser(JSON.parse(token));
   }

   async function prepare() {
     try {
        //  await SplashScreen.preventAutoHideAsync();
         await restoreToken();
     } catch (error) {
         // console.log("Error loading app", error);
     } finally {
         setIsReady(true);
     }
 }
  useEffect(() => {
    prepare();
    if (loaded && isReady) {
      SplashScreen.hideAsync();
      user? router.replace('/(tabs)/home'):null
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthContext.Provider value={{user,setUser }}>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{headerShown:false}}/>
      <Stack.Screen name="login" options={{headerShown:false}}/>
    </Stack>
    </AuthContext.Provider>
  );
}
