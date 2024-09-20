import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './HomeCardStyles'
import Transaction from '../../assets/icons/transaction'
import { COLORS } from '../../constants/color'

export default function HomeCard ({amount,isIncome,currency}:{currency:string,amount:string,isIncome:boolean}){
  return (
    <View style={[styles.card, {backgroundColor: isIncome?COLORS.green:COLORS.red}]}>
    <View style={styles.icon}>
      <Transaction isIncome={isIncome} currentColor={isIncome?COLORS.green:COLORS.red} />
    </View>
    <View style={{gap: 1}}>
      <Text style={{color: COLORS.white}}>{isIncome?"Income":"Expenses"}</Text>
      <Text
        style={styles.amount}>
      {currency}{amount}
      </Text>
    </View>
  </View>
  )
}

