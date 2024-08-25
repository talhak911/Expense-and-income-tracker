import { StyleSheet } from 'react-native';
import {FontSize, Height, Width} from '../../utils/responsive';
import { COLORS } from '../../constants/colors';
import { FontInter } from '../../constants/fonts';
export const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: 'white', paddingHorizontal: Width(4)},
    topRow:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: Width(5.5),  paddingVertical: Height(0.9),
      alignItems: 'center',
  
    },
    sortTransactions:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: Height(2),
    },
    monthButton:{
      flexDirection: 'row',
      gap: 3,
      borderWidth: 1,
      borderColor: COLORS.lightGrey,
      alignItems: 'center',
      borderRadius: 40,
      paddingVertical: Height(0.7),
      paddingHorizontal: 12,
    },
    totalAmount:{
      position: 'absolute',
      alignSelf: 'center',
      marginTop: 95,
      fontSize: 32,
      fontFamily: FontInter,
      fontWeight: 'bold',
      color: 'black',
    },
    toggleButtonsContainer:{
      marginTop: Height(6.6),
      flex: 1,
      flexDirection: 'row',
      borderRadius: FontSize(32),
      backgroundColor: COLORS.lightGrey,
    },
    toggleButton:    {width: Width(46),
    paddingVertical: Height(1.7),
    alignItems: 'center',
    borderRadius: FontSize(32)}
  });
  