import {StyleSheet} from 'react-native';
import {Height, FontSize} from '../../utils/responsive';
export const styles = StyleSheet.create({
  input: {
     height: 56,
    alignSelf: 'center',
    color: 'black',
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'white',
    borderWidth: FontSize(1),
    fontSize: 16,
    borderColor: '#F1F1FA',
    paddingLeft: 16,
  },
});
