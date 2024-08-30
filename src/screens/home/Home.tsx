import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BellIcon from '../../assets/icons/bell';
import DownIcon from '../../assets/icons/down';
import {useHome} from './useHome';
import SpendFrequency from '../../components/spendFrequency/SpendFrequency';
import HomeCard from '../../components/homeCard/HomeCard';
import RecentTransactions from '../../components/recentTransactions/RecentTransactions';
import {styles} from './styles';
import {Images} from '../../constants/constants';
import { BlinkingImage } from '../../components/loading/Loading';

export default function Home() {
  const {currency, expenses, incomes, balance, month, userImage} = useHome();
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.topContainer}>
          <View style={styles.imageBorder}>
              <BlinkingImage
              uri={userImage}
              style={styles.image}
            />
          </View>
          <View style={styles.monthContainer}>
            <Pressable>
              <DownIcon />
            </Pressable>
            <Text style={styles.monthText}>{month}</Text>
          </View>
          <Pressable>
            <BellIcon />
          </Pressable>
        </View>

        <View style={{alignItems: 'center'}}>
          <Text style={styles.balanceHeading}>Account Balance</Text>
          <Text style={styles.amount}>
            {currency}
            {balance}
          </Text>
        </View>

        <View style={styles.cards}>
          <HomeCard currency={currency} isIncome={true} amount={incomes} />
          <HomeCard currency={currency} isIncome={false} amount={expenses} />
        </View>
        <SpendFrequency />
        <RecentTransactions />
      </SafeAreaView>
    </ScrollView>
  );
}
