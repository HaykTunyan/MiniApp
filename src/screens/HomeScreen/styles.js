import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
//
export default function ({width}) {
  return StyleSheet.create({
    container: {
      // backgroundColor: 'white',
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
      height: 230,
      width: wp(92),
    },
    inactiveDot: {
      backgroundColor: '#fff',
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
      marginTop: 45,
      marginBottom: 20,
    },
    seeAllBtn: {
      fontSize: 12,
      fontWeight: 700,
      background: '#7867BE',
      textDecorationLine: 'Underline',
    },
    bannerTitle: {
      color: '#1E1D1D',
      fontSize: 16,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    seeAllTitle: {
      textDecorationLine: 'Underline',
      fontSize: 12,
      color: '#7867BE',
    },
    loadingContainer: {
      flex: 1,
      height: hp(100),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
}
