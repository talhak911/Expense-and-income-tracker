import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

export const useAddButton = () => {
  const navigation = useNavigation();
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const navigateToAddIncome = () => {
    setButtonsVisible(false)
    navigation.navigate('Income');
  };
  const navigateToAddExpense= () => {
    setButtonsVisible(false)
    navigation.navigate('Expense');
  };
  return {
    buttonsVisible,
    setButtonsVisible,
    navigateToAddExpense,
    navigateToAddIncome
  };
};
