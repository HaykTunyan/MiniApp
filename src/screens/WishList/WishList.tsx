import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Image,
  ScrollView,
  Pressable,
  FlatList,
  Dimensions,
  Text,
  Button,
  Alert,
} from 'react-native';
import Screen from '../screen.wrapper';
import Star from '../../assets/icons/star.svg';
import FavoritIn from '../../assets/icons/favoriteIn.svg';
import getStyles from './styles';
import {useNavigation} from '@react-navigation/native';
import ScreensEnum from '../../enums/screen-enum';
import Header from '../../components/header/header';
import {useSelector, useDispatch} from 'react-redux';
import {
  clearWishlist,
  removeItemFromWishlist,
} from '../../redux/wishlist.slice';
import NoDataComponent from '../../components/noData/nodata';

const {width} = Dimensions.get('window');

const WishList = () => {
  /**
   *  WishList Hooks.
   */

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const styles = getStyles({width});

  const [smartPhonesData, setSmartPhonesData] = useState([]);
  const wishlistItems = useSelector(state => state.favorite.lists);

  useEffect(() => {
    setSmartPhonesData(wishlistItems);
  }, [wishlistItems]);

  const goProductItem = data => {
    navigation.navigate(ScreensEnum.PRODUCT_ITEM, {data});
  };

  const clearAllFavorite = () =>
    Alert.alert('All Favorites Delete', '', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        style: 'cancel',
        onPress: () => handleClearWishlist(),
      },
    ]);

  const handleClearWishlist = () => {
    dispatch(clearWishlist());
    Alert.alert(
      'Wishlist Cleared',
      'All Items have been removed from the Wishlist',
    );
  };
  const deleteFavorite = item => {
    dispatch(removeItemFromWishlist(item));
  };

  const SmartPhonesComponent = ({item}) => {
    return (
      <Pressable
        style={styles.categoryItem}
        onPress={() => goProductItem(item)}>
        <Image source={{uri: item.images?.[0]}} style={styles.categoryImage} />
        <Pressable onPress={() => deleteFavorite(item)}>
          <FavoritIn width={24} height={24} style={styles.favorite} />
        </Pressable>

        <Text style={styles.title}>{item.brand}</Text>

        <View style={styles.evuluate}>
          <View style={styles.starBlock}>
            <Star width={16} height={16} />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
          <View>
            <Text style={styles.pricingText}>
              {' '}
              {item.price} {'$'}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <Screen>
      <Header logo={true} text={'WishList'} search={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollViewBottom}>
          <View style={styles.flexRowBeatween}>
            <View style={styles.flexCol}>
              <Text style={styles.total}> Clear All </Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Delete All"
                onPress={() => clearAllFavorite()}
                color="#ffffff"
              />
            </View>
          </View>
          <View style={styles.categoryList}>
            {smartPhonesData.length ? (
              <FlatList
                data={smartPhonesData}
                renderItem={SmartPhonesComponent}
                numColumns={2}
                horizontal={false}
              />
            ) : (
              <NoDataComponent message={'Not Have Wishlist Data'} />
            )}
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default WishList;
