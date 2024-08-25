import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {addTransaction} from '../../redux/slices/transactionsSlice';
import {uploadAttachment} from '../../utils/uploadAttachment';
import Snackbar from 'react-native-snackbar';

export const useAddIncome = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState('');
  const [attachment, setAttachment] = useState<string | null>(null);
  const [category, setCategory] = useState('');
  const uid = useAppSelector(state => state.auth.user?.uid);
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
  const addIncome = async () => {
    try {
      setLoading(true);
      if (!amount || !category) {
        Snackbar.show({
          text: 'Enter Amount and Category',
          backgroundColor: 'red',
        });
      } else {
        if (uid) {
          const uploadedUrl = await uploadAttachment(attachment, uid);
          const res = await dispatch(
            addTransaction({
              amount: parseFloat(amount),
              category,
              description,
              type: 'income',
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
    } catch (error) {
      console.log(error);
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
    closeModal,
    setSelectedFile,
    setImage,
    addIncome,
    onChangeAmount,
    onChangeAttachment,
    onChangeDescription,
    onChangeCategory,
  };
};
