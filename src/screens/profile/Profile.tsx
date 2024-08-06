


import { Button, Text, View } from "react-native";
import auth from "@react-native-firebase/auth"
import { useProfile } from "./useProfile";

  export default function ProfileScreen  ()  {
const {signOutUser} = useProfile()

    return (
     <View>
       <Button
        title="signout"
        onPress={() =>
          signOutUser()
        }
      />
      {/* <Text>
        {user?"Verified ":"not verifed"}
      </Text> */}
     </View>
    );
  };