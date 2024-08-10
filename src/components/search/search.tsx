import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { SearchIcon } from '../../assets/icons/search-icon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CrossIcon } from '../../assets/icons'; // Adjust the import path as necessary

interface ISearchForm {
  placeholder: string;
}

export const SearchForm: React.FC<ISearchForm> = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState('');

  const handleRemoveValue = () => {
    setInputValue('');
  };

  return (
    <View style={{ backgroundColor: '#FFFF', height: 44, justifyContent: 'center' }}>
      <View style={{ flexDirection: 'row', gap: 20, flex: 1, height: 44, justifyContent: 'space-between' }}>
        <View style={{ flex: 1, borderColor: "#057B9F", borderRadius: 8, borderWidth: 1.5, flexDirection: 'row' }}>
          {inputValue !== '' && (
            <TouchableOpacity onPress={handleRemoveValue}>
              <View style={{ marginVertical: 15, marginLeft: 15 }}>
                <CrossIcon height={10} width={10} />
              </View>
            </TouchableOpacity>
          )}
          <TextInput style={{ flex: 1, margin: 12 }} placeholderTextColor={'#ACACAC'} placeholder={placeholder} value={inputValue} onChangeText={(text) => setInputValue(text)} />
        </View>
        <TouchableOpacity>
          <View>
            <SearchIcon height={44} width={44} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
