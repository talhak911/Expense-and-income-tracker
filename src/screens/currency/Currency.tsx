import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './CurrencyStyles';
import CheckMark from '../../assets/icons/checkMark';
import {useCurrency} from './useCurrency';
import {CURRENCIES} from '../../constants/constants';

export default function Currency() {
  const {selectedCurrency, setCurrency} = useCurrency();
  return (
    <SafeAreaView style={styles.container}>
      {CURRENCIES.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setCurrency(item.symbol);
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>{item.currency}</Text>
          {selectedCurrency === item.symbol && <CheckMark size={24} />}
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
}
