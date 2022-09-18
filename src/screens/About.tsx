import { View, Text, StyleSheet } from 'react-native';
import React from 'react';


const About = () => {
  return (
        <View style={styles.container}>
          <Text>This is a About Screen</Text>
        </View>
        
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

export default About;