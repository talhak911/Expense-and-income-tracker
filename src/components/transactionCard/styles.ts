import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {Height, Width} from '../../utils/responsive';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    flexDirection: 'row',
    gap: Width(2),
    paddingVertical: 14,
    paddingHorizontal: Width(4),
  },
  containerContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {flexDirection: 'column', gap: Height(1.4)},
  categoryText: {fontSize: 16, color: COLORS.black25},
  description: {fontSize: 13, color: COLORS.grey, maxWidth: '70%'},
  rightContent: {
    flexDirection: 'column',
    gap: Height(1.4),
    alignItems: 'flex-end',
  },
  time: {fontSize: 13, color: COLORS.grey},
  amount: {fontSize: 16, fontWeight: '600'},
});
