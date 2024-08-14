import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CustomButtonProps {
  title: string;
  bgColor? : string
  borderColor? : string
  textColor? : string
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress,bgColor,borderColor,textColor }) => {
  return (
    <TouchableOpacity style={{ flex:1,...styles.button, backgroundColor: bgColor ?? '', borderColor : borderColor ?? ''}} onPress={onPress}>
      <Text style={{...styles.buttonText, color:textColor ?? ''}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#057BA1',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#F8F9FA',
    fontSize: 18,
  },
});

export default CustomButton;