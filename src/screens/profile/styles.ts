import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';

export const styles = StyleSheet.create({
  topContainer: {
    marginTop: 30,
    paddingLeft: 34,
    paddingRight: 16,
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
    lineHeight:29
  },
  buttonsContainer: {
    flex: 1,
    gap: 2,
    marginTop: 40,
    marginHorizontal: 20,
  },
  container: {flex: 1, backgroundColor: COLORS.almostWhite},
  imageBorder: {
    borderColor: COLORS.deepPurple,
    borderRadius: 50,
    borderWidth: 2,
    padding: 3,
  },
  image: {
    width: 80,
    height: 80,
    overflow: 'hidden',
    backgroundColor: 'orange',
    borderRadius: 40,
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
