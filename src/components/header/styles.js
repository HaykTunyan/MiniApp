import {StyleSheet} from 'react-native';

export default function ({width}) {
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontFamily: 'GothamMedium',
      fontSize: 18,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
  });
}
