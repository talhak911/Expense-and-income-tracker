import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../constants/color';
import {styles} from './ConfirmModalStyles';

type ConfirmModalProps = {
  title: string;
  description: string;
  action: () => void;
  close: () => void;
};

export const ConfirmModal = ({
  title,
  description,
  action,
  close,
}: ConfirmModalProps) => (
  <View style={styles.container}>
    <Text style={styles.heading}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        onPress={close}
        style={[styles.button, {backgroundColor: COLORS.lightPurple}]}>
        <Text style={{color: COLORS.purple, fontWeight: '600'}}>No</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={action}
        style={[styles.button, {backgroundColor: COLORS.purple}]}>
        <Text style={styles.buttonTextYes}>Yes</Text>
      </TouchableOpacity>
    </View>
  </View>
);
