import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Panel } from 'src/components/panel';

export const ProfileScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const data = [
    {
      image: require('assets/images/person.png'),
      label: 'Akun Saya',
      desc: 'Edit data akun saya',
    },
    {
      image: require('assets/images/setting.png'),
      label: 'Pengaturan',
      desc: 'Tampilan, Pesan, Pengingat',
    },
    {
      image: require('assets/images/bookmark.png'),
      label: 'Favorit Saya',
      desc: 'Materi yang difavoritkan',
    },
    {
      image: require('assets/images/secure.png'),
      label: 'Keamanan Akun',
      desc: 'Amankan akun Anda lebih lanjut',
    },
  ];

  const data1 = [
    {
      image: require('assets/images/about.png'),
      label: 'Akun Saya',
      desc: 'Edit data akun saya',
    },
    {
      image: require('assets/images/chat.png'),
      label: 'Pengaturan',
      desc: 'Tampilan, Pesan, Pengingat',
    },
    {
      image: require('assets/images/exit.png'),
      label: 'Keluar',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Akun Saya</Text>
          <Text style={styles.headerSubtitle}>Kuliah Online Universitas Dian Nuswantoro</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.profileInfo}>
          <View style={{paddingBottom:10}}>
            <Image source={require('assets/images/razzi.png')}/>

          </View>
          <Text style={styles.name}>RAZZI WAHYUDI - A11.2020.12939</Text>
          <Text style={styles.course}>Ilmu Komputer - Teknik Informatika S1</Text>
        </View>
        <View style={styles.panelContainer}>
          <Panel data={data} />
        </View>
        <View style={styles.panelContainer}>
          <Panel data={data1} />
        </View>
      </ScrollView>
      <View style={styles.tabContainer}>
  <Image 
    source={require('assets/images/navbar.png')} 
    resizeMode='contain' 
    style={styles.navbarImage} 
  />
</View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F5FA',
  },
  header: {
    height: 90,
    backgroundColor: '#0F4C92',
  },
  headerContent: {
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 20,
    flexDirection: 'column',
  },
  headerTitle: {
    color: '#FFFF',
    fontSize: 25,
    paddingBottom: 5,
  },
  headerSubtitle: {
    color: '#FFFF',
    fontSize: 12,
  },
  scrollViewContent: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  profileInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  name: {
    color: '#383838',
    fontSize: 14,
  },
  course: {
    color: '#7A7A7A',
    fontSize: 12,
  },
  panelContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    height: 90, 
  },
  navbarImage: {
    width: '100%',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 14,
    color: '#383838',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#0F4C92',
  },
});
