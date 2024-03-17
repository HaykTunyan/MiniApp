import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ScreensEnum from '../enums/screen-enum';
import {useSelector} from 'react-redux';

import TabNavigation from './tab.navigation';
import Login from './Login/Login';
import ProductItem from './ProductItem/ProductItem';
import CategoryItem from './CategoryItem/CategoryItem';
import SearchScreen from './search-screen/search-screen';

const Stack = createStackNavigator();

const BaseNavigation = () => {
  /**
   *  BaseNavigation Hooks.
   */

  const user = useSelector(state => state.me.data);
  const [tokenData, setTokenData] = useState(false);

  const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    setTokenData(token);
  };

  useEffect(() => {
    getToken();
  }, []);

  const AUTH_SCREENS = [
    {
      name: ScreensEnum.SIGN_IN,
      component: Login,
    },
  ];

  const APP_SCREENS = [
    {
      name: ScreensEnum.TAB_SCREEN,
      component: TabNavigation,
    },
    {
      name: ScreensEnum.SEARCH_SCREEN,
      component: SearchScreen,
    },
    {
      name: ScreensEnum.PRODUCT_ITEM,
      component: ProductItem,
    },
    {
      name: ScreensEnum.CATEGORY_ITEM,
      component: CategoryItem,
    },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} headerMode="none">
        {(tokenData || user ? APP_SCREENS : AUTH_SCREENS).map(screen => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            options={{
              ...screen.options,
            }}
            component={screen.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BaseNavigation;
