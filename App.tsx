import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Drawer from './src/templates/Drawer';
import React from 'react';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import { MaterialIcons } from '@expo/vector-icons';
import useNavigation from './src/hooks/useNavigation';
import Stack from './src/templates/Stack';
import BottomTabs from './src/templates/BottomTabs';
import TopTabs from './src/templates/TopTabs';


const App:React.FC = () => {

  const items = [
    {
      id: 1,
      name: 'Home',
      screen: Home,
      icon: (props: {color: string}) => <MaterialIcons name='home' size={24} color={props.color} />,
    },
    {
      id: 2,
      name: 'Contact',
      screen: Contact,
      icon: (props: {color: string}) => <MaterialIcons name='call' size={24} color={props.color} />,
    },
    {
      id: 3,
      name: 'About',
      screen: About,
      icon: (props: {color: string}) => <MaterialIcons name='person' size={24} color={props.color} />,
      // counterBadge: 2,
    },
  ];

  const style = {
    backgroundColor: 'red',
    color: 'white',
  }

  
 const {ref, navigate} = useNavigation();

  return (
      // <Drawer items={items} navigationRef={ref} isNested={false}>
      //   <View style={{height: 200, backgroundColor: 'lightgreen'}}>
      //     <View style={{width: 100, backgroundColor: 'white', height: 100, marginTop: 40, marginLeft: 80, borderRadius: 100}}></View>
      //   </View>
      //   <Pressable style={{borderWidth: 1, borderRadius: 10, padding: 20, margin: 10}} onPress={() => navigate('About')}>
      //     <Text>About</Text>
      //   </Pressable>
      //   <Pressable style={{borderWidth: 1, borderRadius: 10, padding: 20, margin: 10}} onPress={() => navigate('Contact')}>
      //     <Text>Contact</Text>
      //   </Pressable>
      //   <Pressable style={{borderWidth: 1, borderRadius: 10, padding: 20, margin: 10}} onPress={() => navigate('Home')}>
      //     <Text>Home</Text>
      //   </Pressable>
      // </Drawer>
      
      // <BottomTabs isNested={false} items={items} headerStyle={{backgroundColor: 'red', color: 'white', textAlign: 'center'}} itemStyle={{activeColor: 'red', color: 'black', marginBottom: 4}} style={{margin: 10, borderRadius: 50, elevation: 10, padding: 5}}  />

      // <TopTabs isNested={false} items={items} indicatorStyle={{backgroundColor: 'red'}} style={{marginTop: 50}}  />
      
      // <Stack isNested={false} items={items} headerStyle={{backgroundColor: 'red', color: 'white', fontWeight: 'bold', textAlign: 'center'}} presentation="modal" />
      
      <Drawer items={items} headerStyle={style}   />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawer: {
    backgroundColor: 'blue',
  }
});

export default App;



// "main": "node_modules/expo/AppEntry.js",