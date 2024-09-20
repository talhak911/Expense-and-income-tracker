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
    marginHorizontal:10,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 16,
    marginHorizontal: 16,
    marginTop: 12,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    width: '50%',
    borderRadius: 16,
  },
  buttonTextNo: {color: COLORS.purple, fontWeight: '600', fontSize: 18},
  buttonTextYes: {color: 'white', fontWeight: '600', fontSize: 18},
});
