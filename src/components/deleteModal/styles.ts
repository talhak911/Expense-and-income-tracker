import {StyleSheet} from 'react-native';
import {Height, Width} from '../../utils/responsive';
import {COLORS} from '../../constants/color';

export const styles = StyleSheet.create({
  container: {alignItems: 'center', gap: Height(1)},
  heading: {
    color: COLORS.charcoal,
    fontSize: 18,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    color: COLORS.grey,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 16,
    width: '100%',
    marginTop: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    width: Width(40),
    borderRadius: 16,
  },
});
