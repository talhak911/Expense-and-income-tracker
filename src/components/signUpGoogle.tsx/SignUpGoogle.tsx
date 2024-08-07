import { StyleSheet, Text, TouchableOpacity } from "react-native"
import GoogleIcon from "../../assets/icons/google";
import { useSignUpGoogle } from "./useSignUpGoogle";
export const SignUpGoogle=({loading,setLoading}:{loading:boolean,setLoading:(e:boolean)=>void})=>{
const {signInWithGoogle} = useSignUpGoogle({setLoading})
    return(
     <>
        <Text
              style={{
                alignSelf: 'center',
                marginVertical: 12,
                fontSize: 14,
                fontWeight:'bold',
                color: '#91919F',
              }}>
              or
            </Text>
            <TouchableOpacity
              disabled={loading}
              style={styles.buttonGoogle}
              onPress={() => signInWithGoogle()}>
              <GoogleIcon />
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Sign in with google
              </Text>
            </TouchableOpacity>
     </>
    )
}

const styles = StyleSheet.create({
  buttonGoogle:{
    marginLeft: 16,
    marginRight: 16,
    flexDirection:"row",
    gap:10,
    height: 48,
    borderRadius: 16,
    borderColor:"#F1F1FA",
    borderWidth:1,
    alignItems: "center",
    justifyContent: 'center'
  },
})