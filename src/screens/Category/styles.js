import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function ({width}) {
  return StyleSheet.create({
    categorysContainer: {
      width: wp(100),
      marginBottom: 140,
      paddingTop: 40,
    },
    card: {
      paddingBottom: 20,
    },
    cardTitle: {
      position: 'absalute',
      bottom: 30,
      left: 10,
      color: '#FFF',
      fontSize: 18,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
  });
}
