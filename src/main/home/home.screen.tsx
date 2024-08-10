import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { BillingIcon, CustomerIcon, Newsicon, ReportIcon } from 'src/assets/icons';
import HomeHeaders from 'src/components/header/header';
import { useRouteNavigator } from 'src/hooks';

export const HomeScreen : React.FC = () => {
  const navigateTo = useRouteNavigator()

  return (
    <View>
      <View style={{backgroundColor:'#FFFF'}}>
        <HomeHeaders
          title='Halo, Selamat Datang' 
          role='Admin' 
          name="Asep" 
          totalNotification={12} 
          thumbnail="https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY" 
        />  
      </View>
        <View style={{height:122, paddingHorizontal:16, paddingVertical:20, backgroundColor:'#ffff'}}>
          <View style={{ flex: 1,  flexDirection: 'row', gap:20, flexWrap: 'wrap', justifyContent: 'space-around'}}>
            <View>
              <TouchableOpacity onPress={() => navigateTo('CUSTOMER_SCREEN')}>
                <CustomerIcon />
                <View style={{alignItems:'center'}}>
                  <Text style={{color: '#2A9EC3'}}>Pelanggan</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() => navigateTo('BILL_SCREEN')}>
                <BillingIcon/>
                <View style={{alignItems:'center'}}>
                  <Text style={{color: '#2A9EC3'}}>Tagihan</Text>
                </View>
              </TouchableOpacity>
            </View>  

            <View>
              <TouchableOpacity onPress={() => navigateTo('REPORT_SCREEN')}>
                <ReportIcon/>
                <View style={{alignItems:'center'}}>
                  <Text style={{color: '#2A9EC3'}}>Aduan</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() => navigateTo('NEWS_SCREEN')}>
                <Newsicon/>
                <View style={{alignItems:'center'}}>
                  <Text style={{color: '#2A9EC3'}}>Pengumuman</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
  );
};
