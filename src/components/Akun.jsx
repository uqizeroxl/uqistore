import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Akun = () => {
  return (
    <View>
        <TouchableOpacity style={styles.container }>
            <View style={{flexDirection:'row', gap:10, alignItems:'center',}}>
            <Ionicons name='chatbox-ellipses' size={25}></Ionicons>
            <Text>Pesanan</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',}}>
            <Text>Cek riwayat & pesan aktif</Text>
            <Ionicons name='chevron-forward' size={20}></Ionicons>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default Akun

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:65,
        margin:10,
        borderBottomWidth:0.6,
        borderColor:'#B3C8CF',
        alignItems:'center',
        
    }
})