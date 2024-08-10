import React from "react"
import { Text, View } from "react-native"

interface ITextHighlight {
  text : string
  bgColor : string
  textColor : string 
}

export const TextHighlight : React.FC<ITextHighlight> = ({bgColor,text,textColor}) =>{
  return (
    <View style={{ backgroundColor: bgColor,borderRadius: 4, paddingHorizontal: 8, paddingVertical: 2, }}>
      <Text style={{ color: textColor }}>{text}</Text>
    </View>
  )
}