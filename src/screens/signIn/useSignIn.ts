import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import auth from '@react-native-firebase/auth';
import Snackbar from "react-native-snackbar";
import { useAppDispatch } from "../../hooks/useStore";
import { signIn } from "../../redux/slices/authSlice";
export const useSignIn=()=>{
  const dispatch = useAppDispatch()
    const navigation = useNavigation();
    const onSignUpPress = () => {
        navigation.navigate('SignUp');
      };
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const onSignInPress =async () => {
        try {
          if(!email || !password){
           
            Snackbar.show({
              text: "Email and Password required",
              duration: Snackbar.LENGTH_SHORT,
              backgroundColor:"red"
            });
            return;
          }
          else{
           
            await dispatch(signIn({email,password}))}
        } catch (error: any) {
        if (error.code === 'auth/invalid-email' || 'auth/wrong-password' ) {
       
          Snackbar.show({
                text: "Invalid email or password",
                duration: Snackbar.LENGTH_SHORT,
                 backgroundColor:"red"
              });
          } else {
            Snackbar.show({
              text: error.message,
              duration: Snackbar.LENGTH_SHORT,
               backgroundColor:"red"
            });
          }
        }
      };
    
    return{
        setEmail,
        setPassword,
        onSignInPress,
        onSignUpPress,
        email,
        password
    }
}