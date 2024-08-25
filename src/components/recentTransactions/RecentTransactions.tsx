import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useRecentTransactions} from './useRecentTransactions';
import {FontSize, Height, Width} from '../../utils/responsive';
import {TransactionCard} from '../transactionCard/TransactionCard';
import { styles } from './styles';

export default function RecentTransactions() {
  const {navigateToDetailTransaction, transactions, navigateToTransactions} =
    useRecentTransactions();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.heading}>Recent Transactions</Text>
        <TouchableOpacity
          onPress={navigateToTransactions}
          style={styles.button}>
          <Text style={{color: '#7F3DFF'}}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 19, gap: 8}}>
        {transactions.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              navigateToDetailTransaction({
                url: item.attachment_url,
                type: item.type,
                date: item?.date?.toDateString() as string,
                id: item.id,
                description: item.description,
                amount: item.amount,
                category: item.category,
              });
            }}>
            <TransactionCard
              amount={item.amount.toString()}
              category={item.category}
              description={item.description}
              time={item.date.toDateString()}
              type={item.type}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
