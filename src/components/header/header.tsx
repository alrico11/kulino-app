import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { IconNotification } from '../../assets/icons';

interface IHeaders {
  thumbnail: string
  title: string
  name: string
  role : string
  totalNotification : number
}


const HomeHeaders: React.FC<IHeaders> = ({  thumbnail, name,role,totalNotification,title }) => {
  return (
    <View style={styles.container}>
      <View>
        {thumbnail && <Image source={{ uri: thumbnail }} style={styles.thumbnail} />}
      </View>
      <View style={styles.detail}>
        <Text style={{color:"#FFFF"}}>{title} {name}</Text>
        <Text style={{color:"#FFFF"}}>{role}</Text>
      </View>
      <View style={{flex: 1,alignItems:"flex-end"}}>
      <View style={{marginRight:16,width:40,height:40, backgroundColor:"white", borderRadius:100,gap:10}}>
        <IconNotification/>
        <View style={{width:10,height:10,borderRadius:100, backgroundColor:"#2A9EC3",position:"absolute", marginTop:8, marginBottom:22,marginLeft:22.5,marginRight:7.5}}>
          <Text style={{color : "#FFFF",fontSize:5, alignContent:'center',justifyContent:'center',flex:1,alignSelf:'center'}}>{totalNotification}</Text>
        </View> 
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detail: {
    marginLeft: 8     
  },
  container: {
    backgroundColor:"#2A9EC3",
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems: 'center',
    height:80,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  },
  thumbnail: {
    width: 56,
    height: 56,
    borderWidth:2,
    borderColor: "#FFFF",
    borderRadius: 100,
    marginVertical:17,
    marginLeft: 16,
  },
});

export default HomeHeaders;
