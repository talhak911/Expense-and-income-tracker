import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {Height, Width} from '../../utils/responsive';
import { FontInter } from '../../constants/fonts';

export const styles = StyleSheet.create({

  topView: {flex: 4, paddingLeft: Width(6.5)},
  heading: {
    opacity: 0.64,
    color: COLORS.white,
    fontSize: 18,
    marginTop: Height(6.5),
  },
  amountContainer:{flexDirection: 'row', alignItems: 'center'},
  currency:{
    fontSize: 64,
    color: COLORS.white,
    fontWeight: '600',
    fontFamily: FontInter,
    lineHeight: 72,
  },
  amountInput:{
    lineHeight: 75,
    fontSize: 64,
    color: COLORS.white,
    fontWeight: '600',
    textAlignVertical: 'center',
    fontFamily: FontInter,
  },
  bottomView:{
    flex: 4,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  bottomContent:{
    paddingVertical: Height(2.5),
    paddingHorizontal: Width(4),
    flex: 1,
    gap: 16,
  }
});
