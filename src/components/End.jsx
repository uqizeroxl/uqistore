import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const End = () => {
  return (
    <View>
        <TouchableOpacity style={styles.container }>
            <View style={{flexDirection:'row', gap:10, alignItems:'center',}}>
            <Ionicons name='shield-checkmark' size={25}></Ionicons>
            <Text>Kebijakan privasi</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',}}>
            <Ionicons name='chevron-forward' size={20}></Ionicons>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container }>
            <View style={{flexDirection:'row', gap:10, alignItems:'center',}}>
            <Ionicons name='newspaper' size={25}></Ionicons>
            <Text>Ketentuan layanan</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',}}>
            <Ionicons name='chevron-forward' size={20}></Ionicons>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container }>
            <View style={{flexDirection:'row', gap:10, alignItems:'center',}}>
            <Ionicons name='star-half' size={25}></Ionicons>
            <Text>Beri kami Nilai</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',}}>
            <Ionicons name='chevron-forward' size={20}></Ionicons>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container }>
            <View style={{flexDirection:'row', gap:10, alignItems:'center',}}>
            <Ionicons name='flame' size={25}></Ionicons>
            <Text>Menyala abangkuh</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',}}>
            <Ionicons name='chevron-forward' size={20}></Ionicons>
            </View>
        </TouchableOpacity>
    </View>
  )
}
export default End

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        height:50,
        margin:10,
        borderBottomWidth:0.6,
        borderColor:'#B3C8CF',
        alignItems:'center',
    },
})