import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function ({width}) {
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
    },
    input: {
      backgroundColor: '#F4F4F4',
      width: wp(92),
      height: 40,
      borderRadius: 5,
      paddingLeft: 35,
    },
    container: {
      backgroundColor: '#fff',
      width: wp(100),
      height: hp(100),
    },
    searchIcon: {
      position: 'absolute',
      left: wp(2),
      top: hp(1),
      zIndex: 2,
    },
    closeIcon: {
      right: wp(8),
      top: hp(1),
    },
  });
}
