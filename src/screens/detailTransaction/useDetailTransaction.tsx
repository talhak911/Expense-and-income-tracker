import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import BackIcon from '../../assets/icons/back';
import DeleteIcon from '../../assets/icons/delete';
import { COLORS } from '../../constants/colors';
import { FontSize, Height, Width } from '../../utils/responsive';

export const useDetailTransaction = ({ route, navigation }) => {
  const { headerColor } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const DeleteModal = () => (
    <View style={{ alignItems: 'center', gap: Height(1) }}>
      <Text style={{ color: COLORS.charcoal, fontSize: FontSize(18), fontWeight: '600' }}>
        Remove This transaction?
      </Text>
      <Text style={{ fontSize: FontSize(16), color: COLORS.grey, textAlign: 'center' }}>
        Are you sure do you wanna remove this transaction
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 16 }}>
        <TouchableOpacity
          onPress={closeModal}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.lightPurple,
            height: Height(8),
            width: Width(40),
            borderRadius: 16,
          }}
        >
          <Text style={{ color: COLORS.purple, fontWeight: '600' }}>No</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.purple,
            height: Height(8),
            width: Width(40),
            borderRadius: 16,
          }}
        >
          <Text style={{ color: COLORS.white, fontWeight: '600' }}>Yes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const closeModal = () => {
    setModalVisible(false);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: headerColor || 'white' },
      headerTitleStyle: { color: 'white' },
      headerLeftContainerStyle: { padding: 16 },
      headerRightContainerStyle: { padding: 16 },
      headerBackImage: () => <BackIcon currentColor="white" />,
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <DeleteIcon />
        </TouchableOpacity>
      ),
    });
  }, [navigation, headerColor]);

  return {
    modalVisible,
    closeModal,
    DeleteModal,
  };
};
