//  ALL Components Props Types.
import {TextInputProps} from 'react-native';
import {RouteProp} from '@react-navigation/native';

export interface HeaderProps {
  backIcon?: boolean;
  favorite?: boolean;
  text?: string;
  logo?: boolean;
  search?: boolean;
  goBack?: () => void;
  goSearch?: () => void;
}

export interface InputProps extends TextInputProps {
  placeholder?: string;
  type?: string;
  name?: string;
  errors?: boolean;
  placeholderStyle?: any;
  secureTextEntry?: boolean;
}

export interface CategoryItemProps {
  route: {
    params: {
      data: string;
    };
  };
}

export interface CategoryItemData {
  id: number;
  brand: string;
  images: string[];
  rating: number;
  price: number;
}

export interface Product {
  id: number;
  brand: string;
  images: string[];
  rating: number;
  price: number;
}

export interface LoginForm {
  username: string;
  password: string;
}

export interface ProfileScreenProps {
  route: RouteProp<{params: {data: any}}, 'params'>;
}

export interface ProfileInfo {
  image: string;
  firstName: string;
  lastName: string;
  gender: string;
}
