import { StyleSheet } from "react-native";
import { FontSize, Height, Width } from "../../utils/responsive";
import { COLORS } from "../../constants/colors";

export const styles= StyleSheet.create({
    container:{alignItems: 'center', gap: Height(1)},
    logoutText:{
        color: COLORS.charcoal,
        fontSize: FontSize(18),
        fontWeight: '600',
      },
      description:{
        fontSize: FontSize(16),
        color: COLORS.grey,
        textAlign: 'center',
      },
      buttonsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 16,
      },
      button:{
        alignItems: 'center',
        justifyContent: 'center',
        height: Height(8),
        width: Width(40),
        borderRadius: 16,
      },
      buttonTextNo:{color: COLORS.purple, fontWeight: '600'},
      buttonTextYes:{color:"white", fontWeight: '600'}
})