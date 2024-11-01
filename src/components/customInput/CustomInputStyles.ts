import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
export const styles = StyleSheet.create({
  inputContainer: {
    height: 56,
    borderRadius: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 16,
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
  },
  inputField: {
    fontSize: 16,
    color: 'black',
    width: '90%',
    paddingLeft: 16,
  },
});
