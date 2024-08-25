import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import firestore, {Timestamp} from '@react-native-firebase/firestore';
import {TransactionsSliceType, TransactionType} from '../../types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
const initialState: TransactionsSliceType = {
  loading: false,
  transactions: [],
  currency: 'Rs ',
};
export const fetchCurrency = createAsyncThunk(
  'transactions/fetchCurrency',
  async () => {
    const currency = await AsyncStorage.getItem('currency');
    return currency || 'Rs ';
  },
);
export const addTransaction = createAsyncThunk(
  'transactionsSlice/addTransaction',
  async (
    {uid, category, amount, attachment_url, description, type}: TransactionType,
    {dispatch},
  ) => {
    try {
      const transactionRef = await firestore()
        .collection('Users')
        .doc(uid)
        .collection('Transactions')
        .add({
          date: firestore.FieldValue.serverTimestamp(),
          type,
          category,
          amount,
          description,
          attachment_url,
        });

      const newTransaction = {
        id: transactionRef.id,
        type,
        category,
        amount,
        description,
        date: Timestamp.now().toDate().toISOString(),
        attachment_url,
      };

      dispatch(addTransactionToState(newTransaction));
    } catch (error) {
      console.log("error while adding transaction ",error);
    }
  },
);

export const fetchTransactions = createAsyncThunk(
  'transactionsSlice/fetchTransactions',
  async (uid: string, {dispatch}) => {
    try {
      const snapshot = await firestore()
        .collection('Users')
        .doc(uid)
        .collection('Transactions')
        .orderBy('date', 'desc')
        .get();

      const transactions = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        date: doc.data().date.toDate().toISOString(),
      }));

      dispatch(setTransactions(transactions));
    } catch (error) {
      console.log("error while fetching transaction ",error);
    }
  },
);
export const deleteTransaction = createAsyncThunk(
  'transactionsSlice/deleteTransaction',
  async ({uid, id}: {uid: string; id: string}) => {
    try {
      await firestore()
        .collection('Users')
        .doc(uid)
        .collection('Transactions')
        .doc(id)
        .delete();
      return id;
    } catch (error) {
      console.log("error while deleting transaction ",error);
    }
  },
);

export const transactionsSlice = createSlice({
  name: 'transactionsSlice',
  initialState,
  reducers: {
    addTransactionToState: (state, action) => {
      state.transactions.unshift(action.payload);
    },
    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },
    setCurrency(state, action) {
      state.currency = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.transactions = state.transactions.filter(
          transaction => transaction.id !== action.payload,
        );
      })
      .addCase(fetchCurrency.fulfilled, (state, action) => {
        state.currency = action.payload;
      });
  },
});

export const {addTransactionToState, setTransactions, setCurrency} =
  transactionsSlice.actions;
export default transactionsSlice.reducer;
