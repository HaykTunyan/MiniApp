import React, {useEffect, useState} from 'react';
import {Text, Pressable, Image, FlatList, Dimensions, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getCategories_req} from '../../api/product.api';
import {
  Automotive,
  Fragrances,
  Groceries,
  Furniture,
  HomeDecoration,
  Laptops,
  Lighting,
  Sunglasses,
  Tops,
  MensShirts,
  MensShoes,
  MensWatches,
  Motorcycle,
  WomensBags,
  WomensDresses,
  WomensJewellery,
  WomensShoes,
  WomensWatches,
  Skincare,
  Smartphones,
} from '../../assets/image.assets';
import Screen from '../screen.wrapper';

import getStyles from './styles';
import ScreensEnum from '../../enums/screen-enum';
import Header from '../../components/header/header';

/**
 * Get the width of the window.
 * @type {number}
 */
const {width} = Dimensions.get('window');

export type CategoryData = string[] | null;

const Category = () => {
  /**
   *  Category Hooks.
   */

  const navigation = useNavigation();
  const styles = getStyles({width});
  const [data, setData] = useState(null);

  const getCategory = async () => {
    const response = await getCategories_req();
    setData(response);
  };

  useEffect(() => {
    getCategory();
  }, []);

  const changeImage = text => {
    switch (text) {
      case 'smartphones':
        return <Image source={Smartphones} />;
      case 'laptops':
        return <Image source={Laptops} />;
      case 'fragrances':
        return <Image source={Fragrances} />;
      case 'skincare':
        return <Image source={Skincare} />;
      case 'groceries':
        return <Image source={Groceries} />;
      case 'home-decoration':
        return <Image source={HomeDecoration} />;
      case 'furniture':
        return <Image source={Furniture} />;
      case 'tops':
        return <Image source={Tops} />;
      case 'womens-dresses':
        return <Image source={WomensDresses} />;
      case 'womens-shoes':
        return <Image source={WomensShoes} />;
      case 'mens-shirts':
        return <Image source={MensShirts} />;
      case 'mens-shoes':
        return <Image source={MensShoes} />;
      case 'mens-watches':
        return <Image source={MensWatches} />;
      case 'womens-watches':
        return <Image source={WomensWatches} />;
      case 'womens-bags':
        return <Image source={WomensBags} />;
      case 'womens-jewellery':
        return <Image source={WomensJewellery} />;
      case 'sunglasses':
        return <Image source={Sunglasses} />;
      case 'automotive':
        return <Image source={Automotive} />;
      case 'motorcycle':
        return <Image source={Motorcycle} />;
      case 'lighting':
        return <Image source={Lighting} />;
    }
  };

  const goItemCategory = data => {
    navigation.navigate(ScreensEnum.CATEGORY_ITEM, {data});
  };

  const renderItem = ({item}) => {
    return (
      <Pressable onPress={() => goItemCategory(item)}>
        <View style={styles.card}>
          {changeImage(item)}
          <Text style={styles.cardTitle}>{item}</Text>
        </View>
      </Pressable>
    );
  };

  const goBackNavigation = () => {
    navigation.goBack();
  };

  return (
    <Screen>
      <Header
        search={true}
        text="Categories"
        backIcon={true}
        goBack={goBackNavigation}
      />
      <View style={styles.categorysContainer}>
        <FlatList data={data} renderItem={renderItem} keyExtractor={i => i} />
      </View>
    </Screen>
  );
};
export default Category;
