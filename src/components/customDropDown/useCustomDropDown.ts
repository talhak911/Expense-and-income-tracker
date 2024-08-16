import { useState } from "react";
import { voidFunction } from "../../types/types";

export const useCustomDropdown=({onSelect}:{onSelect:(v:string)=>void})=>{
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string|null>(null);
  
    const handlePress = () => {
      setIsOpen(!isOpen);
    };
  
    const handleItemPress = (value:string) => {
      setSelectedValue(value);
      setIsOpen(false);
      onSelect(value);
    };
  return{
    handlePress,
    handleItemPress,
    selectedValue,
    isOpen
  }
}