import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import CustomButton from "src/components/custom-button/custom-button";
import { CreateCustomerDefaultValue, ICreateCustomer } from "./@types";
import { TextInputs } from "src/components/text-input/text-input";
import { TextHighlight } from "src/components";
import { TouchableOpacity } from "react-native-gesture-handler";

const InputLabel: React.FC<{ label: string; required?: boolean }> = ({ label, required }) => (
  <View style={{ flexDirection: 'row', paddingBottom: 4 }}>
    <Text>{label}</Text>
    {required && <Text style={{ color: 'red' }}>*</Text>}
  </View>
);

export const CreateCustomerScreen: React.FC = () => {
  const [input, setInput] = useState<ICreateCustomer>(CreateCustomerDefaultValue);
  const { address, email, name, phone } = input;

  const handleCancel = () => {
  };

  return (
    <View style={{ paddingHorizontal: 16, paddingTop: 23 }}>
      <View>
        <InputLabel label="Nama Lengkap" required />
        <TextInputs
          value={name}
          placeholder="Nama lengkap"
          onChangeText={(e) =>
            setInput((x) => ({
              ...x,
              name: e,
            }))
          }
        />
      </View>
      
      <View>
        <InputLabel label="No Handphone" required/>
        <TextInputs
          value={phone}
          placeholder="Nomor handphone aktif"
          numberOnly
          onChangeText={(e) =>
            setInput((x) => ({
              ...x,
              phone: e,
            }))
          }
        />
      </View>

      <View>
        <InputLabel label="Email" required/>
        <TextInputs
          value={email}
          placeholder="Email aktif"
          onChangeText={(e) =>
            setInput((x) => ({
              ...x,
              email: e,
            }))
          }
        />
      </View>

      <View>
        <InputLabel label="Alamat" required/>
        <TextInputs
          isTextBox={true}
          value={address}
          placeholder="Alamat lengkap"
          onChangeText={(e) =>
            setInput((x) => ({
              ...x,
              address: e,
            }))
          }
        />
      </View>

      <View>
        <InputLabel label="Status" required/>
        <View style={{flexDirection:"row", gap:10.5}} >
        <TouchableOpacity>
         <TextHighlight bgColor={'#8ACF92'} text={'AKTIF'} textColor={ '#3CAF4A'}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <TextHighlight bgColor={'#F29292'} text={'NON AKTIF'} textColor={ '#EA4949'}/>
        </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: 'row', gap: 30, justifyContent: 'center', alignItems: 'center' }}>
        <CustomButton onPress={handleCancel} title="Batal" bgColor="#FFFF" borderColor="#7A7A7A" textColor="#7A7A7A" />
        <CustomButton onPress={handleCancel} title="Simpan" bgColor="#057B9F" textColor="#FFFF" />
      </View>
    </View>
  );
};
