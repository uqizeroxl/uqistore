import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Meat({gambar, nama, desc, harga}) {

    return (
      <View style={styles.container}>
        <Image source={gambar} style={styles.gambar}/>
        <View style={styles.text}>
        <Text style={styles.namamakanan}>{nama}</Text>
        <Text style={styles.jenis}>{desc}</Text>
        <Text style={styles.harga}>Rp.{harga}.000</Text>        
        </View>
      </View>
    )
}

const styles= StyleSheet.create({
  container:{
    marginTop:15,
    paddingTop:5,
    alignItems:'center',
    width: 370,
    height: 300,
    backgroundColor:'#FFF',
    borderRadius:10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

  },
  
  gambar:{
    alignItems:"center",
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    width: 360,
    height: 200,
  },

  text:{
    flex:1,
    width:360,
  },

  namamakanan:{
    marginTop: 10,
    fontSize: 20,
    paddingLeft:15,
    fontWeight:'700',
  },

  jenis:{
    paddingLeft:15,
    fontSize:15,
    marginTop:8,
  },

  harga:{
    paddingLeft:15,
    paddingTop:11,
    fontSize:20,
    fontWeight:'700',
    color:'gray'
  },

  minuman:{
    alignItems:"center",
      borderTopRightRadius:10,
      borderTopLeftRadius:10,
      width: 368,
      height: 200,
  },

})
