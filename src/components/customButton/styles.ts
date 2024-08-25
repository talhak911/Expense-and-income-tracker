import {StyleSheet} from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.purple,
    height: 56,
    width: '100%',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 400,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
