import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '../../types/types'
import { useAppSelector } from '../../hooks/useStore'

export const useSettings = () => {
    const selectedCurrency = useAppSelector((state) => state.transactions.currency);

    const navigation = useNavigation<StackNavigationProp>()
const navigateToCurrency=()=>{
    navigation.navigate("Currency")
}
    return {
        selectedCurrency,
   navigateToCurrency
  }
}
