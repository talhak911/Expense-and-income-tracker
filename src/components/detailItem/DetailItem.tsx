import {View, Text} from 'react-native';

export type DetailItemProps= {
  label: string;
  value: string;
  styles: any;
}

export const DetailItem: React.FC<DetailItemProps> = ({label, value, styles}) => {
  return (
    <View style={styles.floatingCardTextContainer}>
      <Text style={styles.greyText}>{label}</Text>
      <Text style={styles.bold_16}>{value}</Text>
    </View>
  );
};
