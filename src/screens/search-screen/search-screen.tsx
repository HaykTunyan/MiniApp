import React, {useState, useEffect} from 'react';
import {View, Pressable, Keyboard, Dimensions, TextInput} from 'react-native';
import Screen from '../screen.wrapper';
import getStyles from './styles';
import CloseIcon from '../../assets/icons/close_small.svg';
import SearchIcon from '../../assets/icons/search.svg';
import {search_req} from '../../api/product.api';

/**
 * Get the width of the window.
 * @type {number}
 */
const {width} = Dimensions.get('window');

const SearchScreen = () => {
  /**
   *  Search Hook.
   */

  const [search, setSearch] = useState('');
  const styles = getStyles({width});
  const [searchData, setSearchData] = useState(null);
  const [isKeyboardVisible, setKeyboardVisible] = useState(true);

  const getSearch = async data => {
    try {
      const response = await search_req(data);
      setSearchData(response?.products);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getSearch('phone');
    if (search?.length > 0) {
      getSearch(search);
    }
  }, [search]);

  const deleteSearch = () => {
    setSearch('');
    setKeyboardVisible(false);
  };

  const handleBlur = () => {
    // Handle input blur here
    setKeyboardVisible(false);
  };

  return (
    <View style={styles.container}>
      <Screen>
        <View style={styles.header}>
          <SearchIcon width={24} height={24} style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            name="search"
            value={search}
            onChangeText={text => setSearch(text)}
            ref={ref => {
              if (ref !== undefined && ref && !ref.isFocused()) {
                ref.focus();
              }
            }}
            onBlur={handleBlur}
          />
          <Pressable onPress={() => deleteSearch()}>
            <CloseIcon width={24} height={24} style={styles.closeIcon} />
          </Pressable>
        </View>
      </Screen>
    </View>
  );
};

export default SearchScreen;
