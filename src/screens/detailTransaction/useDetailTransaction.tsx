import React, {useState} from 'react';
import {TouchableOpacity, Text, View, Linking} from 'react-native';
import BackIcon from '../../assets/icons/back';
import DeleteIcon from '../../assets/icons/delete';
import {COLORS} from '../../constants/colors';
import {FontSize, Height, Width} from '../../utils/responsive';
import {useAppDispatch, useAppSelector} from '../../hooks/useStore';
import {deleteTransaction} from '../../redux/slices/transactionsSlice';
import {
  DetailTransactionProps,
  StackNavigationProp,
  voidFunction,
} from '../../types/types';
import {useNavigation} from '@react-navigation/native';

export const useDetailTransaction = ({
  route,
  navigation,
}: DetailTransactionProps) => {
  const stackNavigation = useNavigation<StackNavigationProp>();
  const currency = useAppSelector(state=>state.transactions.currency)
  const uid = useAppSelector(state => state.auth.user?.uid);
  const dispatch = useAppDispatch();
  const {headerColor} = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const openAttachment = (url:string) => {
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
  const DeleteModal = ({
    closeModal,
    action,
  }: {
    closeModal: voidFunction;
    action: voidFunction;
  }) => (
    <View style={{alignItems: 'center', gap: Height(1)}}>
      <Text
        style={{
          color: COLORS.charcoal,
          fontSize: FontSize(18),
          fontWeight: '600',
        }}>
        Remove This transaction?
      </Text>
      <Text
        style={{
          fontSize: FontSize(16),
          color: COLORS.grey,
          textAlign: 'center',
        }}>
        Are you sure do you wanna remove this transaction
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          marginTop: 16,
        }}>
        <TouchableOpacity
          onPress={closeModal}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.lightPurple,
            height: Height(8),
            width: Width(40),
            borderRadius: 16,
          }}>
          <Text style={{color: COLORS.purple, fontWeight: '600'}}>No</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={action}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.purple,
            height: Height(8),
            width: Width(40),
            borderRadius: 16,
          }}>
          <Text style={{color: COLORS.white, fontWeight: '600'}}>Yes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

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
    DeleteModal,
  };
};
