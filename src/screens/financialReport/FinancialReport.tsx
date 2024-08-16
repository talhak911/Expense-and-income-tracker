import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontSize, Height, Width} from '../../utils/responsive';
import {COLORS} from '../../constants/colors';
import DownIcon from '../../assets/icons/down';
import TimeIcon from '../../assets/icons/time';
import SortIcon from '../../assets/icons/sort';
import SingleBar from '../../assets/icons/singleBar';
import  FilterIcon  from '../../assets/icons/filter';
import { FontInter } from '../../constants/fonts';
import PieChart from '../../components/pieChart/PieChart';

const FinancialReport = () => {
  const data = [
    { amount: 10, color: '#7F3DFF' },
    { amount: 30, color: '#FCAC12' },
    { amount: 20, color: '#FD3C4A' },
  ];
  const [isActive, setIsActive] = useState('expense');

  const handleIsActive = (button: string) => {
    setIsActive(button);
  };
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: Width(5.5),
            paddingVertical: Height(0.9),
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 3,
              borderWidth: 1,
              borderColor: COLORS.lightGrey,
              alignItems: 'center',
              borderRadius: 40,
              paddingVertical: Height(0.7),
              paddingHorizontal: 12,
            }}>
            <DownIcon />
            <Text style={{color: COLORS.black50}}>Month</Text>
          </View>
          <TimeIcon />
        </View>
             
        <View style={{position:"relative",alignSelf:"center"}}>
        <PieChart data={data} />
        <Text style={{position:"absolute",alignSelf:"center",marginTop:95,fontSize:FontSize(32),fontFamily:FontInter,fontWeight:"bold",color:"black"}}>$332</Text>
        </View>
        <View
          style={{
            marginTop: Height(6.6),
            flex: 1,
            flexDirection: 'row',
            borderRadius: FontSize(32),
            backgroundColor: COLORS.lightGrey,
          }}>
          <TouchableOpacity
            onPress={() => {
              handleIsActive('expense');
            }}
            style={{
              width: Width(46),
              paddingVertical: Height(1.7),
              alignItems: 'center',
              borderRadius: FontSize(32),
              backgroundColor:
                isActive === 'expense' ? COLORS.purple : COLORS.lightGrey,
            }}>
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
            style={{
              width: Width(46),
              alignItems: 'center',
              paddingVertical: Height(1.7),
              borderRadius: FontSize(32),
              backgroundColor:
                isActive === 'income' ? COLORS.purple : COLORS.lightGrey,
            }}>
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
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: Height(2),
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 3,
              borderWidth: 1,
              borderColor: COLORS.lightGrey,
              alignItems: 'center',
              borderRadius: 40,
              paddingVertical: Height(0.7),
              paddingHorizontal: 12,
            }}>
            <DownIcon />
            <Text style={{color: COLORS.black50}}>Month</Text>
          </View>
          <SortIcon/>
        </View>
        <View style={{gap: 3}}>
          <View
            style={{
              marginTop: 21,
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                gap: 7,
                borderWidth: 1,
                borderColor: COLORS.lightGrey,
                alignItems: 'center',
                borderRadius: 40,
                paddingVertical: Height(0.7),
                paddingHorizontal: 12,
              }}>
              <View
                style={{
                  height: 14,
                  width: 14,
                  borderRadius: 7,
                  backgroundColor: COLORS.yellow,
                }}
              />
              <Text style={{color: COLORS.black50}}>Shopping</Text>
            </View>
            <Text style={{color: COLORS.red, fontSize: 24,fontFamily:FontInter}}>- $120</Text>
          </View>
          <SingleBar color={COLORS.yellow} total={100} inner={30} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default FinancialReport;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', paddingHorizontal: Width(4)},
});
