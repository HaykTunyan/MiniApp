import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function ({width}) {
  return StyleSheet.create({
    container: {
      backgroundColor: 'white',
      width: wp(100),

      paddingBottom: 40,
      shadowColor: '#000',
    },
    carouselItem: {
      width: wp(92),
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    image: {
      height: 215,
      width: wp(92),
    },
    header: {
      color: '#222',
      fontSize: 28,
      fontWeight: 'bold',
      paddingLeft: 20,
      paddingTop: 20,
    },
    body: {
      color: '#222',
      fontSize: 18,

      paddingLeft: 20,
      paddingRight: 20,
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
    favorite: {
      top: -160,
      left: 135,
      zIndex: 100,
    },
    starBlock: {
      flexDirection: 'row',
    },
    ratingText: {
      fontFamily: 'GothamMedium',
      fontSize: 12,
    },
    scrollViewBottom: {
      marginBottom: 100,
      marginTop: hp(4),
    },
    title: {
      fontSize: 12,
      fontWeight: 400,
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

    flexRowBeatween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 5,
      marginBottom: 20,
    },
    total: {
      fontSize: 14,
      fontWeight: 400,
      color: '#777777',
    },
    buttonContainer: {
      backgroundColor: '#FF0000',
      borderRadius: 5,
      paddingHorizontal: 10,
    },
  });
}
