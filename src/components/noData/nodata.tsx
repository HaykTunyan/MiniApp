import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NoDataComponent = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 600,
    color: '#777777',
  },
});

export default NoDataComponent;
