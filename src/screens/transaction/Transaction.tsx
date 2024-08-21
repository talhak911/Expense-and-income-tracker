// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {FontSize, Height, Width} from '../../utils/responsive';
// import DownIcon from '../../assets/icons/down';
// import {COLORS} from '../../constants/colors';
// import FilterIcon from '../../assets/icons/filter';
// import {TransactionCard} from '../../components/transactionCard/TransactionCard';
// import {BottomModel} from '../../components/bottomModel/BottomModel';
// import {useTransaction} from './useTransaction';
// import {FilterTransactions} from '../../components/filterTransactions/FilterTransactions';
// import {useNavigation} from '@react-navigation/native';

// export default function Transaction() {
//   const navigation = useNavigation();
//   const {modelVisible, transactions, setModelVisible,navigateToDetailTransaction} = useTransaction();
//   return (
//     <ScrollView style={{    flex: 1,
//       backgroundColor: 'white',}}>
//       <SafeAreaView style={styles.container}>
//         <View
//           style={{
//             height: Height(7.5),
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             // paddingHorizontal: Width(4),
//           }}>
//           <View
//             style={{
//               flexDirection: 'row',
//               gap: 3,
//               borderWidth: 1,
//               borderColor: COLORS.lightGrey,
//               alignItems: 'center',
//               borderRadius: 40,
//               paddingVertical: Height(0.7),
//               paddingHorizontal: 12,
//             }}>
//             <DownIcon />
//             <Text style={{color: COLORS.black50}}>Month</Text>
//           </View>

//           <TouchableOpacity
//             onPress={() => {
//               setModelVisible(true);
//             }}>
//             <FilterIcon />
//           </TouchableOpacity>
//           <BottomModel
//             visible={modelVisible}
//             element={<FilterTransactions />}
//             onClose={() => {
//               setModelVisible(false);
//             }}
//           />
//         </View>

//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate('Financial Report');
//           }}
//           style={styles.financialReport}>
//           <Text style={styles.financialReportText}>
//             See your financial report
//           </Text>
//           <View style={styles.icon}>
//             <DownIcon />
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate('Detail Transaction', {
//               headerColor: COLORS.red,
//             });
//           }}
//           style={styles.financialReport}>
//           <Text style={styles.financialReportText}>Detail transaction</Text>
//           <View style={styles.icon}>
//             <DownIcon />
//           </View>
//         </TouchableOpacity>
//         <Text style={styles.headingText}>Today</Text>
//         {transactions?.map((transaction, index) => (
//           <TouchableOpacity 
//           onPress={
//           ()=>{
//             navigateToDetailTransaction({url:transaction.attachment_url,type:transaction.type,date:"transaction.date",id:transaction.id,description:transaction.description,amount:transaction.amount,category:transaction.category})}
          
//           }
//           key={index}>
//             <TransactionCard
//               amount={transaction.amount.toString()}
//               category={transaction.category}
//               description={transaction.description}
//               time={
//             "    transaction.date?.split(' ')[4] as string"
//               }
//               type={transaction.type}
//             />
//           </TouchableOpacity>
//         ))}
//       </SafeAreaView>
//     </ScrollView>
//   );
// }

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: Width(4),
//   },
//   financialReport: {
//     marginVertical: Height(1),
//     backgroundColor: COLORS.lightPurple,
//     paddingLeft: Width(4),
//     paddingRight: Width(2),
//     flex: 1,
//     flexDirection: 'row',
//     borderRadius: 8,
//     justifyContent: 'space-between',
//     paddingVertical: Height(1.5),
//   },
//   icon: {
//     transform: [{rotate: '-90deg'}, {scale: 1.5}],
//   },
//   financialReportText: {
//     fontSize: FontSize(16),
//     color: COLORS.purple,
//   },
//   headingText: {
//     fontSize: FontSize(18),
//     marginVertical: 13,
//     fontWeight: 'semibold',
//     color: COLORS.charcoal,
//   },
// });

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontSize, Height, Width} from '../../utils/responsive';
import DownIcon from '../../assets/icons/down';
import {COLORS} from '../../constants/colors';
import FilterIcon from '../../assets/icons/filter';
import {TransactionCard} from '../../components/transactionCard/TransactionCard';
import {BottomModel} from '../../components/bottomModel/BottomModel';
import {useTransaction} from './useTransaction';
import {FilterTransactions} from '../../components/filterTransactions/FilterTransactions';
import {useNavigation} from '@react-navigation/native';
import dayjs from 'dayjs';

export default function Transaction() {
  const navigation = useNavigation();
  const {
    modelVisible,
    groupedTransactions,
    setModelVisible,
    navigateToDetailTransaction,
    setFilterBy,
    setSortBy,
    filterBy,
    sortBy,
  } = useTransaction();

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <SafeAreaView style={styles.container}>
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
                close ={() => setModelVisible(false)}
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
          <Text style={styles.financialReportText}>See your financial report</Text>
          <View style={styles.icon}>
            <DownIcon />
          </View>
        </TouchableOpacity>

        {Object.keys(groupedTransactions).map(date => (
          <View key={date}>
            <Text style={styles.headingText}>
              {
              dayjs(date).isSame(dayjs(), 'day') ? 'Today' :
              dayjs(date).isSame(dayjs().subtract(1, 'day'), 'day') ? 'Yesterday' :
              dayjs(date).isSame(dayjs(), 'week') ? 'This Week' :
              dayjs(date).isSame(dayjs().subtract(1, 'week'), 'week') ? 'Last Week' :
              dayjs(date).isSame(dayjs(), 'month') ? 'This Month' :
              dayjs(date).isSame(dayjs().subtract(1, 'month'), 'month') ? 'Last Month' :
              'Older'
              }
            </Text>
            {groupedTransactions[date].map((transaction, index) => (
              <TouchableOpacity
              style={{paddingBottom:8}}
                key={index}
                onPress={() => {
                  navigateToDetailTransaction({
                    url: transaction.attachment_url,
                    type: transaction.type,
                    date: transaction.date.toDateString(),
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
                  time={transaction.date.toDateString()}
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

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Width(4),
  },
  header: {
    height: Height(7.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdown: {
    flexDirection: 'row',
    gap: 3,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    alignItems: 'center',
    borderRadius: 40,
    paddingVertical: Height(0.7),
    paddingHorizontal: 12,
  },
  financialReport: {
    marginVertical: Height(1),
    backgroundColor: COLORS.lightPurple,
    paddingLeft: Width(4),
    paddingRight: Width(2),
    flex: 1,
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'space-between',
    paddingVertical: Height(1.5),
  },
  icon: {
    transform: [{rotate: '-90deg'}, {scale: 1.5}],
  },
  financialReportText: {
    fontSize: FontSize(16),
    color: COLORS.purple,
  },
  headingText: {
    fontSize: FontSize(18),
    marginVertical: 13,
    fontWeight: 'semibold',
    color: COLORS.charcoal,
  },
});
