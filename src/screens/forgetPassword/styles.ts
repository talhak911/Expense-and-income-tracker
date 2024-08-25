import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {Height, Width} from '../../utils/responsive';

export const styles = StyleSheet.create({
  heading: {
    fontWeight: '600',
    fontSize: 24,
    color: COLORS.charcoal,
  },
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'white',
    paddingTop: Height(7.2) < 69 ? Height(7.2) : 69,
    paddingHorizontal: Width(4),
  },
  content: {
    gap: Height(4),
    marginTop: Height(6),
    alignItems: 'center',
  },
});
