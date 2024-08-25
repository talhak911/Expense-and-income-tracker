import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Height, FontSize, Width} from '../../utils/responsive';
import {COLORS} from '../../constants/colors';
import {useSpendFrequency} from './useSpendFrequency';
import LineGraph from '../lineGraph/LineGraph';
import {spendFrequencyFilters} from '../../constants/constants';
import {styles} from './styles';

export default function SpendFrequency() {
  const {filterBy, setFilterBy, filteredTransactions} = useSpendFrequency();

  return (
    <View>
      <Text style={ styles.headingSmall}>
        Spend Frequency
      </Text>
      <LineGraph transactions={filteredTransactions} filterBy={filterBy} />

      <View style={styles.alignCenter}>
        <View style={styles.menusContainer}>
          {spendFrequencyFilters.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setFilterBy(item.filter)}
              style={[
                styles.button,
                {
                  backgroundColor:
                    filterBy === item.filter ? COLORS.lightYellow : 'white',
                },
              ]}>
              <Text
                style={{
                  color: filterBy === item.filter ? COLORS.yellow : COLORS.grey,
                  fontWeight: filterBy === item.filter ? 'bold' : 'normal',
                  fontSize: 14,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}
