import { StyleSheet } from "react-native";
import { Height,FontSize,Width } from "../../utils/responsive";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingVertical: Height(1.4),
      paddingHorizontal: Width(4),
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    heading: {
      fontSize: 18,
      fontWeight: '600',
      color: COLORS.charcoal,
    },
    button: {
      backgroundColor: COLORS.lightPurple,
      paddingHorizontal: 16,
      paddingVertical: Height(1),
      borderRadius: FontSize(16),
    },
  });
  