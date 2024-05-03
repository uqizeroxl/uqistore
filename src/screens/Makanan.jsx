import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Meat from '../components/Meat'
import { Ionicons } from '@expo/vector-icons'

export default function Makanan() {
  return (
    <View>
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/makanan.webp')} style={styles.banner}/>
      <Text style={styles.textbenner}>aneka ragam makanan has indonesia</Text>
      <View style={styles.card}>
        <Meat gambar={require('../../assets/nasigoreng.jpeg')} nama={'Nasi goreng'} desc={'TELUR, AYAM, CUMI'} harga={3}/>
        <Meat gambar={require('../../assets/rawon.webp')} nama={'Rawon'} desc={'-'}  harga={13}/>
        <Meat gambar={require('../../assets/nasitumpeng.jpeg')} nama={'nasi tumpeng'} desc={'-'} harga={3}/>
       
      </View>
      <Text style={styles.textsamping}>Jangan Lupa Minum</Text>
      <ScrollView contentContainerStyle={styles.samping}horizontal={true}>
        <Meat gambar={require('../../assets/es teh.jpeg')} nama={'Es teh'} desc={'HANGAT, DINGIN'} harga={2}/>
        <Meat gambar={require('../../assets/es cream.jpeg')} nama={'Es cream'} desc={'-'} harga={7}/>
        <Meat gambar={require('../../assets/milo.jpg')} nama={'Milo'} desc={'DINGIN, HANGAT'} harga={7}/>
        <Meat gambar={require('../../assets/kopisusu.jpg')} nama={'Kopi Susu'} desc={'DINGIN, HANGAT'} harga={5}/>
      </ScrollView>
        <Meat gambar={require('../../assets/tahukres.jpg')} nama={'Tahu Kres'} desc={'BIASA, RUMPUT LAUT, BALADO'} harga={6}/>
        <Meat gambar={require('../../assets/rujak.png')} nama={'Rujak'} desc={'BIASA, CINGUR, LORJHUK'} harga={8}/>
        <Meat gambar={require('../../assets/rames.jpeg')} nama={'Nasi Rames'} desc={'-'} harga={7}/>      
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
   justifyContent:'center',
   alignItems:'center',
   gap:25,

    
  },

  banner: {
    width:450,
    height:250,
  },

  textbenner:{
    fontSize:30,
    color:'#fff',
    position: 'absolute',
    textAlign:'center',
    justifyContent: 'center',
    alignItems: 'center',
    top: '13%',
    left: '10%',
    fontWeight:'700',
  },

  samping:{
    flexDirection:'row',
    gap:25,
    paddingLeft:20,
    paddingRight:20,
  },

  textsamping:{
    fontSize:20,
    fontWeight:'700',
  },
})