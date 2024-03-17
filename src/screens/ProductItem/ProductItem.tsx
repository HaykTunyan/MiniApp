import React, {useRef, useState, useEffect} from 'react';
import {
  Text,
  Dimensions,
  View,
  ScrollView,
  Image,
  Button,
  Alert,
} from 'react-native';
import Screen from '../screen.wrapper';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Star from '../../assets/icons/star.svg';
import getStyles from './styles';
import {useNavigation} from '@react-navigation/native';
import {getProductsItem_req} from '../../api/product.api';
import Header from '../../components/header/header';
import {ItemType} from '../../utils/allTypes';

/**
 * Get the width of the window.
 * @type {number}
 */
const {width} = Dimensions.get('window');

const ProductItem = ({route}) => {
  /**
   *  ProductItem Hooks.
   */

  const navigation = useNavigation();

  const styles = getStyles({width});

  const [singleProducts, setSingleProducts] = useState();

  const isCarousel = useRef(null);

  const [index, setIndex] = useState(0);

  const itemIndex = route.params.data;

  const getAllProducstItem = async (itemIndex: ItemType) => {
    try {
      if (!itemIndex) return;
      const id = itemIndex.id;
      if (!id) return;
      const response = await getProductsItem_req(id);
      setSingleProducts(response);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    if (itemIndex) {
      getAllProducstItem(itemIndex);
    }
  }, [itemIndex]);

  const goBack = () => {
    navigation.goBack();
  };

  const CarouselCardItem = ({item, index}) => {
    return (
      <View style={styles.container} key={index}>
        <Image source={{uri: item}} style={styles.image} />
      </View>
    );
  };

  return (
    <Screen>
      <Header backIcon={true} favorite={true} goBack={goBack} />
      <View style={styles.topCarousel}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollViewBottom}>
          <Carousel
            layout="tinder"
            layoutCardOffset={9}
            ref={isCarousel}
            data={singleProducts?.images}
            renderItem={CarouselCardItem}
            sliderWidth={width}
            itemWidth={width}
            onSnapToItem={index => setIndex(index)}
            useScrollView={true}
          />
          <Pagination
            dotsLength={singleProducts?.images?.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.92)',
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
          />
          <View style={styles}>
            <Text style={styles.title}> {singleProducts?.title} </Text>
            <View style={styles.flexRow}>
              <Text style={styles.subTitle}>{singleProducts?.brand} </Text>
              <Text style={styles.pricingText}>
                {' '}
                {singleProducts?.price} {' $ '}{' '}
              </Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.subTitle}>{'Rating : '} </Text>
              <View style={styles.starBlock}>
                <Star width={16} height={16} />
                <Text style={styles.ratingText}> {singleProducts?.rating}</Text>
              </View>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.subTitle}>{'ID:'} </Text>
              <Text style={styles.infoTitle}> {singleProducts?.id} </Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.subTitle}>{'Brand:'} </Text>
              <Text style={styles.infoTitle}>{singleProducts?.brand} </Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.subTitle}>{'Category: '} </Text>
              <Text style={styles.infoTitle}>{singleProducts?.category} </Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.subTitle}>{'Stock: '} </Text>
              <Text style={styles.infoTitle}>{singleProducts?.stock} </Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={styles.subTitle}>{'Discount Percentage: '} </Text>
              <Text style={styles.infoTitle}>
                {singleProducts?.discountPercentage}{' '}
              </Text>
            </View>

            <View style={styles.description}>
              <Text style={styles.infoDescription}>
                {singleProducts?.description}
              </Text>
            </View>

            <View style={styles.flexRowBeatween}>
              <View style={styles.flexCol}>
                <Text style={styles.total}> Total </Text>
                <Text style={styles.pricingText}>
                  {singleProducts?.price} {'$'}{' '}
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title="ADD TO CART"
                  onPress={() => Alert.alert('Product Add To You Cart')}
                  color="#ffffff"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};
export default ProductItem;
