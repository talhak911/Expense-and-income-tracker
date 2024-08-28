import {StyleSheet} from 'react-native';
import {Width, Height} from '../../utils/responsive';
import {COLORS} from '../../constants/color';

export const styles = StyleSheet.create({
  alignCenter: {
    // marginTop:-50,
    alignSelf: 'center',
  },
  headingSmall: {
    marginBottom: 10,
    marginTop: 35,
    paddingLeft: Width(4),
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.charcoal,
  },
  menusContainer: {
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: 'row',
    marginHorizontal:16,
    borderColor: COLORS.white,
    justifyContent: 'space-between',
  },
  button: {
    width:'25%',
    alignItems:"center",
    paddingVertical: 8,
    borderRadius: 16,
  },
});
