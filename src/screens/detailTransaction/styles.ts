import { StyleSheet } from "react-native";
import {COLORS} from '../../constants/colors';
import {FontSize, Height, Width} from '../../utils/responsive';
export const styles = StyleSheet.create({
    greyText: {
      color: COLORS.grey,
    },
    floatingCardTextContainer: {gap: 5, alignItems: 'center'},
    bold_16: {
      textTransform: 'capitalize',
      fontSize: FontSize(16),
      fontWeight: '600',
      color: COLORS.charcoal,
    },
    floatingCard: {
      width: '92%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginHorizontal: Width(4),
      marginTop: -26,
      borderRadius: 12,
      borderWidth: FontSize(1),
      borderColor: COLORS.lightGrey,
      backgroundColor: 'white',
      paddingVertical: 12,
    },
    border: {
      borderColor: COLORS.lightBlack,
      borderWidth: 2,
      borderStyle: 'dashed',
    },
    details: {
      marginTop: Height(2),
      paddingHorizontal: Width(4),
      gap: Height(1.6),
    },
    description: {
      fontSize: FontSize(16),
      color: COLORS.charcoal,
    },
    heading: {
      fontSize: FontSize(16),
      color: COLORS.grey,
      fontWeight: '600',
    },
    image: {
      resizeMode: 'cover',
      height: 116,
      borderRadius: 8,
    },
    button: {
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: Width(4),
      paddingBottom: Height(2),
    },
    date: {
      marginTop: Height(0.7),
      marginBottom: Height(7),
      color: COLORS.white,
      fontSize: FontSize(13),
    },
    descriptionInHeader: {
      marginTop: Height(0.8),
      color: COLORS.white,
      fontSize: FontSize(16),
    },
    amount: {
      fontSize: FontSize(48),
      color: COLORS.white,
      fontWeight: 'bold',
    },
    topView: {
      borderBottomLeftRadius: Width(6),
      borderBottomRightRadius: Width(6),
    },
    container: {flex: 1, backgroundColor: 'white'},
    topViewContent: {
      alignSelf: 'center',
      marginTop: Height(0.5),
      alignItems: 'center',
    },
  });
  