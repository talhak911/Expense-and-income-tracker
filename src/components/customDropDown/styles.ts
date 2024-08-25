import { StyleSheet } from "react-native";
import { FontSize, Height, Width } from "../../utils/responsive";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        height: Height(7),
        width:'100%',
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: 'white',
        borderWidth: FontSize(1),
        borderColor: COLORS.lightGrey,
        maxWidth:500,
        justifyContent:"space-between",
        paddingHorizontal: 16, 
      },
      dropdownText:{fontSize:16,color:COLORS.grey},
      categoriesText:{color:"black",fontSize:18}
})