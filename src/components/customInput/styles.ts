import {StyleSheet} from 'react-native';
import {Height, FontSize} from '../../utils/responsive';
import { COLORS } from '../../constants/colors';
export const styles = StyleSheet.create({
  input: {
     height: 56,
    alignSelf: 'center',
    color: 'black',
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'white',
    borderWidth: FontSize(1),
    fontSize: 16,
    borderColor: COLORS.lightGrey,
    paddingLeft: 16,
  },
});
