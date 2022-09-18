import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text>This is a Contact Screen</Text>
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
  });

export default Contact;