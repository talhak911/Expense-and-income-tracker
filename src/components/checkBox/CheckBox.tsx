import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Checkbox = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (e: boolean) => void;
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onChange(!checked)}
      activeOpacity={0.7}
      >
      <View style={styles.checkbox}>
        {checked && (
          <MaterialCommunityIcons name="check" size={18} color="#7F3DFF" />
        )}
      </View>
      <Text style={styles.label}>
        By signing up, you agree to the {' '}
        <Text style={{color: '#7F3DFF'}}>
          Terms of Service and Privacy Policy
        </Text>
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft:16,
    marginRight:26,
    alignItems: 'center',
    marginTop: 17,
    marginBottom: 27,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  label: {
    marginLeft: 8,
    fontSize: 14,
    color: 'black',
  },
});
