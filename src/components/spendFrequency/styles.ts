import {StyleSheet} from 'react-native';
import {Width, FontSize, Height} from '../../utils/responsive';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  alignCenter: {
    marginTop:-50,
    alignSelf: 'center',
  },
  headingSmall: {
    marginBottom: 10,
    marginTop: Height(5),
    paddingLeft: Width(4),
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.charcoal,
  },
  menusContainer: {
    borderRadius: FontSize(16),
    borderWidth: FontSize(1),
    flexDirection: 'row',
    marginHorizontal:16,
    borderColor: COLORS.white,
    marginBottom: Height(1),
    justifyContent: 'space-between',
  },
  button: {
    paddingHorizontal: Width(6),
    paddingVertical: Width(2),
    borderRadius: FontSize(16),
  },
});
