import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles';
import DownIcon from '../../assets/icons/down';
import {useSettings} from './useSettings';

export default function Settings() {
  const {navigateToCurrency, selectedCurrency} = useSettings();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={navigateToCurrency} style={styles.button}>
        <Text style={styles.buttonText}>Currency</Text>
        <View style={styles.currency}>
          <Text style={styles.currencyText}>{selectedCurrency}</Text>
          <View style={styles.arrow}>
            <DownIcon />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Notification</Text>

        <View style={styles.arrow}>
          <DownIcon />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
