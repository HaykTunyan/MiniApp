import React, {useState, useRef, useEffect, FC} from 'react';
import {
  View,
  Image,
  ScrollView,
  Pressable,
  FlatList,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import Screen from '../screen.wrapper';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Star from '../../assets/icons/star.svg';
import Favorite from '../../assets/icons/favorite.svg';
import FavoritActive from '../../assets/icons/favoriteIn.svg';
import getStyles from './styles';
import {getProducts_req} from '../../api/product.api';
import {useNavigation} from '@react-navigation/native';
import ScreensEnum from '../../enums/screen-enum';
import Header from '../../components/header/header';
import {useDispatch, useSelector} from 'react-redux';
import NoDataComponent from '../../components/noData/nodata';
import FirstBanner from '../../assets/banner/banner1.jpg';
import SecondBanner from '../../assets/banner/banner2.jpg';
import ThirdBanner from '../../assets/banner/banner3.jpg';
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from '../../redux/wishlist.slice';
import {HomeScreenProps} from '../../utils/inteface';
import LoadingComponent from '../../components/loading/loading';

/**
 * Get the width of the window.
 * @type {number}
 */
const {width} = Dimensions.get('window');

const HomeScreen: FC<HomeScreenProps> = () => {
  /**
   *  HomeScreen Hooks.
   */

  const navigation = useNavigation();
  const styles = getStyles({width});
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(null);
  const [smartPhonesData, setSmartPhonesData] = useState([]);
  const [lapTopsData, setLapTopsData] = useState([]);
  const [fragrancesData, setFragrancesData] = useState([]);
  const isCarousel = useRef(null);
  const [index, setIndex] = useState(0);
  const wishlistItems = useSelector(state => state.favorite.lists);

  const data = [
    {
      imgUrl: FirstBanner,
    },
    {
      imgUrl: SecondBanner,
    },
    {
      imgUrl: ThirdBanner,
    },
  ];

  const getAllProducst = async () => {
    setLoader(true);
    try {
      const response = await getProducts_req();

      const categorizedProducts = response?.products.reduce(
        (action, product) => {
          const {category} = product;
          if (!action[category]) {
            action[category] = [];
          }
          action[category].push(product);
          return action;
        },
        {},
      );

      setSmartPhonesData(categorizedProducts['smartphones'] || []);
      setLapTopsData(categorizedProducts['laptops'] || []);
      setFragrancesData(categorizedProducts['fragrances'] || []);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log('error', error);
    }
  };

  useEffect(() => {
    getAllProducst();
  }, []);

  const goProductItem = data => {
    navigation.navigate(ScreensEnum.PRODUCT_ITEM, {data});
  };

  const CarouselCardItem = ({item, index}) => {
    return (
      <View style={styles.container} key={index}>
        <Image source={item.imgUrl} style={styles.image} />
      </View>
    );
  };

  const goSearch = () => {
    navigation.navigate(ScreensEnum.SEARCH_SCREEN);
  };

  const goItemCategory = data => {
    navigation.navigate(ScreensEnum.CATEGORY_ITEM, {data});
  };

  const addWishList = item => {
    const dataItem = wishlistItems?.find(state => state.id === item.id);
    if (dataItem) {
      dispatch(removeItemFromWishlist(item));
    } else {
      dispatch(addItemToWishlist(item));
    }
  };

  const SmartPhonesComponent = ({item}) => {
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
        <Text>{item.brand}</Text>

        <View style={styles.evuluate}>
          <View style={styles.starBlock}>
            <Star width={16} height={16} />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>

          <Text style={styles.pricingText}>
            {' '}
            {item.price} {'$'}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <Screen>
      <Header logo={true} search={true} goSearch={goSearch} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollViewBottom}>
          <View style={styles.carouselItem}>
            <Carousel
              layout="default"
              layoutCardOffset={9}
              ref={isCarousel}
              data={data}
              renderItem={CarouselCardItem}
              sliderWidth={width}
              itemWidth={width}
              onSnapToItem={index => setIndex(index)}
              useScrollView={true}
            />
            <Pagination
              dotsLength={data.length}
              activeDotIndex={index}
              carouselRef={isCarousel}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0,
                backgroundColor: 'rgb(0, 0, 0)',
                top: -100,
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              tappableDots={true}
              inactiveDotStyle={styles.inactiveDot}
            />
          </View>

          {loader ? (
            <LoadingComponent />
          ) : (
            <>
              <View style={styles.flexRowBeatween}>
                <View style={styles.flexCol}>
                  <Text style={styles.bannerTitle}> Smartphones </Text>
                </View>
                <TouchableOpacity
                  style={styles.seeAllBtn}
                  onPress={() => goItemCategory('smartphones')}>
                  <Text style={styles.seeAllTitle}>SEE ALL</Text>
                </TouchableOpacity>
              </View>

              {smartPhonesData.length ? (
                <View style={styles.categoryList}>
                  <FlatList
                    data={smartPhonesData}
                    renderItem={SmartPhonesComponent}
                    numColumns={2}
                    horizontal={false}
                  />
                </View>
              ) : (
                <NoDataComponent message={'Dont Have Smartphone '} />
              )}

              <View style={styles.flexRowBeatween}>
                <View style={styles.flexCol}>
                  <Text style={styles.bannerTitle}> LapTopsData </Text>
                </View>
                <TouchableOpacity
                  style={styles.seeAllBtn}
                  onPress={() => goItemCategory('laptops')}>
                  <Text style={styles.seeAllTitle}>SEE ALL</Text>
                </TouchableOpacity>
              </View>

              {lapTopsData.length ? (
                <View style={styles.categoryList}>
                  <FlatList
                    data={lapTopsData}
                    renderItem={SmartPhonesComponent}
                    numColumns={2}
                    horizontal={false}
                  />
                </View>
              ) : (
                <NoDataComponent message={'Dont Have Laptops '} />
              )}

              <View style={styles.flexRowBeatween}>
                <View style={styles.flexCol}>
                  <Text style={styles.bannerTitle}> Fragrances </Text>
                </View>
                <TouchableOpacity
                  style={styles.seeAllBtn}
                  onPress={() => goItemCategory('fragrances')}>
                  <Text style={styles.seeAllTitle}>SEE ALL</Text>
                </TouchableOpacity>
              </View>

              {fragrancesData.length ? (
                <View style={styles.categoryList}>
                  <FlatList
                    data={fragrancesData}
                    renderItem={SmartPhonesComponent}
                    numColumns={2}
                    horizontal={false}
                  />
                </View>
              ) : (
                <NoDataComponent message={'Dont Have Fragrances '} />
              )}
            </>
          )}
        </View>
      </ScrollView>
    </Screen>
  );
};
export default HomeScreen;
