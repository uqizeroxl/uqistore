import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Diskon from '../components/Diskon'
import Diskontol from '../components/Diskontol'
import Apalah from '../components/Apalah'
import lagii from '../components/lagii'
import Lagi from '../components/Lagi'

const Promo = () => {
  return (
    <ScrollView>

    <View style={styles.header}>
      <Diskon nomer={340} voucher={'Voucher & Paket'}/>
      <Diskon nomer={'0'} voucher={'Langganan'}/>
      <Diskontol nama={'Masukan Kode Voucher'}/>
      <Diskontol nama={'Ajak Teman Kamu Dan Dapatkan Voucher'}/>
      <Text style={styles.prompt}>Promo menarik buat kamu</Text>
      <ScrollView ContentContainerStyle={styles.menu} horizontal={true}>
      <Apalah gambar={require('../../assets/roll.jpg')} nama={'telung'} potongan={10} harga={7}/>
      <Apalah gambar={require('../../assets/rames.jpeg')} nama={'Rames'} potongan={7} harga={5}/>
      <Apalah gambar={require('../../assets/miegoreng.webp')} nama={'Mie Goreng'} potongan={14} harga={10}/>
      </ScrollView>
      <Text style={styles.prompt}>Promo spesial dari kami</Text>
      <Lagi nama={'Cashback 75% GoPay Coin, Maks.30'} keterangan={'berlaku di resto tertentu'} pesan={'Min.order 20rb'}/>
      <Lagi nama={'Diskon makanan 50%, maks. 20rb'} keterangan={'berlaku di resto tertentu'} pesan={'Min.order 30rb'}/>
      <Lagi nama={'Diskon makanan 50%, Maks. 25rb'} keterangan={'berlaku di resto tertentu'} pesan={'Min.order 25rb'}/>
      <Lagi nama={'Cashback 75% GoPay Coin, Maks. 40rb'} keterangan={'berlaku di resto tertentu'} pesan={'Min.order 40rb'}/>
    </View>
    </ScrollView>
  )
}

export default Promo

const styles = StyleSheet.create({
  header:{
    justifyContent:'center',
  },

  prompt:{
    margin:20,
    fontSize:30,
    fontWeight:'700',
  },

  menu:{
    flexDirection:'row',
  },
})