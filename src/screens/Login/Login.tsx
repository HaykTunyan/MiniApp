import React, {useState} from 'react';
import {Text, Dimensions, Pressable, Image, View} from 'react-native';
import {signIn_req} from '../../api/auth.api';
import {Logo} from '../../assets/image.assets';
import Input from '../../components/input/input';
import Screen from '../screen.wrapper';
import {useDispatch} from 'react-redux';

import getStyles from './styles';
import {setMeData} from '../../redux/me.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Get the width of the window.
 * @type {number}
 */
const {width, height} = Dimensions.get('window');

export interface LoginForm {
  username: string;
  password: string;
}

const Login = () => {
  /**
   * Login Hooks.
   */

  const styles = getStyles({width, height});

  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const signIn = async () => {
    try {
      const response = await signIn_req(state);
      await AsyncStorage.setItem('token', response.token);
      dispatch(setMeData(response));
    } catch (e) {
      console.log('e', e);
    }
  };

  const handleChange = evt => {
    const value = evt?.target?.value;
    setState({
      ...state,
      [evt?.target?.name]: value,
    });
  };

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text> Log In </Text>
          <Image source={Logo} style={styles.logo} />
          <View style={styles.inputBlock}>
            <Text style={styles.labelText}>Username*</Text>
            <Input
              onChangeText={text =>
                setState({
                  ...state,
                  username: text,
                })
              }
              name="username"
              value={state.username}
            />
          </View>
          <View style={styles.inputBlock}>
            <Text style={styles.labelText}>Password*</Text>
            <Input
              onChangeText={text =>
                setState({
                  ...state,
                  password: text,
                })
              }
              name="password"
              value={state.password}
              secureTextEntry={true}
            />
          </View>
        </View>

        <Pressable style={styles.btn} onPress={signIn}>
          <Text style={styles.btnText}>log in</Text>
        </Pressable>
      </View>
    </Screen>
  );
};
export default Login;
