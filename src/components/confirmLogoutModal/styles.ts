import {StyleSheet} from 'react-native';
import {Height, Width} from '../../utils/responsive';
import {COLORS} from '../../constants/color';

export const styles = StyleSheet.create({
  container: {marginTop: -10, alignItems: 'center', gap: 16},
  logoutText: {
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
    marginHorizontal: 16,
    gap: 16,
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
