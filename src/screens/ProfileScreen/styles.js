import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function ({width}) {
  return StyleSheet.create({
    profileContainer: {
      flex: 1,
      width: wp(100),
    },
    container: {
      height: hp(75),
    },
    title: {
      alignItems: 'center',
      fontSize: 18,
      fontWeight: 'bold',
    },
    banner: {
      marginTop: 30,
      flexDirection: 'row',
      borderBottomWidth: 1,
      paddingBottom: 15,
      borderBottomColor: '#E6E6E6',
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 10,
    },
    bannerTitle: {
      fontSize: 18,
      color: '#1E1D1D',
      paddingBottom: 15,
      paddingLeft: 10,
    },
    bannerSubTitle: {
      fontSize: 14,
      background: '#ADADAD',
      opacity: 0.5,
      paddingLeft: 10,
    },
    logOutDiv: {
      borderBottomColor: '#E6E6E6',
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderTopColor: '#E6E6E6',
      paddingTop: 20,
      paddingBottom: 20,
    },
    BottomRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    IconRow: {
      flexDirection: 'row',
    },
    OutDivTitle: {
      fontSize: 14,
      marginLeft: 5,
      color: '#1E1D1D',
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
  });
}
