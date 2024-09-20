import {Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import DownIcon from '../../assets/icons/down';
import {COLORS} from '../../constants/color';
import FilterIcon from '../../assets/icons/filter';
import {TransactionCard} from '../../components/transactionCard/TransactionCard';
import {BottomModel} from '../../components/bottomModel/BottomModel';
import {useTransaction} from './useTransaction';
import {FilterTransactions} from '../../components/filterTransactions/FilterTransactions';
import {styles} from './TransactionStyles';
import {formatDate} from '../../utils/utils';

export default function Transaction() {
  const {
    navigation,
    modelVisible,
    groupedTransactions,
    filterBy,
    sortBy,
    setModelVisible,
    navigateToDetailTransaction,
    setFilterBy,
    setSortBy,
  } = useTransaction();

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.containerContent}>
        <View style={styles.header}>
          <View style={styles.dropdown}>
            <DownIcon />
            <Text style={{color: COLORS.black50}}>Month</Text>
          </View>

          <TouchableOpacity onPress={() => setModelVisible(true)}>
            <FilterIcon />
          </TouchableOpacity>
          <BottomModel
            visible={modelVisible}
            element={
              <FilterTransactions
                close={() => setModelVisible(false)}
                filterBy={filterBy}
                sortBy={sortBy}
                setFilterBy={setFilterBy}
                setSortBy={setSortBy}
              />
            }
            onClose={() => setModelVisible(false)}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Financial Report')}
          style={styles.financialReport}>
          <Text style={styles.financialReportText}>
            See your financial report
          </Text>
          <View style={styles.icon}>
            <DownIcon />
          </View>
        </TouchableOpacity>

        {Object.keys(groupedTransactions).map(period => (
          <View key={period}>
            <Text style={styles.headingText}>{period}</Text>
            {groupedTransactions[period].map((transaction, index) => (
              <TouchableOpacity
                style={{paddingBottom: 8}}
                key={index}
                onPress={() => {
                  navigateToDetailTransaction({
                    url: transaction.attachment_url,
                    type: transaction.type,
                    date: formatDate(transaction.date),
                    id: transaction.id,
                    description: transaction.description,
                    amount: transaction.amount,
                    category: transaction.category,
                  });
                }}>
                <TransactionCard
                  amount={transaction.amount.toString()}
                  category={transaction.category}
                  description={transaction.description}
                  time={transaction.date.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                  })}
                  type={transaction.type}
                />
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
}
