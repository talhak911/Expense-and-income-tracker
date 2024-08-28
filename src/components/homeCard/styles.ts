import {StyleSheet} from 'react-native';
import {Width} from '../../utils/responsive';
import {COLORS} from '../../constants/color';

export const styles = StyleSheet.create({
  amount: {
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.white,
  },
  icon: {
    height: 48,
    borderRadius: 16,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Width(44),
    gap: 10,
    borderRadius: 32,
    paddingHorizontal: 17,
    paddingVertical: 17,
  },
});
