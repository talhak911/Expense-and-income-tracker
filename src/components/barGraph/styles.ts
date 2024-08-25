import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { Height } from "../../utils/responsive";

export const styles = StyleSheet.create({
    container:{
        marginTop: 21,
        marginBottom:5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      containerContant:{
        flexDirection: 'row',
        gap: 7,
        borderWidth: 1,
        borderColor: COLORS.lightGrey,
        alignItems: 'center',
        borderRadius: 40,
        paddingVertical: Height(0.7),
        paddingHorizontal: 12,
      },
      amountContainer:{
        height: 14,
        width: 14,
        borderRadius: 7,
      }
})