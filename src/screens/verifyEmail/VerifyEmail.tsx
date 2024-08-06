import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import { useVerifyEmail } from './useVerifyEmail';


export const VerifyEmail = () => {
 const {sendEmail} = useVerifyEmail()
 if (sendEmail) return (
    <View style={{flex: 1, justifyContent: 'center',backgroundColor:'white'}}>
     <Text>Click the Link on your Email to verify yourself</Text>
     <Text>If you did not receive email send again</Text>
      <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={() => sendEmail()}>
        <Text style={{height:30,width:30,padding:5}}>Send verification Email again</Text>
      </TouchableOpacity>
    \
    </View>
  );
};
