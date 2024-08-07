import { StyleSheet, Text, TouchableOpacity } from "react-native"

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
  marginLeft: 16,
  marginRight: 16,
  marginTop: 20,
  height: 48,
  borderRadius: 16,
  alignItems: "center",
  justifyContent: 'center',
  maxWidth:400
 
},
buttonTitle: {
  color: 'white',
  fontSize: 16,
  fontWeight: "bold"
},
})