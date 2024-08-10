import React, { useState } from "react"
import { TextInput, View } from "react-native"
import CustomButton from "src/components/custom-button/custom-button"
import { CreateCustomerDefaultValue, ICreateCustomer } from "./@types"

export const CreateCustomerScreen : React.FC= () => {

  const [input, setInput] = useState<ICreateCustomer>(CreateCustomerDefaultValue)
  const {address,email,name,phone,status} = input
  const handleCancel = () =>{
  }
  return (
    <View>
      <TextInput value={email} placeholder="Nama lengkap" />
      <TextInput value={phone} placeholder="Nomor handphone aktif"/>
      <TextInput value={email} placeholder="Email aktif"/>
      <TextInput value={address} placeholder="Alamat"/>
      <View style={{flexDirection:'row', gap:30}}>
          <CustomButton onPress={handleCancel} title="Batal" bgColor="#FFFF" borderColor="#7A7A7A" textColor="#7A7A7A"/>
          <CustomButton onPress={handleCancel} title="Simpan" bgColor="#057B9F" textColor="#FFFF" />
      </View>
    </View>
  )
}