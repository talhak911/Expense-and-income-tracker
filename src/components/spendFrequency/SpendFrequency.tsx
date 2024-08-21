
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Height, FontSize, Width } from '../../utils/responsive';
import { COLORS } from '../../constants/colors';
import { useSpendFrequency } from './useSpendFrequency';
import LineGraph from '../graph/Graph';

const HomeMenus = [
  { name: 'Today', filter: 'today' },
  { name: 'Week', filter: 'week' },
  { name: 'Month', filter: 'month' },
  { name: 'Year', filter: 'year' },
];

export default function SpendFrequency() {
  const { filterBy, setFilterBy, filteredTransactions } = useSpendFrequency();

  return (
    <View>
      <Text style={[{ marginTop: Height(5) }, styles.headingSmall]}>
        Spend Frequency
      </Text>

      {/* Pass the filtered transactions to LineGraph */}
      <LineGraph transactions={filteredTransactions} filterBy={filterBy} />

      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: Width(4),
          paddingBottom: Height(1),
          justifyContent: 'space-between',
        }}>
        {HomeMenus.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setFilterBy(item.filter)}
            style={{
              paddingHorizontal: Width(6),
              paddingVertical: Width(2),
              borderRadius: FontSize(16),
              backgroundColor: filterBy === item.filter ? COLORS.grey : '#FCEED4',
            }}>
            <Text
              style={{
                color: filterBy === item.filter ? COLORS.white : '#FCAC12',
                fontWeight: 'bold',
                fontSize: FontSize(14),
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingSmall: {
    paddingLeft: Width(4),
    fontSize: FontSize(18),
    fontWeight: 'semibold',
    color: '#0D0E0F',
  },
});
