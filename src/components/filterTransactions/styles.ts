import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  headingsText: {
    fontWeight: '600',
    fontSize: 16,
    color: COLORS.charcoal,
  },
  heading: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resetButton: {
    backgroundColor: COLORS.lightPurple,
    paddingHorizontal: 16,
    borderRadius: 40,
    paddingVertical: 7,
  },
  button: {
    paddingHorizontal: 24,
    borderRadius: 24,
    paddingVertical: 12,
    borderWidth: 1,
  },
  menus: {flexWrap: 'wrap', flexDirection: 'row', gap: 8},
  filter:{flexDirection: 'row', gap: 8}
});