import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ShoppingIcon from '../../assets/icons/shopping';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontSize, Height, Width} from '../../utils/responsive';
import BellIcon from '../../assets/icons/bell';
import Transaction from '../../assets/icons/transaction';

import DownIcon from '../../assets/icons/down';
import {COLORS} from '../../constants/colors';
import {useHome} from './useHome';
import SpendFrequency from '../../components/spendFrequency/SpendFrequency';
import HomeCard from '../../components/homeCard/HomeCard';
import RecentTransactions from '../../components/recentTransactions/RecentTransactions';
import {FontInter} from '../../constants/fonts';

export default function Home() {
  const {currency, expenses, incomes, balance,month,userImage} = useHome();
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View
          style={styles.topContainer}>
          <View style={styles.imageBorder}>
            <Image
            source={{uri:userImage||"https://th.bing.com/th/id/OIP.7dTfyRneXPY5b7pj0NKuUgAAAA?rs=1&pid=ImgDetMain"}}
              style={{
                height: 32,
                width: 32,
                borderRadius: 16,
                backgroundColor: 'red',
              }}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderRadius:40,
              borderColor: COLORS.lightGrey,
              paddingVertical: 8,
              paddingLeft: 8,
              paddingRight: 16,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Pressable>
              <DownIcon />
            </Pressable>
            <Text
              style={{
                color: COLORS.black50,
                fontFamily: FontInter,
                fontSize: 14,
              }}>
       {month}
            </Text>
          </View>
          <Pressable>
            <BellIcon />
          </Pressable>
        </View>

        <View style={{alignItems: 'center'}}>
          <Text style={{color: COLORS.grey,fontSize:14}}>Account Balance</Text>
          <Text
            style={{
              color: COLORS.black70,
              fontFamily: FontInter,
              fontSize: 40,
              fontWeight: '600',
            }}>
            {currency}
            {balance}
          </Text>
        </View>

        <View
          style={{
            marginTop: Height(3),
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 16,
          }}>
          <HomeCard currency={currency} isIncome={true} amount={incomes} />
          <HomeCard currency={currency} isIncome={false} amount={expenses} />
        </View>
        <SpendFrequency />
        <RecentTransactions />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{flex: 1, backgroundColor: 'white'},
  topContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 12,
  },
  headingSmall: {
    paddingLeft: Width(4),

    fontSize: FontSize(18),
    fontWeight: '600',
    color: '#0D0E0F',
  },
  imageBorder: {
    borderColor: COLORS.deepPurple,
    borderRadius: 30,
    borderWidth: 2,
    padding: 3,
  },
  icon: {
    height: 48,
    borderRadius: 16,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 164,
    gap: 10,
    borderRadius: FontSize(32),
    paddingHorizontal: Width(5),
    paddingVertical: Width(5),
  },
});
