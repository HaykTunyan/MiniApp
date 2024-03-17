import React, {useEffect, useState, FC} from 'react';
import {
  Text,
  Pressable,
  Image,
  FlatList,
  Dimensions,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getCategoriesItem_req} from '../../api/product.api';
import Favorite from '../../assets/icons/favorite.svg';
import FavoritActive from '../../assets/icons/favoriteIn.svg';
import Star from '../../assets/icons/star.svg';
import Screen from '../screen.wrapper';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from '../../redux/wishlist.slice';
import {CategoryItemProps} from '../../utils/inteface';
import getStyles from './styles';
import Header from '../../components/header/header';

/**
 * Get the width of the window.
 * @type {number}
 */
const {width} = Dimensions.get('window');

const CategoryItem: FC<CategoryItemProps> = ({route}) => {
  /**
   *  Category Item Hooks.
   */

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const styles = getStyles({width});
  const data = route?.params?.data;
  const [categoryData, setCategoryData] = useState(null);
  const wishlistItems = useSelector(state => state.favorite.lists);

  const getCategory = async data => {
    try {
      const response = await getCategoriesItem_req(data);
      setCategoryData(response?.products);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    if (data) {
      getCategory(data);
    }
  }, [data]);

  const goProductItem = data => {
    // console.log(' data data ', data);
  };

  const renderItem = ({item}) => {
    const dataItem = wishlistItems?.find(state => state.id === item.id);

    return (
      <Pressable
        style={styles.categoryItem}
        onPress={() => goProductItem(item)}>
        <Image source={{uri: item.images?.[0]}} style={styles.categoryImage} />
        <TouchableOpacity
          onPress={() => addWishList(item)}
          style={styles.favorite}>
          {dataItem ? (
            <FavoritActive width={24} height={24} />
          ) : (
            <Favorite width={24} height={24} />
          )}
        </TouchableOpacity>

        <Text style={styles.title}>{item.brand}</Text>

        <View style={styles.evuluate}>
          <View style={styles.starBlock}>
            <Star width={16} height={16} />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>

          <Text style={styles.pricingText}>
            {item.price} {'$'}
          </Text>
        </View>
      </Pressable>
    );
  };

  const goBackNavigation = () => {
    navigation.goBack();
  };

  const addWishList = item => {
    const dataItem = wishlistItems?.find(state => state.id === item.id);
    if (dataItem) {
      dispatch(removeItemFromWishlist(item));
    } else {
      dispatch(addItemToWishlist(item));
    }
  };

  return (
    <Screen>
      <Header
        search={true}
        text={data}
        backIcon={true}
        goBack={goBackNavigation}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollViewBottom}>
          <View style={styles.categoryList}>
            <FlatList
              data={categoryData}
              renderItem={renderItem}
              numColumns={2}
              horizontal={false}
            />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};
export default CategoryItem;
