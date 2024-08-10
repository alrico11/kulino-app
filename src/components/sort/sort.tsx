import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { OrderDirectionEnum } from 'src/@constants';
import { capitalizeFirstLetter } from 'src/@utils';

interface ISort {
  orderBy: string[];
  orderDirection: OrderDirectionEnum;
}

export const Sort: React.FC<ISort> = ({ orderBy, orderDirection }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (orderBy.length > 0) {
      setSelectedIndex(0);
    }
  }, [orderBy]);

  return (
    <View>
      <View style={{ flexDirection: 'row', gap: 20 }}>
        {orderBy.map((item, index) => (
          <TouchableOpacity 
            style={{ alignItems: 'center' }} 
            key={index} 
            onPress={() => setSelectedIndex(index)}
          >
            <Text 
              style={{ fontSize: 14, color: selectedIndex === index ? '#2A9EC3' : '#ACACAC' }}
            >
              {capitalizeFirstLetter(item)}
            </Text>
            <View 
              style={{ 
                marginTop: 4, 
                height: 2, 
                width: '100%', 
                backgroundColor: selectedIndex === index ? '#2A9EC3' : 'transparent', 
              }} 
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
