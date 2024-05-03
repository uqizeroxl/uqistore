import { StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import React from 'react'

export default function Apalah ({gambar,nama,harga,potongan}){


  return (
    <View >

    <View style={styles.box}>
        <Image source={gambar} style={styles.image}/>
        <View style={styles.text}>
        <Text style={styles.nama}>{nama}</Text>
        <Text style={styles.potongan}>Rp.{potongan}.000</Text>
        <Text style={styles.harga}>Rp.{harga}.000</Text>
        </View>
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
    box:{
        backgroundColor:'red',
        alignItems:'center',
        height:310,
        padding:0,
        width:170,
        margin:15,
        borderRadius:10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,

    },
    image:{
        width:170,
        height:200,
        borderRadius:10,

        // alignItems:'center',
    },

    text:{
        flex:1,
        width:170,

    },

    nama:{
    marginTop: 10,
    fontSize: 20,
    paddingLeft:15,
    fontWeight:'700',
    },

    potongan:{
        paddingLeft:15,
        paddingTop:11,
        textDecorationLine: 'line-through',
        color:'red',
        opacity:0.5,
        fontSize:17,
        fontWeight:'700',
    },

    harga:{
    paddingLeft:15,
    paddingTop:11,
    fontSize:20,
    fontWeight:'700',
    color:'gray'
    },
})