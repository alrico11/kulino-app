import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Collapsible from 'react-native-collapsible'
import { ArrowLeftIcon, JunkIcon, PencilIcon } from 'src/assets/icons'
import { TextHighlight } from 'src/components'

interface ICardCustomer {
  number: number
  id: string
  name: string
  status: boolean
  phone: string
  email: string
  address: string
  createdAt: string
}

export const CardCustomer: React.FC<ICardCustomer> = ({ id, name, number, status, address, createdAt, email, phone }) => {
  const [isExpand, setExpandCard] = useState(false)

  return (
    <View>
      <View style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8, backgroundColor: '#2A9EC3', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 12, alignItems: 'center', }}>
        <Text style={{ color: "#FFFF", lineHeight: 18 }}>Pelanggan {number}</Text>
        <TouchableOpacity onPress={() => setExpandCard(!isExpand)}>
          <View>
            <ArrowLeftIcon rotation={isExpand ? 270 : 90} />
          </View>
        </TouchableOpacity>
      </View>

      {/* BODY */}
      <View style={{ padding: 10, flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <Text style={{ lineHeight: 18, fontSize: 12, color: '#7A7A7A', width: '50%' }}>ID</Text>
          <Text style={{ lineHeight: 18, fontSize: 12, color: '#383838', width: '50%' }}>{id}</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 }}>
          <Text style={{ lineHeight: 18, fontSize: 12, color: '#7A7A7A', width: '50%' }}>Nama</Text>
          <Text style={{ lineHeight: 18, fontSize: 12, color: '#383838', width: '50%' }}>{name}</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 }}>
          <Text style={{ lineHeight: 18, fontSize: 12, color: '#7A7A7A', width: '50%' }}>Status</Text>
          <TextHighlight bgColor={status ? '#8ACF92' : '#F29292'} text={status ? 'AKTIF' : 'NON AKTIF'} textColor={ status ?'#3CAF4A' : '#EA4949'}/>
        </View>

        {/* COLLAPSIBLE */}
        <Collapsible collapsed={!isExpand}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 }}>
            <Text style={{ lineHeight: 18, fontSize: 12, color: '#7A7A7A', width: '50%' }}>No Handphone</Text>
            <Text style={{ lineHeight: 18, fontSize: 12, color: '#383838', width: '50%' }}>{phone}</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 }}>
            <Text style={{ lineHeight: 18, fontSize: 12, color: '#7A7A7A', width: '50%' }}>Email</Text>
            <Text style={{ lineHeight: 18, fontSize: 12, color: '#383838'}}>{email}</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 }}>
            <Text style={{ lineHeight: 18, fontSize: 12, color: '#7A7A7A', width: '50%' }}>Alamat</Text>
            <Text style={{ lineHeight: 18, fontSize: 12, color: '#383838', width: '50%' }}>{address}</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10 }}>
            <Text style={{ lineHeight: 18, fontSize: 12, color: '#7A7A7A', width: '50%' }}>Tanggal Bergabung</Text>
            <Text style={{ lineHeight: 18, fontSize: 12, color: '#383838', width: '50%' }}>{createdAt}</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10, alignContent:'center', alignItems:'center' }}>
            <Text style={{ lineHeight: 18, fontSize: 12, color: '#7A7A7A', width: '50%' }}>Aksi</Text>
            <View>
              <View style={{gap:10,flexDirection:'row'}}>
                <JunkIcon height={36} width={36}/>
                <PencilIcon height={36} width={36}/>
              </View>
            </View>
          </View>
          

        </Collapsible>
      </View>
    </View>
  )
}
