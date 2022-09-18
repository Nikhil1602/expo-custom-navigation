import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

const Home = ({navigation}: any) => {
  
  return (
    <View style={styles.container}>
      <Text>This is a Home Screen</Text>
      <Button style={styles.button} onPress={() => navigation.navigate('About')}><Text style={{color: '#fff'}}>Click Me!</Text></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
      width: 300,
      color: 'white',
      backgroundColor: 'blue'
    }
  });

export default Home;