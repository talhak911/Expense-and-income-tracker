import { Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontSize} from '../../utils/responsive';
import {COLORS} from '../../constants/colors';
import DownIcon from '../../assets/icons/down';
import TimeIcon from '../../assets/icons/time';
import SortIcon from '../../assets/icons/sort';
import SingleBar from '../../components/barGraph/BarGraph';
import PieChart from '../../components/pieChart/PieChart';
import {useFinancialReport} from './useFinancialReport';
import { styles } from './styles';

export default function FinancialReport ()  {
  const {expenses, incomes, totalExpense, totalIncome} = useFinancialReport();
  const [isActive, setIsActive] = useState<'expense' | 'income'>('expense');

  const handleIsActive = (button: 'expense' | 'income') => {
    setIsActive(button);
  };
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View
          style={[styles.topRow]}>
          <View
            style={styles.monthButton}>
            <DownIcon />
            <Text style={{color: COLORS.black50}}>Month</Text>
          </View>
          <TimeIcon />
        </View>

        <View style={{position: 'relative', alignSelf: 'center'}}>
          <PieChart data={isActive==='expense'?expenses:incomes} />
          <Text
            style={styles.totalAmount}>
            ${isActive==='expense'?totalExpense:totalIncome}
          </Text>
        </View>
        <View
          style={styles.toggleButtonsContainer}>
          <TouchableOpacity
            onPress={() => {
              handleIsActive('expense');
            }}
            style={[styles.toggleButton,{
              backgroundColor:
                isActive === 'expense' ? COLORS.purple : COLORS.lightGrey,
            }]}>
            <Text
              style={{
                color: isActive === 'expense' ? 'white' : 'black',
                fontSize: FontSize(16),
              }}>
              Expense
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleIsActive('income');
            }}
            style={[styles.toggleButton,{
              backgroundColor:
                isActive === 'income' ? COLORS.purple : COLORS.lightGrey,
            }]}>
            <Text
              style={{
                color: isActive === 'income' ? 'white' : 'black',
                fontSize: FontSize(16),
              }}>
              Income
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={styles.sortTransactions}>
          <View
          style={styles.monthButton}>
            <DownIcon />
            <Text style={{color: COLORS.black50}}>Month</Text>
          </View>
          <SortIcon />
        </View>
        <View style={{gap: 3}}>
          {isActive === 'expense'
            ? expenses.map((item, index) => (
         
              <SingleBar
                  key={index}
                  total={Number(totalExpense)}
                  item={item}
                  type='expense'
                />
            ))
              
            : incomes.map((item, index) => (
            
            <SingleBar
                key={index}
                type='income'
                item={item}
                total={Number(totalIncome)}
              />

              ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};