import { StyleSheet } from "react-native";
import { Width,FontSize,Height } from "../../utils/responsive";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
    headingSmall: {
      paddingLeft: Width(4),
  
      fontSize: FontSize(18),
      fontWeight: 'semibold',
      color: '#0D0E0F',
    },
    icon: {
      height: 48,
      borderRadius: 16,
      width: 48,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.white,
    },
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 164,
      gap: 10,
      borderRadius: FontSize(32),
      paddingHorizontal: Width(5),
      paddingVertical: Width(5),
    },
  });
  