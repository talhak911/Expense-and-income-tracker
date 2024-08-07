import { Button, Text, View } from "react-native";
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
     </View>
    );
  };