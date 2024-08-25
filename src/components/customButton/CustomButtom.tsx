import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const CustomButton = ({
  loading,
  onPress,
  title,
}: {
  loading: boolean;
  onPress: () => void;
  title: string;
}) => {
  return (
    <TouchableOpacity
      disabled={loading}
      style={styles.button}
      onPress={() => onPress()}>
      <Text style={styles.buttonTitle}>
        {loading ? <ActivityIndicator size="small" color="white" /> : title}
      </Text>
    </TouchableOpacity>
  );
};
