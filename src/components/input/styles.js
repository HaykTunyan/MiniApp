import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function ({width}) {
  return StyleSheet.create({
    input: {
      width: wp(90),
      height: 52,
      borderRadius: 10,
      paddingLeft: 16,
      marginBottom: hp(1.5),
      fontFamily: 'Poppins-Medium',
      placeholderTextColor: 'rgba(54,44,42,0.4)',
      borderWidth: 1,
      borderColor: '#E6E6E6',
      fontSize: width * 0.04,
      paddingTop: 3,
    },
    error: {
      borderColor: '#C91E1D',
    },
  });
}
