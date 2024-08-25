import {Text, View} from 'react-native';
import {FontSize, Height, Width} from '../../utils/responsive';
import {COLORS} from '../../constants/colors';
import {TransactionCardProps} from '../../types/types';
import {CATEGORYICON} from '../../constants/categoryIcons';
import { useAppSelector } from '../../hooks/useStore';

export const TransactionCard = ({
  category,
  description,
  type,
  time,
  amount,
}: TransactionCardProps) => {
  const currency = useAppSelector(state=>state.transactions.currency)
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: 24,
        flexDirection: 'row',
        gap: Width(2),
        paddingVertical: 14,
        paddingHorizontal: Width(4),
      }}>
      {CATEGORYICON(category)}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'column', gap: Height(1.4)}}>
          <Text style={{fontSize:16, color: '#292B2D'}}>
            {category}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{fontSize: 13, color: '#91919F', maxWidth: '70%'}}>
            {description}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            gap: Height(1.4),
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: type === 'income' ? COLORS.green : COLORS.red,
              fontWeight: '600',
            }}>
            {type === 'income' ? '+' : '-'}{currency}{amount}
          </Text>
          <Text style={{fontSize: 13, color: '#91919F'}}>{time}</Text>
        </View>
      </View>
    </View>
  );
};
