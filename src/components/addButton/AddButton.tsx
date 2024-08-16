import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useAddButton} from './useAddButton';
import AddIcon from '../../assets/icons/add';
import TransactionIcon from '../../assets/icons/transaction';
import {Height, Width} from '../../utils/responsive';
import {COLORS} from '../../constants/colors';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';

export const AddButton = ({props}: {props: BottomTabBarButtonProps}) => {
  const {
    buttonsVisible,
    setButtonsVisible,
    navigateToAddIncome,
    navigateToAddExpense,
  } = useAddButton();
  return (
    <TouchableOpacity
      {...props}
      onPress={() => setButtonsVisible(!buttonsVisible)}>
      {buttonsVisible ? (
        <>
          <LinearGradient
            colors={['rgba(139, 80, 255, 0)', 'rgba(139, 80, 255, 0.2)']}
            style={{
              position: 'absolute',
              bottom: 79, // Ensure gradient starts above the bottom nav bar + margin
              height: Height(90),
              width: Width(100),
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          />
          <View
            style={{
              gap: 17,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
              height: Height(50),
              width: Width(100),
            }}>
            <View style={{flexDirection: 'row', gap: 36}}>
              <TouchableOpacity
                style={[
                  styles.transactionButtons,
                  {backgroundColor: COLORS.green},
                ]}
                onPress={navigateToAddIncome}>
                <TransactionIcon isIncome={true} currentColor="#FCFCFC" />
              </TouchableOpacity>
        
              <TouchableOpacity
                style={[
                  styles.transactionButtons,
                  {backgroundColor: COLORS.red},
                ]}
                onPress={navigateToAddExpense}>
                <TransactionIcon isIncome={false} currentColor="#FCFCFC" />
              </TouchableOpacity>
            </View>
            <LinearGradient
              colors={['rgba(139, 80, 255, 0.2)', 'rgba(139, 80, 255, 0.2)']}
              style={
                {
                  // height:59,
                  marginBottom: 13,
                  borderBottomLeftRadius:50,
                  borderBottomRightRadius:50,

                }
              }>
              <View style={{flexDirection: 'row',gap:2}}>
                <View
                  style={{
                    width: 10,
                    backgroundColor: 'white',
                    borderTopRightRadius: 20,
                  }}
                />
            <View style={{paddingBottom:6}}>
            <View
                  style={{marginHorizontal:3,marginBottom:3, transform: [{rotate: '45deg'}]}}>
                  <AddIcon />
                </View>
            </View>
                <View
                    style={{
                      width: 10,
                      backgroundColor: 'white',
                      borderTopLeftRadius: 20,
                    }}
                  />
              </View>
            </LinearGradient>
          </View>
        </>
      ) : (
        <View style={{marginBottom: 20}}>
          <AddIcon />
        </View>
      )}
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  transactionButtons: {
    height: 56,
    width: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
