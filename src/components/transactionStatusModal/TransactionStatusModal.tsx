import React from 'react';
import {Modal, View, Text, StyleSheet} from 'react-native';
import {FontSize, Width} from '../../utils/responsive';
import CheckMark from '../../assets/icons/checkMark';
import {TransactionStatusModalProps} from '../../types/types';
import { styles } from './styles';

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
