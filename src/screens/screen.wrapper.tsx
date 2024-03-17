import React from 'react';
import {View, SafeAreaView} from 'react-native';

export default function Screen(props) {
  /**
   *  Screen Hooks.
   */

  const {children} = props;

  return (
    <>
      <View style={{flex: 1, paddingLeft: 16, paddingRight: 16}}>
        <SafeAreaView>{children}</SafeAreaView>
      </View>
    </>
  );
}
