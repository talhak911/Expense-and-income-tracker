import {StyleSheet} from 'react-native';
import { COLORS } from '../../constants/color';

export const styles = StyleSheet.create({
  attachmentButton: {
    maxWidth:400,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    width:'100%',
    borderStyle: 'dashed',
    borderWidth: 3,
    borderColor: COLORS.lightGrey,
    height: 56,
    borderRadius: 16,
  },
  imageContainer: {position: 'relative', alignSelf: 'flex-start'},
  image: {height: 112, width: 112, borderRadius: 8},
  remove: {
    position: 'absolute',
    top: -5,
    right: -5,
  },
});
