import {StyleSheet} from 'react-native';
import {Width, FontSize, Height} from '../../utils/responsive';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  headingSmall: {
    paddingLeft: Width(4),
    fontSize: FontSize(18),
    fontWeight: '600',
    color: COLORS.charcoal,
  },
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
    gap: Width(4),
    borderRadius: FontSize(32),
    paddingHorizontal: 17,
    paddingVertical: 17,
  },
});
