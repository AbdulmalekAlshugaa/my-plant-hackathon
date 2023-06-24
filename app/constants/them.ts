import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
    primary: '#4096FE',
    secondary: '#F1F1F1',
    blue: '#0000FF',
    darkGreen: '#229879',
    darkLime: '#1A8871',
    lightLime: '#BBD6C5',
    lime: '#2AD699',
    lightGreen: '#E7F9EF',
    lightGreen1: '#8EbCA0',
    danger: '#B74026',
    red: '#FF0000',
    warning: '#FFAF52',
    gold: '#FFDC5F',

    white: '#fff',
    white2: '#F9F9F9',
    black: '#020202',
    gray: '#777777',
    gray2: '#C5C5C5',
    lightGray: '#F8F8F8',
    lightGray2: '#757575',

    redLight: '#FCA8A8',

    transparentBlack1: 'rgba(2, 2, 2, 0.1)',
    transparentBlack3: 'rgba(2, 2, 2, 0.3)',
    transparentBlack5: 'rgba(2, 2, 2, 0.5)',
    transparentBlack7: 'rgba(2, 2, 2, 0.7)',
    transparentBlack9: 'rgba(2, 2, 2, 0.9)',

    transparentGray: 'rgba(77,77,77, 0.8)',
    transparentDarkGray: 'rgba(20,20,20, 0.9)',

    transparent: 'transparent',
};
export const SIZES = {
    // global sizes
    S_1: 2,
    S_2: 4,
    S_3: 6,
    S_4: 8,
    S_5: 10,
    S_6: 12,
    S_7: 14,
    S_8: 16,
    S_9: 18,
    S_10: 20,
    S_11: 22,
    S_12: 24,
    width,
    height,
};

export const IMAGE = {
    background: require('../../assets/background.jpg'),
};


const appTheme = { COLORS, SIZES, IMAGE };

export default appTheme;