import {StyleSheet} from 'react-native';
import {FontSize, Width} from '../../utils/responsive';
import {COLORS} from '../../constants/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 56,
  },
  containerContent: {gap: 24, marginHorizontal: Width(4)},
  logo: {
    flex: 1,
    height: 120,
    width: 90,
    alignSelf: 'center',
    margin: 30,
  },
  forgetPasswordContainer: {
    marginTop: 16,
    alignSelf: 'flex-end',
    marginRight: 16,
  },
  forgetPasswordText: {fontWeight: 'bold', color: COLORS.purple},
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: COLORS.blue50,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: FontSize(14),
    color: 'black',
    marginRight: 5,
  },
  footerLink: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.purple,
    color: COLORS.purple,
  },
});
