import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import { Height, Width} from '../../utils/responsive';
import {FontInter} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 12,
  },
  headingSmall: {
    paddingLeft: Width(4),
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.charcoal,
  },
  imageBorder: {
    borderColor: COLORS.deepPurple,
    borderRadius: 30,
    borderWidth: 2,
    padding: 3,
  },
  image: {
    height: 32,
    width: 32,
    borderRadius: 16
  },
  monthContainer: {
    borderWidth: 1,
    borderRadius: 40,
    borderColor: COLORS.lightGrey,
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  monthText: {
    color: COLORS.black50,
    fontFamily: FontInter,
    fontSize: 14,
  },
  amount: {
    color: COLORS.black70,
    fontFamily: FontInter,
    fontSize: 40,
    fontWeight: '600',
  },
  balanceHeading: {color: COLORS.grey, fontSize: 14},
  cards: {
    marginTop: Height(3),
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
});
