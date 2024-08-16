import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { FontSize, Height, Width } from "../../utils/responsive"

export const CustomButton =({loading,onPress,title}:{loading:boolean,onPress:()=>void,title:string})=>{

    return (
      <TouchableOpacity
      disabled={loading}
      style={styles.button}
      onPress={() => onPress()}>
      <Text style={styles.buttonTitle}>
       {loading?"Loading": title
      }
      </Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
 button:{
  backgroundColor: '#7F3DFF',
  // marginLeft: 16,
  // marginRight: 16,
  //marginHorizontal:Width(4),

  // height: 56,
  height: Height(7),

width:'100%',
  borderRadius: 16,

  alignItems: "center",
  justifyContent: 'center',
  maxWidth:500
 
},
buttonTitle: {
  color: 'white',
  //fontSize: 16,
  fontSize: FontSize(16),
  fontWeight: "600"
},
})