import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants/colors';
import DownIcon from '../../assets/icons/down';
import {useCustomDropdown} from './useCustomDropDown';
import {styles} from './styles';

const CustomDropdown = ({
  items,
  onSelect,
  selectedValue,
}: {
  items: {value: string}[];
  onSelect: (e: string) => void;
  selectedValue: string | null;
}) => {
  const {handlePress, handleItemPress, isOpen} = useCustomDropdown({onSelect});
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <Text style={styles.dropdownText}>{selectedValue || 'Category'}</Text>
        <DownIcon />
      </TouchableOpacity>
      {isOpen && (
        <View style={{flex: 1, alignItems: 'center'}}>
          {items.map((item, index) => (
            <TouchableOpacity
              style={{paddingVertical: 10}}
              key={index}
              onPress={() => handleItemPress(item.value)}>
              <Text style={styles.categoriesText}>{item.value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default CustomDropdown;
