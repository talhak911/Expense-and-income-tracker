import {StyleSheet} from 'react-native';
import {Height, Width} from '../../utils/responsive';
export const styles = StyleSheet.create({
  transactionButtons: {
    height: 56,
    width: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientContainer: {
    position: 'absolute',
    bottom: 70,
    height: Height(90),
    width: Width(100),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  container: {
    gap: 17,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: Height(50),
    width: Width(100),
  },
  innerButtonGradient: {
    height: 55,
    marginBottom: 15,
    width: 92,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  whiteBorder: {
    width: 10,
    backgroundColor: 'white',
  },
  closeButton: {
    position: 'absolute',
    bottom: -27,
    alignSelf: 'center',
    marginHorizontal: 3,
    marginBottom: 10,
    transform: [{rotate: '45deg'}],
  },
  closeButtonContainer: {
    height: 30,
    marginBottom: 30,
    width: 70,
  },
  transactionButtonsContainer: {
    flexDirection: 'row',
    gap: 36,
    marginBottom: 10,
  },
});
