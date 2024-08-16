import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { FontSize, Width } from "../../utils/responsive";

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.16)',
  },
  buttonsContainer: {
    paddingTop: 48,
    flexDirection: 'row',
    gap: 8,
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: Width(4),
    paddingVertical:Width(4),
    alignItems: 'center',
  },
  line: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#ccc',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    gap: 4,
    alignItems: 'center',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: COLORS.lightPurple,
  },
  buttonText: {
    fontWeight: 'semibold',
    color: COLORS.purple,
    fontSize: FontSize(16),
  },
});
