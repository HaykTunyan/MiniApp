import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function ({width}) {
  return StyleSheet.create({
    carouselItem: {
      width: wp(92),
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    scrollViewBottom: {
      marginBottom: 100,
      marginTop: hp(4),
    },
    categoryItem: {
      width: wp(48),
      padding: 2,
    },
    categoryImage: {
      width: 164,
      height: 164,
    },
    categoryList: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    ratingText: {
      fontFamily: 'GothamMedium',
      fontSize: 12,
      paddingLeft: 3,
    },
    favorite: {
      top: -160,
      left: 135,
      zIndex: 100,
    },
    starBlock: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    evuluate: {
      width: 164,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 5,
      marginBottom: 20,
    },
    pricingText: {
      fontFamily: 'GothamMedium',
      fontSize: 14,
      fontWeight: 'bold',
    },
  });
}
