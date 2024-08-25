import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {setCurrency} from '../../redux/slices/transactionsSlice';

export const useCurrency = () => {
  const selectedCurrency = useAppSelector(state => state.transactions.currency);
  const dispatch = useAppDispatch();
  const setCurrencyAsync = async (symbol: string) => {
    await AsyncStorage.setItem('currency', symbol);
    dispatch(setCurrency(symbol));
  };
  return {
    selectedCurrency,
    setCurrency: setCurrencyAsync,
  };
};
