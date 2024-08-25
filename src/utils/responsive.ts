import {Dimensions, PixelRatio} from 'react-native';
const {height, width} = Dimensions.get('window');

export const Height = (h: number) => {
  const size = height * (h / 100);
  return size;
};
export const Width = (w: number) => {
  const size = width * (w / 100);
  return size;
};

export const FontSize = (f: number) => {
  const size = PixelRatio.roundToNearestPixel((width / 375) * f);
  return size;
};
