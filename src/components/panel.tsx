import React from "react";
import { Image, Text, View } from "react-native";

interface IPanel {
  image: any; // Using `any` for handling image requires
  label: string;
  desc?: string;
}

interface DataPanel {
  data: IPanel[];
}

export const Panel: React.FC<DataPanel> = ({ data }) => {
  return (
    <View>
      {data.map((item, index) => (
        <View key={index} style={{ shadowColor: '#092E58', backgroundColor: "#FFFF", marginBottom: 10 }}>
          <View style={{ paddingHorizontal: 16, paddingVertical: 12, flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <View style={{ paddingRight: 20 }}>
                  <Image source={item.image} />
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignSelf: 'center' }}>
                  <Text style={{ color: item.desc ? 'black' : '#D35252' }}>{item.label}</Text>
                  {item.desc && <Text style={{fontSize:12,color:'#ACACAC'}}>{item.desc}</Text>}
                </View>
              </View>
              {item.desc && (
                <View style={{ alignSelf: 'center', justifyContent: 'center', right: 0 }}>
                  <Image source={require(`assets/images/chevron-right.png`)} />
                </View>
              )}
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};
