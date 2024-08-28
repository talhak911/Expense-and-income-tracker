import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/color";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 26,
    alignItems: 'center',
    marginTop: 17,
    marginBottom: 27,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.purple,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  label: {
    marginLeft: 8,
    fontSize: 14,
    color: 'black',
  },
});
