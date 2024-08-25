import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {Height, Width} from '../../utils/responsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  imageContainer: {
    marginTop: Height(4),
    borderColor: COLORS.deepPurple,
    borderRadius: 70,
    alignSelf: 'center',
    position: 'relative',
    borderWidth: 2,
    padding: 3,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'grey',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  bottomView: {
    marginTop: 51,
    paddingHorizontal: Width(4),
    gap: 24,
  },
  headingText: {
    color: COLORS.black50,
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: Width(3),
    marginBottom: 8,
  },
  buttonContainer: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    paddingHorizontal: Width(4),
    paddingBottom: 16,
    backgroundColor: 'white',
  },
});
