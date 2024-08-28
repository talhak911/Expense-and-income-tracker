import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import {Width} from '../../utils/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.charcoal,
  },
  currency: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.grey,
  },
  arrow: {
    transform: [{rotate: '-90deg'}],
  },
});
