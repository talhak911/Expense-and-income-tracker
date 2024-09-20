import {Text, View} from 'react-native';
import {COLORS} from '../../constants/color';
import {TransactionCardProps} from '../../types/types';
import {CATEGORY_ICON} from '../../constants/categoryIcons';
import {useAppSelector} from '../../hooks/useStore';
import {styles} from './styles';

export const TransactionCard = ({
  category,
  description,
  type,
  time,
  amount,
}: TransactionCardProps) => {
  const currency = useAppSelector(state => state.transactions.currency);
  return (
    <View style={styles.container}>
      {CATEGORY_ICON(category)}
      <View style={styles.containerContent}>
        <View style={styles.category}>
          <Text style={styles.categoryText}>{category}</Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.description}>
            {description}
          </Text>
        </View>
        <View style={styles.rightContent}>
          <Text
            style={{
              color: type === 'income' ? COLORS.green : COLORS.red,
              ...styles.amount,
            }}>
            {type === 'income' ? '+' : '-'}
            {currency}
            {amount}
          </Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    </View>
  );
};
