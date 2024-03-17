import React, {FC} from 'react';
import {Dimensions, TextInput} from 'react-native';
import getStyles from './styles';
import {InputProps} from '../../utils/inteface';

const {width} = Dimensions.get('window');

const Input: FC<InputProps> = ({
  placeholder,
  type,
  name,
  value,
  onChangeText,
  keyboardType,
  errors,
  ref,
  placeholderStyle,
  secureTextEntry,
}) => {
  /**
   * Input Hooks.
   */

  const styles = getStyles({width});

  return (
    <TextInput
      style={[styles.input, errors ? styles.error : '']}
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      autoCapitalize={'none'}
      ref={ref}
      placeholderStyle={placeholderStyle}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;
