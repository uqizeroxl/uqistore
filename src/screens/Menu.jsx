import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Card from '../components/Card'

export default function Menu({navigation}) {

  const handlePress = () => {
    navigation.navigate("makanan")
  }
  return (
    <ScrollView>
      <Image source={require('../../assets/roll.jpg')} style={styles.banner}/>
      <Text style={styles.logo}>SELAMAT DATANG DI UQI FOOD</Text>
      <Text style={styles.text}>uang anda habis tapi anda kenyang, kami pun senang
      silahkan mampir kembali jika anda lapar dan banya uang</Text>
      <View style={styles.container}>
      <Card gambar={require('../../assets/satte.webp')} nama="Sate" desc="AYAM, KAMBING, SAPI" harga={10}/>
      <Card gambar={require('../../assets/seblak.png')} nama="Seblak" desc="-" harga={5}/>
      <Card gambar={require('../../assets/nasigoreng.jpeg')} nama="Nasi Goreng" desc="AYAM, TELUR, CUMI" harga={7}/>
      <Card gambar={require('../../assets/bakso.webp')} nama="Bakso" desc="JUMBO, URAT, MARECON" harga={10}/>
     

      <View style={styles.link}>
      <TouchableOpacity onPress={handlePress} style={styles.tautan}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight:'bold',}}>Menu Lain nya</Text>
      </TouchableOpacity>
      </View>


      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    banner: {
        width: 450,
        height: 250,
        marginBottom:20,
    },
    logo:{
      fontSize:20,
      color:"#fff",
      position:'absolute',
      fontWeight:'700',
      alignItems:'center',
      textAlign:'center',
      justifyContent:'center',
      top:'1%',
      left:'15%',
    },

    text:{
      fontSize:17,
      color:'#fff',
      position:'absolute',
      textAlign:'center',
      alignItems:'center',
      justifyContent:'center',
      top:'3%',
      left:'1%',
      
    },
    garis:{
      height:60,
      width:'auto',
      marginTop:15,
      borderRadius:10,
      borderBottomWidth: 1,
      borderBottomColor: 'gray'
    },
    batas: {
      textAlign:'center',
      margin: 10,
        fontSize:19,
    },
    container: {
        justifyContent:'center',
        alignItems:'center',
        rowGap : 10,
        fontWeight:'bold',

    },

    link:{
      backgroundColor:'#3C5B6F',
      padding:15,
      margin:20,
      marginBottom:50,
      borderRadius:15,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },


})