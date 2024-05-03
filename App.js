import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './src/screens/Menu';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import Makanan from './src/screens/Makanan';
import Profil from './src/screens/Profil';
import Promo from './src/screens/Promo';
export default function App() {

  const Tabs = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Beranda" component={Menu} options={{tabBarIcon: ({color, size}) => (
          <Ionicons name='home' color={color} size={size}/>
        )}}/>
        <Tabs.Screen name="makanan" component={Makanan} options={{tabBarIcon: ({color, size}) => (
          <Ionicons name='fast-food' color={color} size={size}/>
        )}}/>
        <Tabs.Screen name="promo" component={Promo} options={{tabBarIcon: ({color, size}) => (
          <Ionicons name='pricetag' color={color} size={size}/>
        )}}/>
        <Tabs.Screen name="profil" component={Profil}  options={{tabBarIcon: ({color, size}) => (
          <Ionicons name='person' color={color} size={size}/>
        )}}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
