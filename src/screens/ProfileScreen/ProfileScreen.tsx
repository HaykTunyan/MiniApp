import React, {useState, useEffect, FC} from 'react';
import {
  Text,
  Image,
  Dimensions,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Screen from '../screen.wrapper';
import getStyles from './styles';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header/header';
import LogOutIcon from '../../assets/icons/logout.svg';
import ArrowBack from '../../assets/icons/arrow_back_ios.svg';
import {getProfile_req} from '../../api/product.api';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScreensEnum from '../../enums/screen-enum';
import {setMeData} from '../../redux/me.slice';
import {ProfileScreenProps} from '../../utils/inteface';

/**
 * Get the width of the window.
 * @type {number}
 */
const {width} = Dimensions.get('window');

const ProfileScreen: FC<ProfileScreenProps> = ({route}) => {
  const dispatch = useDispatch();
  /**
   * Profile Screen Hooks.
   */

  const navigation = useNavigation();

  const data = route?.params?.data;

  const styles = getStyles({width});

  const [profileInfo, setProfileInfo] = useState(null);

  const getProfile = async () => {
    const response = await getProfile_req();

    setProfileInfo(response);

    console.log('  ');
  };

  useEffect(() => {
    getProfile();
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  const handleLogOut = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log Out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Log Out',
          style: 'cancel',
          onPress: () => {
            deleteToken();
          },
        },
      ],
      {cancelable: false},
    );
  };

  const deleteToken = async () => {
    try {
      await AsyncStorage.removeItem('token');
      dispatch(setMeData(null));
      ScreensEnum.SIGN_IN;
    } catch (error) {
      console.error('Error Removing User', error);
    }
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Header backIcon={true} goBack={goBack} />
        <View style={styles.title}>
          <Text style={styles.title}>PROFILE</Text>
        </View>
        <View style={styles.banner}>
          <View>
            <Image
              source={{uri: profileInfo?.image}}
              resizeMode="cover"
              style={styles.image}
            />
          </View>
          <View style={styles}>
            <Text style={styles.bannerTitle}>
              {profileInfo?.firstName} {profileInfo?.lastName}
            </Text>
            <Text style={styles.bannerSubTitle}>{profileInfo?.gender} </Text>
          </View>
        </View>
      </View>
      <View style={styles.logOutDiv}>
        <TouchableOpacity style={styles.button} onPress={handleLogOut}>
          <View style={styles.BottomRow}>
            <View style={styles.IconRow}>
              <LogOutIcon width={20} height={20} />
              <Text style={styles.OutDivTitle}> Log Out </Text>
            </View>
            <ArrowBack width={16} height={16} />
          </View>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};
export default ProfileScreen;
