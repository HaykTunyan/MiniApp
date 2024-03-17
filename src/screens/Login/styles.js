import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function ({width, height}) {
  return StyleSheet.create({
    container: {
      // flex: 1,

      paddingTop: hp(4.5),
    },
    top: {
      // justifyContent: 'center',
      alignItems: 'center',
      height: hp(78),
    },
    logo: {
      marginTop: hp(4),
      marginBottom: hp(5.5),
    },
    btn: {
      width: wp(92),

      backgroundColor: '#7867BE',
      borderRadius: 10,
      height: 44,
    },
    btnText: {
      fontSize: 14,
      color: '#fff',
      textAlign: 'center',
      paddingTop: 12,
      textTransform: 'uppercase',
    },
    labelText: {
      paddingBottom: hp(1.2),
      fontSize: 16,
    },
    inputBlock: {
      paddingBottom: hp(2.5),
    },
  });
}
