import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Transaction from '../../assets/icons/transaction'
import { FontSize } from '../../utils/responsive'
import { COLORS } from '../../constants/colors'

export default function HomeCard ({amount,isIncome}:{amount:string,isIncome:boolean}){
  return (
    <View style={[styles.card, {backgroundColor: isIncome?COLORS.green:COLORS.red}]}>
    <View style={styles.icon}>
      <Transaction isIncome={isIncome} currentColor={isIncome?COLORS.green:COLORS.red} />
    </View>
    <View style={{gap: FontSize(1)}}>
      <Text style={{color: COLORS.white}}>{isIncome?"income":"Expenses"}</Text>
      <Text
        style={{
          fontSize: FontSize(22),
          fontWeight: 'semibold',
          color: COLORS.white,
        }}>
   {amount}
      </Text>
    </View>
  </View>
  )
}

