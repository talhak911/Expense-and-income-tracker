import {
    Text,

    View,
  } from 'react-native';
  import ShoppingIcon from '../../assets/icons/shopping';

  import {FontSize, Height, Width} from '../../utils/responsive';
import { COLORS } from '../../constants/colors';
import { TransactionCardProps } from '../../types/types';


export const TransactionCard=({icon,category,description,type,time,amount}:TransactionCardProps)=>{
   return(
    <View
    style={{
      flexDirection: 'row',
      gap: Width(2),
      paddingVertical: Height(1.9),
      paddingHorizontal: Width(4),
    }}>
  { icon}
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'column', gap: Height(1.4)}}>
        <Text style={{fontSize: FontSize(16), color: '#292B2D'}}>
          {/* Shopping */}
          {category}
        </Text>
        <Text style={{fontSize: FontSize(13), color: '#91919F'}}>
          {/* Buy some grocery */}
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
            fontSize: FontSize(16),
            color: type==='income'?COLORS.green:COLORS.red,
            fontWeight: 'semibold',
          }}>
          {type==='income'?'+':'-'} ${amount}
        </Text>
        <Text style={{fontSize: FontSize(13), color: '#91919F'}}>
          {/* 10:00 AM */}
          {time}
        </Text>
      </View>
    </View>
  </View>
   )
}