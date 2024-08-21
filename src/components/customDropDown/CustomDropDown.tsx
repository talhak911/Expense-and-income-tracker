import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontSize, Height, Width } from '../../utils/responsive';
import { COLORS } from '../../constants/colors';
import DownIcon from '../../assets/icons/down';
import { useCustomDropdown } from './useCustomDropDown';

const CustomDropdown = ({items, onSelect,selectedValue }:{items:{value:string}[],onSelect:(e:string)=>void,selectedValue:string|null}) => {
const {handlePress,handleItemPress,isOpen}=useCustomDropdown({onSelect})
  return (
    <View>
      <TouchableOpacity
      style={{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        height: Height(7),
        width:'100%',
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: 'white',
        borderWidth: FontSize(1),
        borderColor: '#F1F1FA',
        maxWidth:500,
        justifyContent:"space-between",
        paddingHorizontal: Width(5), 
      }}
      onPress={handlePress}>
        <Text style={{fontSize:FontSize(16),color:COLORS.grey}}>{selectedValue || 'Category'}</Text>
        <DownIcon/>
      </TouchableOpacity>
      {isOpen && (
        <View style={{flex:1 ,alignItems:"center"}}>
          {items.map((item,index) => (
            <TouchableOpacity style={{paddingVertical:10}} key={index} onPress={() => handleItemPress(item.value)}>
              <Text style={{color:"black",fontSize:FontSize(16)}}>{item.value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default CustomDropdown;
