import {StyleSheet} from 'react-native';
import {Height, Width} from '../../utils/responsive';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  topContainer: {
    marginTop: Height(4),
    paddingLeft: Width(8),
    paddingRight: Width(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topView: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  name: {
    fontWeight: '600',
    color: COLORS.charcoal,
    fontSize: 24,
  },
  buttonsContainer: {
    flex: 1,
    gap: 2,
    marginTop: 40,
    marginHorizontal: Width(5),
  },
  container: {flex: 1, backgroundColor: COLORS.almostWhite},
  imageBorder: {
    borderColor: COLORS.deepPurple,
    borderRadius: Width(11),
    borderWidth: 2,
    padding: 3,
  },
  image: {
    width: Width(19),
    height: Width(19),
    overflow: 'hidden',
    backgroundColor: 'orange',
    borderRadius: Width(9.5),
  },
  menus: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 9,
    paddingLeft: 17,
    paddingTop: 18,
    paddingBottom: 19,
  },
  menuText: {
    color: COLORS.black25,
    fontSize: 16,
  },
});
