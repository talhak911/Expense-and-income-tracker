import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/color';
import { Width } from '../../utils/responsive';

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.16)',
  },
  buttonsContainer: {
    paddingTop: 32,
    flexDirection: 'row',
    gap: 8,
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    alignItems: 'center',
  },
  line: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.purple25,
    marginBottom: 20,
  },
  button: {
    flex: 1,
    gap: 4,
    alignItems: 'center',
    borderRadius: 16,
    paddingVertical: 16,
    // paddingHorizontal: 16,
    // width:Width(30),
    backgroundColor: COLORS.lightPurple,
  },
  buttonText: {
    fontWeight: '600',
    color: COLORS.purple,
    fontSize: 16,
  },
});
