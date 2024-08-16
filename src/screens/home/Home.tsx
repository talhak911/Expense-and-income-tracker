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
// import { RootStackParamsList } from "../../../App";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";

// type HomeProps = NativeStackScreenProps<RootStackParamsList,"Home">
//{navigation}:HomeProps
export default function Home() {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <SafeAreaView >
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
          <View style={[styles.card, {backgroundColor: COLORS.green}]}>
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
          </View>
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
        <Text style={[{marginTop: Height(5)}, styles.headingSmall]}>
          Spend Frequency
        </Text>
        {/* <Image
          style={{
            height: 185,
            resizeMode: 'stretch',
            width: '100%',
            marginVertical: Height(1),
          }}
          source={require('../../assets/images/graph.png')}
        /> */}
        <Graph data={ [{ day: 1, amount: 0 }, { day: 2, amount: 10 }, { day: 2, amount: 10 }, { day: 2, amount: 30 }, { day: 2, amount: 10 }]}/>
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
              style={{
                paddingHorizontal: Width(6),
                paddingVertical: Width(2),
                borderRadius: FontSize(16),
                backgroundColor: '#FCEED4',
              }}>
              <Text
                style={{
                  color: '#FCAC12',
                  fontWeight: 'bold',
                  fontSize: FontSize(14),
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingVertical: Height(1.4),
            paddingHorizontal: Width(4),
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: FontSize(18),
              fontWeight: 'semibold',
              color: '#0D0E0F',
            }}>
            Recent Transactions
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#EEE5FF',
              paddingHorizontal: Width(4),
              paddingVertical: Height(1),
              borderRadius: FontSize(16),
            }}>
            <Text style={{color: '#7F3DFF'}}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 19}}>
          <TransactionCard
            amount="123"
            category="shopping"
            description="buy milk"
            icon={<FoodIcon />}
            time="10:00 AM"
            type="expense"
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const HomeMenus = [
  {name: 'Today'},
  {name: 'Week'},
  {name: 'Month'},
  {name: 'Year'},
];
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
    // gap: 10,
    minWidth: 164,
    gap: 10,
    borderRadius: FontSize(32),
    paddingHorizontal: Width(5),
    paddingVertical: Width(5),
  },
});
