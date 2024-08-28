import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import {Width} from '../../utils/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    paddingLeft:16,
    paddingRight:20,
    paddingVertical:14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.charcoal,
  },
});
