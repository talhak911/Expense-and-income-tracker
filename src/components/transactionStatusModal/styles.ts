import {StyleSheet} from 'react-native';
import {Width} from '../../utils/responsive';

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.16)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 16,
    paddingHorizontal: Width(4),
    marginHorizontal: Width(5),
    paddingTop: 27,
    paddingBottom: 19,
    gap: 16,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: 'black',
  },
});
