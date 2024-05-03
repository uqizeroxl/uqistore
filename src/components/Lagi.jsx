import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Lagi({nama, keterangan, pesan}) {

  return (
    <View>
    <View style={styles.Lagi}>
        <Text style={styles.Text}>{nama}</Text>
        <View>
        <Text style={styles.ket}>{keterangan}</Text>
        <Text style={styles.ket}>{pesan}</Text>
        </View>
        <View style={styles.kolom}>
            <Text style={styles.pesan}>Pesan antar</Text>
        </View>
    </View>
    </View>
  )
}



const styles = StyleSheet.create({
    Lagi:{
        backgroundColor:'#fff',
        width:380,
        margin:20,
        borderRadius:10,
        padding:15,
        shadowColor:'#000',
        shadowOffset: { width:0, height:1, },
        shadowOpacity: 0.3,
        shadowRadius:4,
    },

    Text:{
        fontSize:20,
        marginBottom:20,
    },

    ket:{
        margin:5,
    },

    kolom:{
        marginTop:20,
        borderWidth:1,
        borderRadius:20,
        marginTop:10,
        padding:5,
        alignItems:'center',
        width:95,

    },


})