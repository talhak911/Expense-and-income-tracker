import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {Height} from '../../utils/responsive';

export const styles = StyleSheet.create({
  separator: {
    alignSelf: 'center',
    marginVertical: 12,
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.grey,
  },
  buttonGoogle: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    height: Height(7),
    borderRadius: 16,
    maxWidth:400,
    borderColor: '#F1F1FA',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {color: 'black', fontWeight: 'bold'},
});
