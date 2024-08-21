import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { FontSize } from '../../utils/responsive';
import { COLORS } from '../../constants/colors';
import { CustomButton } from '../customButton/CustomButtom';


export const FilterTransactions = ({
  filterBy,
  sortBy,
  close,
  setFilterBy,
  setSortBy,
}) => {
  const handleFilterBy = button => {
    setFilterBy(prevActiveButton => (prevActiveButton === button ? null : button));
  };

  const handleSortBy = button => {
    setSortBy(prevActiveButton => (prevActiveButton === button ? null : button));
  };

  const handleReset = () => {
    setFilterBy(null);
    setSortBy(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingsText}>Filter Transaction</Text>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={{color: COLORS.purple}}>Reset</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.headingsText}>Filter By</Text>
      <View style={{flexDirection: 'row', gap: 8}}>
        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: filterBy === 'income' ? COLORS.lightPurple : 'white',
            borderColor: COLORS.lightBlack,
          }}
          onPress={() => handleFilterBy('income')}>
          <Text
            style={{
              color: filterBy === 'income' ? COLORS.purple : COLORS.charcoal,
            }}>
            Income
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: filterBy === 'expense' ? COLORS.lightPurple : 'white',
            borderColor: COLORS.lightBlack,
          }}
          onPress={() => handleFilterBy('expense')}>
          <Text
            style={{
              color: filterBy === 'expense' ? COLORS.purple : COLORS.charcoal,
            }}>
            Expense
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.headingsText}>Sort By</Text>
      <View style={{flexWrap:"wrap",flexDirection: 'row', gap: 8}}>
        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: sortBy === 'highest' ? COLORS.lightPurple : 'white',
            borderColor: COLORS.lightBlack,
          }}
          onPress={() => handleSortBy('highest')}>
          <Text
            style={{
              color: sortBy === 'highest' ? COLORS.purple : COLORS.charcoal,
            }}>
            Highest
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: sortBy === 'lowest' ? COLORS.lightPurple : 'white',
            borderColor: COLORS.lightBlack,
          }}
          onPress={() => handleSortBy('lowest')}>
          <Text
            style={{
              color: sortBy === 'lowest' ? COLORS.purple : COLORS.charcoal,
            }}>
            Lowest
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: sortBy === 'newest' ? COLORS.lightPurple : 'white',
            borderColor: COLORS.lightBlack,
          }}
          onPress={() => handleSortBy('newest')}>
          <Text
            style={{
              color: sortBy === 'newest' ? COLORS.purple : COLORS.charcoal,
            }}>
            Newest
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: sortBy === 'oldest' ? COLORS.lightPurple : 'white',
            borderColor: COLORS.lightBlack,
          }}
          onPress={() => handleSortBy('oldest')}>
          <Text
            style={{
              color: sortBy === 'oldest' ? COLORS.purple : COLORS.charcoal,
            }}>
            Oldest
          </Text>
        </TouchableOpacity>
      </View>
  <CustomButton loading={false} onPress={close} title='Apply'/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  headingsText: {
    fontSize: FontSize(16),
    color: COLORS.charcoal,
  },
  heading: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resetButton: {
    backgroundColor: COLORS.lightPurple,
    paddingHorizontal: 16,
    borderRadius: 40,
    paddingVertical: 7,
  },
  button: {
    paddingHorizontal: 24,
    borderRadius: 24,
    paddingVertical: 12,
    borderWidth: 1,
  },
});