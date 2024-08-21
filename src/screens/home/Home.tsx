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
import {TransactionCard} from '../../components/transactionCard/TransactionCard';
import FoodIcon from '../../assets/icons/food';
import Graph from '../../components/graph/Graph';
import {useNavigation} from '@react-navigation/native';
import {useHome} from './useHome';
import SpendFrequency from '../../components/spendFrequency/SpendFrequency';
import HomeCard from '../../components/homeCard/HomeCard';
import RecentTransactions from '../../components/recentTransactions/RecentTransactions';
// import { RootStackParamsList } from "../../../App";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";

// type HomeProps = NativeStackScreenProps<RootStackParamsList,"Home">
//{navigation}:HomeProps
export default function Home() {
  const {transactions, navigateToTransactions, navigateToDetailTransaction} =
    useHome();
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <SafeAreaView>
        <View
          style={{
            height: Height(8),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: Width(4),
          }}>
          <View
            style={{
              height: Width(9),
              width: Width(9),
              borderRadius: Width(4.5),
              backgroundColor: 'red',
            }}></View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable>
              <DownIcon />
            </Pressable>
            <Text
              style={{
                color: '#212325',
                fontFamily: 'Inter-VariableFont_opsz,wght',
                fontSize: 20,
              }}>
              Octobar
            </Text>
          </View>
          <Pressable>
            <BellIcon />
          </Pressable>
        </View>

        <View style={{alignItems: 'center'}}>
          <Text style={{color: '#91919F'}}>Account Balance</Text>
          <Text
            style={{
              color: '#161719',
              fontFamily: 'Inter-VariableFont_opsz,wght',
              fontSize: FontSize(40),
              fontWeight: 'semibold',
            }}>
            $9400
          </Text>
        </View>

        <View
          style={{
            marginTop: Height(3),
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 16,
            paddingHorizontal: Width(4),
          }}>
          {/* <View style={[styles.card, {backgroundColor: COLORS.green}]}>
            <View style={styles.icon}>
              <Transaction isIncome={true} currentColor={COLORS.green} />
            </View>
            <View style={{gap: FontSize(1)}}>
              <Text style={{color: COLORS.white}}>Income</Text>
              <Text
                style={{
                  fontSize: FontSize(22),
                  fontWeight: 'semibold',
                  color: COLORS.white,
                }}>
                $500
              </Text>
            </View>
          </View> */}
          <HomeCard isIncome={true} amount='200'/>
          <View style={[styles.card, {backgroundColor: COLORS.red}]}>
            <View style={styles.icon}>
              <Transaction isIncome={false} currentColor={COLORS.red} />
            </View>
            <View style={{gap: FontSize(1)}}>
              <Text style={{color: COLORS.white}}>Expenses</Text>
              <Text
                style={{
                  fontSize: FontSize(22),
                  fontWeight: 'semibold',
                  color: COLORS.white,
                }}>
                $120
              </Text>
            </View>
          </View>
        </View>
        <SpendFrequency />
      <RecentTransactions/>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headingSmall: {
    paddingLeft: Width(4),

    fontSize: FontSize(18),
    fontWeight: 'semibold',
    color: '#0D0E0F',
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
