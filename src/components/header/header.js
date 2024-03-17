import React, {FC} from 'react';
import {Dimensions, Text, View, Pressable, useState} from 'react-native';
import getStyles from './styles';
import BackIcon from '../../assets/icons/back-icon.svg';
import Favorite from '../../assets/icons/favorite.svg';
import Search from '../../assets/icons/search.svg';
import Logo from '../../assets/icons/logo.svg';
import {HeaderProps} from '../../utils/inteface';

const {width} = Dimensions.get('window');

const Header: FC<HeaderProps> = ({
  backIcon,
  favorite,
  text,
  logo,
  search,
  goBack,
  goSearch,
}) => {
  /**
   *  Header Hooks.
   */

  const styles = getStyles({width});

  return (
    <View style={styles.header}>
      {logo && (
        <Pressable>
          <Logo width={43} height={26} />
        </Pressable>
      )}
      {backIcon && (
        <Pressable onPress={goBack}>
          <BackIcon width={24} height={24} />
        </Pressable>
      )}
      {text && <Text style={styles.title}>{text}</Text>}

      {favorite && (
        <Pressable>
          <Favorite width={24} height={24} />
        </Pressable>
      )}

      {search && (
        <Pressable onPress={goSearch}>
          <Search width={24} height={24} />
        </Pressable>
      )}
    </View>
  );
};

export default Header;
