import React from 'react';
import {Modal, View, Text, StyleSheet} from 'react-native';
import {FontSize, Width} from '../../utils/responsive';
import CheckMark from '../../assets/icons/checkMark';
import {TransactionStatusModalProps} from '../../types/types';

export const TransactionStatusModal = ({
  transactionStatus,
  isVisible,
  onClose,
}: TransactionStatusModalProps) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <CheckMark />
          <Text style={styles.text}>{transactionStatus}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.16)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 16,
    paddingHorizontal: Width(4),
    marginHorizontal: Width(5),
    paddingTop: 27,
    paddingBottom: 19,
    gap: 16,
    alignItems: 'center',
  },
  text: {
    fontSize: FontSize(14),
    color: 'black',
  },
});
