import {StyleSheet} from 'react-native';
import {Height, Width} from '../../utils/responsive';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    flexGrow: 1,
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
    width: Width(29),
    height: Width(29),
    borderRadius: Width(14.5),
    backgroundColor: 'orange',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  content: {
    marginTop: Height(2),
    paddingHorizontal: Width(4),
    gap: Height(2.8),
  },
  buttonContainer: {
    alignItems:"center",
    paddingHorizontal: Width(4),
    paddingBottom: Height(2),
    backgroundColor: 'white',
  },
});
