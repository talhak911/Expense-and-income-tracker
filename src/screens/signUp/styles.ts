import {StyleSheet} from 'react-native';
import {Height, Width} from '../../utils/responsive';
import { COLORS } from '../../constants/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: Height(6),
  },

  gap: {
    gap: Height(2.9),
    marginHorizontal: Width(4),
  },
  footerView: {
    marginTop: Height(2),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    marginRight: Width(1),
    color: COLORS.grey,
  },
  footerLink: {
    borderBottomWidth: 1,
    borderBottomColor:  COLORS.purple,
    color: COLORS.purple,
  },
});
