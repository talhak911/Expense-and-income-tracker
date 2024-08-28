import {StyleSheet} from 'react-native';
import {Height, Width} from '../../utils/responsive';
import {COLORS} from '../../constants/color';
import {FontInter} from '../../constants/fonts';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', paddingHorizontal: Width(4)},
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Width(5.5),
    paddingVertical: Height(0.9),
    alignItems: 'center',
  },
  sortTransactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Height(2),
  },
  monthButton: {
    flexDirection: 'row',
    gap: 3,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    alignItems: 'center',
    borderRadius: 40,
    paddingVertical: Height(0.7),
    paddingHorizontal: 12,
  },
  pieChartContainer: {position: 'relative', alignSelf: 'center'},
  totalAmount: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 95,
    fontSize: 32,
    fontFamily: FontInter,
    fontWeight: 'bold',
    color: 'black',
  },
  toggleButtonsContainer: {
    marginTop: Height(6.6),
    flex: 1,
    flexDirection: 'row',
    borderRadius: 32,
    backgroundColor: COLORS.lightGrey,
  },
  toggleButton: {
    width:'50%',
    height: 48,
    justifyContent:"center",
    alignItems: 'center',
    borderRadius: 32,
  },
});
