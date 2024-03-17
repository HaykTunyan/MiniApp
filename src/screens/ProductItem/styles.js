import {Platform, StyleSheet} from 'react-native';
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
    image: {
      height: 215,
      width: wp(92),
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#1E1D1D',
    },
    subTitle: {
      fontSize: 14,
      fontWeight: 400,
      color: '#1E1D1D',
    },
    infoTitle: {
      fontSize: 14,
      fontWeight: 300,
      color: '#777777',
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
      // marginTop: hp(4),
    },
    pricingText: {
      fontFamily: 'GothamMedium',
      fontSize: 14,
      fontWeight: 'bold',
    },
    topCarousel: {
      marginTop: hp(4),
    },
    flexRow: {
      flexDirection: 'row',
      marginTop: 10,
    },
    flexRowBeatween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 5,
      marginBottom: 20,
    },
    description: {
      marginTop: 10,
      marginBottom: 10,
      borderTopWidth: 1,
      borderTopColor: '#E6E6E6',
      borderBottomWidth: 1,
      borderBottomColor: '#E6E6E6',
    },
    infoDescription: {
      paddingBottom: 25,
      paddingTop: 25,
      fontSize: 14,
      fontWeight: 300,
      color: '#8F8F8F',
    },
    addButton: {
      backgroundColor: '#7867BE',
    },
    total: {
      fontSize: 10,
      fontWeight: 400,
      color: '#777777',
    },
    buttonContainer: {
      backgroundColor: '#7867BE',
      borderRadius: 5,
      paddingHorizontal: 10,
    },
  });
}
