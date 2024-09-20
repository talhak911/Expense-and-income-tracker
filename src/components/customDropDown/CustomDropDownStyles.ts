import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/color";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        height: 56,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: 'white',
        borderWidth:1,
        borderColor: COLORS.lightGrey,
        justifyContent:"space-between",
        paddingHorizontal: 16, 
      },
      dropdownText:{fontSize:16,color:COLORS.grey},
      categoriesText:{color:"black",fontSize:18}
})