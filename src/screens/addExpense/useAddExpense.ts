import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {addTransaction} from '../../redux/slices/transactionsSlice';
import {uploadAttachment} from '../../utils/uploadAttachment';
import Snackbar from 'react-native-snackbar';

export const useAddExpense = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState('');
  const [attachment, setAttachment] = useState<string | null>(null);
  const [category, setCategory] = useState('');
  const uid = useAppSelector(state => state.auth.user?.uid);
  const currency = useAppSelector(state => state.transactions.currency);
  const balance =useAppSelector(state=>state.transactions.accountBalance
  )

  const closeModal = () => {
    setModalVisible(false);
  };
  const onChangeAmount = (i: string) => {
    setAmount(i);
  };
  const onChangeDescription = (i: string) => {
    setDescription(i);
  };
  const onChangeCategory = (i: string) => {
    setCategory(i);
  };
  const onChangeAttachment = (i: string | null) => {
    setAttachment(i);
  };
  const dispatch = useAppDispatch();
  const addExpense = async () => {
    try {
      setLoading(true);
      if (!amount || !category || parseFloat(amount) < 0) {
        Snackbar.show({
          text: 'Enter positive Amount and Category',
          backgroundColor: 'red',
        });
      } else {
        if (uid) {
         if(balance-parseFloat(amount) <0){
            Snackbar.show({
              text:`Can't add Expense your accout balance is ${balance}`,
              backgroundColor:"red"
            })
          }
   else{
    const uploadedUrl = await uploadAttachment(attachment, uid);
    const res = await dispatch(
      addTransaction({
        amount: parseFloat(amount),
        category,
        description,
        type: 'expense',
        uid,
        attachment_url: uploadedUrl,
      }),
    );

    if (res.meta.requestStatus === 'fulfilled') {
      setAmount('');
      setDescription('');
      setCategory('');
      setAttachment('');
      setSelectedFile(null);
      setImage('');
      setModalVisible(true);
      setTimeout(() => setModalVisible(false), 3000);
    }
   }
        }
      }
    } catch (error) {
      console.log("error while adding income ",error);
    } finally {
      setLoading(false);
    }
  };

  return {
    amount,
    description,
    attachment,
    category,
    loading,
    selectedFile,
    image,
    modalVisible,
    currency,
    closeModal,
    setSelectedFile,
    setImage,
    addExpense,
    onChangeAmount,
    onChangeAttachment,
    onChangeDescription,
    onChangeCategory,
  };
};
