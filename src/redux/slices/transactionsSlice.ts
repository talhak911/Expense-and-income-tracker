import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import firestore ,{Timestamp} from '@react-native-firebase/firestore';
import dayjs from 'dayjs';
import { TransactionsSliceType, TransactionType } from '../../types/types';

const initialState: TransactionsSliceType = {loading:false,transactions:[]};

export const addTransaction = createAsyncThunk(
  'transactionsSlice/addTransaction',
  async ({
    uid,
    category,
    amount,
    attachment_url,
    description,
    type,
  }: TransactionType, { dispatch }) => {
    try {
      const transactionRef = await firestore()
        .collection('Users')
        .doc(uid)
        .collection('Transactions')
        .add({
          date: firestore.FieldValue.serverTimestamp(), // Use Timestamp for date
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
        date: Timestamp.now().toDate().toISOString(), // Convert to Date object
        attachment_url,
      };

      dispatch(addTransactionToState(newTransaction));
    } catch (error) {
      console.log(error);
    }
  },
);

export const fetchTransactions = createAsyncThunk(
  'transactionsSlice/fetchTransactions',
  async (uid: string, { dispatch }) => {
    try {
      const snapshot = await firestore()
        .collection('Users')
        .doc(uid)
        .collection("Transactions")
        .orderBy("date", "desc") // Order by date descending
        .get();

        const transactions = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          date: doc.data().date.toDate().toISOString(), // Convert Date to ISO string

        }));

      dispatch(setTransactions(transactions));
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteTransaction = createAsyncThunk(
  'transactionsSlice/deleteTransaction',
  async ({uid,id}:{uid: string,id:string}) => {
    try {

       await firestore()
        .collection('Users')
        .doc(uid)
        .collection("Transactions").doc(id).delete();
        console.log("deleteTranasaction  redux")
      return id
    } catch (error) {
      console.log(error);
    }
  }
);

export const transactionsSlice = createSlice({
  name: 'transactionsSlice',
  initialState,
  reducers: {
    addTransactionToState: (state, action) => {
      state.transactions.unshift(action.payload);
    },
    setTransactions: (state, action) => {
     state.transactions= action.payload;
    }
  },
  extraReducers: builder => {
    builder
    .addCase(deleteTransaction.fulfilled,   
      (state, action) => {
        state.transactions= state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        );
      })
  },
});

export const { addTransactionToState, setTransactions} = transactionsSlice.actions;
export default transactionsSlice.reducer;
