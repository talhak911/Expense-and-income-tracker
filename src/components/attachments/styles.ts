import {StyleSheet} from 'react-native';
import {Height} from '../../utils/responsive';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  attachmentButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    borderStyle: 'dashed',
    borderWidth: 3,
    borderColor: COLORS.lightGrey,
    height: Height(7),
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
