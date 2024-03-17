import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

import HomeInactive from '../assets/icons/homeInactive.svg';
import HomeActive from '../assets/icons/homeActive.svg';
import CategoryInactive from '../assets/icons/CategoryInactive.svg';
import CategoryActive from '../assets/icons/CategoryActive.svg';
import FavoriteInactive from '../assets/icons/favoriteInactive.svg';
import FavoriteActive from '../assets/icons/favoriteActive.svg';
import PersonInactive from '../assets/icons/personInactive.svg';
import PersonActive from '../assets/icons/personActive.svg';

import Category from './Category/Category';
import HomeScreen from './HomeScreen/HomeScreen';
import WishList from './WishList/WishList';
import ProfileScreen from './ProfileScreen/ProfileScreen';

const TabNavigation = ({route}) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          elevation: 0,
          backgroundColor: '#fff',

          borderTopWidth: 1,
          height: 83,
          borderColor: 'rgba(53, 64, 82, 0.2)',
          borderWidth: 0,

          ...styles.shadow,
        },
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen
        name="details"
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: Platform.OS == 'ios' ? 10 : 0,
              }}>
              {focused ? (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <HomeActive width={24} height={24} />
                  <Text
                    style={{
                      fontSize: 10,
                      fontFamily: 'GothamMedium',
                      color: '#7867BE',
                    }}>
                    Home
                  </Text>
                </View>
              ) : (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <HomeInactive width={24} height={24} />
                  <Text
                    style={{
                      fontSize: 10,
                      fontFamily: 'GothamMedium',
                      color: '#CACACA',
                    }}>
                    Home
                  </Text>
                </View>
              )}
            </View>
          ),
        }}
        component={HomeScreen}
      />

      <Tab.Screen
        name="category"
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: Platform.OS == 'ios' ? 10 : 0,
              }}>
              {focused ? (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <CategoryActive width={24} height={24} />
                  <Text
                    style={{
                      fontSize: 10,
                      fontFamily: 'GothamMedium',
                      color: '#7867BE',
                    }}>
                    Category
                  </Text>
                </View>
              ) : (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <CategoryInactive width={24} height={24} />
                  <Text
                    style={{
                      fontSize: 10,
                      fontFamily: 'GothamMedium',
                      color: '#CACACA',
                    }}>
                    Category
                  </Text>
                </View>
              )}
            </View>
          ),
        }}
        component={Category}
      />

      <Tab.Screen
        name="wishlist"
        options={{
          headerShown: false,
          tabBarLabel: 'WishList',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: Platform.OS == 'ios' ? 10 : 0,
              }}>
              {focused ? (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <FavoriteActive width={24} height={24} />
                  <Text
                    style={{
                      fontSize: 10,
                      fontFamily: 'GothamMedium',
                      color: '#7867BE',
                    }}>
                    Wishlist
                  </Text>
                </View>
              ) : (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <FavoriteInactive width={24} height={24} />
                  <Text
                    style={{
                      fontSize: 10,
                      fontFamily: 'GothamMedium',
                      color: '#CACACA',
                    }}>
                    Wishlist
                  </Text>
                </View>
              )}
            </View>
          ),
        }}
        component={WishList}
      />

      <Tab.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: Platform.OS == 'ios' ? 10 : 0,
              }}>
              {focused ? (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <PersonActive width={24} height={24} />
                  <Text
                    style={{
                      fontSize: 10,
                      fontFamily: 'GothamMedium',
                      color: '#7867BE',
                    }}>
                    Profile
                  </Text>
                </View>
              ) : (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <PersonInactive width={24} height={24} />
                  <Text
                    style={{
                      fontSize: 10,
                      fontFamily: 'GothamMedium',
                      color: '#CACACA',
                    }}>
                    Profile
                  </Text>
                </View>
              )}
            </View>
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default TabNavigation;
