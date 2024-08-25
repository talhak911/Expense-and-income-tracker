import React, {useState} from 'react';
import {TouchableOpacity, Linking} from 'react-native';
import BackIcon from '../../assets/icons/back';
import DeleteIcon from '../../assets/icons/delete';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {deleteTransaction} from '../../redux/slices/transactionsSlice';
import {DetailTransactionProps, StackNavigationProp} from '../../types/types';
import {useNavigation} from '@react-navigation/native';

export const useDetailTransaction = ({
  route,
  navigation,
}: DetailTransactionProps) => {
  const stackNavigation = useNavigation<StackNavigationProp>();
  const currency = useAppSelector(state => state.transactions.currency);
  const uid = useAppSelector(state => state.auth.user?.uid);
  const dispatch = useAppDispatch();
  const {headerColor} = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const openAttachment = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  const deleteTransactionFunction = async (id: string) => {
    if (uid) {
      const res = await dispatch(deleteTransaction({id, uid}));
      if (res.meta.requestStatus === 'fulfilled') {
        navigation.goBack();
      }
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  React.useLayoutEffect(() => {
    stackNavigation.setOptions({
      headerStyle: {backgroundColor: headerColor || 'white'},
      headerTitleStyle: {color: 'white'},
      headerLeft: () => (
        <TouchableOpacity
          style={{
            padding: 16,
          }}
          onPress={stackNavigation.goBack}>
          <BackIcon currentColor="white" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{
            padding: 16,
          }}
          onPress={() => setModalVisible(true)}>
          <DeleteIcon />
        </TouchableOpacity>
      ),
    });
  }, [navigation, headerColor]);

  return {
    currency,
    modalVisible,
    openAttachment,
    closeModal,
    deleteTransactionFunction,
  };
};
