import {StyleSheet} from 'react-native';
import {Width, Height} from '../../utils/responsive';
import {COLORS} from '../../constants/color';
export const styles = StyleSheet.create({
  containerContent: {
    flex: 1,
    paddingHorizontal: Width(4),
  },
  container: {flex: 1, backgroundColor: 'white'},
  header: {
    height: Height(7.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdown: {
    flexDirection: 'row',
    gap: 3,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    alignItems: 'center',
    borderRadius: 40,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  financialReport: {
    marginVertical: 6,
    backgroundColor: COLORS.lightPurple,
    paddingLeft: 16,
    paddingRight: 10,
    flex: 1,
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  icon: {
    transform: [{rotate: '-90deg'}, {scale: 1.5}],
  },
  financialReportText: {
    fontSize: 16,
    color: COLORS.purple,
  },
  headingText: {
    fontSize: 18,
    marginVertical: 13,
    fontWeight: '600',
    color: COLORS.charcoal,
  },
});
