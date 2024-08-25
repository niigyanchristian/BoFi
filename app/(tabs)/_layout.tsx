import { Colors } from '@/constants/Colors';
import {FontAwesome,SimpleLineIcons} from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown:false,tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color,focused }) => <SimpleLineIcons name="camera" size={24} color={focused?Colors.bg_second:color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color,focused }) => <FontAwesome size={28} name="cog" color={focused?Colors.bg_second:color} />,
        }}
      />
    </Tabs>
  );
}