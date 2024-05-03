import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { height, width } from '@fortawesome/free-solid-svg-icons/fa0'
import * as Font from 'expo-font'

export default function Card({gambar, nama, desc, harga}) {

    const [fontLoaded, setFontLoaded] = useState(false);

  return (
    <View style={styles.container}>
        <Image source={gambar} style={styles.makanan}/>
        <View style={styles.text}>
        <Text style={styles.namamakanan}>{nama}</Text>
        <Text style={styles.jenis}>{desc}</Text>
        <Text style={styles.harga}>Rp.{harga}.000</Text>        
        </View>
    </View>

    
  )
}

const styles = StyleSheet.create({
    container: {
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
    makanan:{
        alignItems:"center",
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        width: 360,
        height: 200,
    },
    namamakanan:{
      marginTop: 10,
      fontSize: 20,
      paddingLeft:15,
      fontWeight:'700',

    },
    text:{
      flex:1,
      // backgroundColor:'red',
      width:360,
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