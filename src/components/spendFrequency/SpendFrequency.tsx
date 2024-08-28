import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/color';
import {useSpendFrequency} from './useSpendFrequency';
import LineGraph from '../lineGraph/LineGraph';
import {spendFrequencyFilters} from '../../constants/constants';
import {styles} from './styles';
import Graph from '../graph/Graph';

export default function SpendFrequency() {
  const {filterBy, setFilterBy, filteredTransactions} = useSpendFrequency();

  return (
    <View>
      <Text style={styles.headingSmall}>Spend Frequency</Text>
      <LineGraph transactions={filteredTransactions} filterBy={filterBy} />
     {/* <Graph transactions={filteredTransactions} /> */}
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
