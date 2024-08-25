import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useAddButton} from './useAddButton';
import AddIcon from '../../assets/icons/add';
import TransactionIcon from '../../assets/icons/transaction';

import {COLORS} from '../../constants/colors';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import {styles} from './styles';

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
            colors={[COLORS.gradientEffetPurple0, COLORS.gradientEffetPurple1]}
            style={styles.gradientContainer}
          />
          <View style={styles.container}>
            <View style={styles.transactionButtonsContainer}>
              <TouchableOpacity
                style={[
                  styles.transactionButtons,
                  {backgroundColor: COLORS.green},
                ]}
                onPress={navigateToAddIncome}>
                <TransactionIcon isIncome={true} currentColor={COLORS.white} />
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.transactionButtons,
                  {backgroundColor: COLORS.red},
                ]}
                onPress={navigateToAddExpense}>
                <TransactionIcon isIncome={false} currentColor={COLORS.white} />
              </TouchableOpacity>
            </View>
            <LinearGradient
              colors={[
                COLORS.gradientEffetPurple1,
                COLORS.gradientEffetPurple1,
              ]}
              style={styles.innerButtonGradient}>
              <View style={{flexDirection: 'row', gap: 2}}>
                <View
                  style={[styles.whiteBorder, {borderTopRightRadius: 20}]}
                />
                <View style={{paddingBottom: 6}}>
                  <View style={styles.closeButtonContainer}>
                    <View style={styles.closeButton}>
                      <AddIcon />
                    </View>
                  </View>
                </View>
                <View style={[styles.whiteBorder, {borderTopLeftRadius: 20}]} />
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
