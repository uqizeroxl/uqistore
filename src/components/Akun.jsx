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
        <TouchableOpacity style={styles.container }>
            <View style={{flexDirection:'row', gap:10, alignItems:'center',}}>
            <Ionicons name='calendar' size={25}></Ionicons>
            <Text>Langganan</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',}}>
            <Ionicons name='chevron-forward' size={20}></Ionicons>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container }>
            <View style={{flexDirection:'row', gap:10, alignItems:'center',}}>
            <Ionicons name='pricetags' size={25} ></Ionicons>
            <Text>Promo</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',}}>
            <Ionicons name='chevron-forward' size={20}></Ionicons>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container }>
            <View style={{flexDirection:'row', gap:10, alignItems:'center',}}>
            <Ionicons name='card' size={25}></Ionicons>
            <Text>Cara Pembayaran</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',}}>
            <Ionicons name='chevron-forward' size={20}></Ionicons>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container }>
            <View style={{flexDirection:'row', gap:10, alignItems:'center',}}>
            <Ionicons name='help-circle' size={25}></Ionicons>
            <Text>Bantuan & Laporan saya</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',}}>
            <Ionicons name='chevron-forward' size={20}></Ionicons>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container }>
            <View style={{flexDirection:'row', gap:10, alignItems:'center',}}>
            <Ionicons name='bag-remove' size={25}></Ionicons>
            <Text>Profil Bisnis</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',}}>
            <Ionicons name='chevron-forward' size={20}></Ionicons>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container }>
            <View style={{flexDirection:'row', gap:10, alignItems:'center',}}>
            <Ionicons name='globe' size={25}></Ionicons>
            <Text>Pilihan bahsa</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',}}>
            <Ionicons name='chevron-forward' size={20}></Ionicons>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container }>
            <View style={{flexDirection:'row', gap:10, alignItems:'center',}}>
            <Ionicons name='bookmark' size={25}></Ionicons>
            <Text>Alamat favorit</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',}}>
            <Ionicons name='chevron-forward' size={20}></Ionicons>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container }>
            <View style={{flexDirection:'row', gap:10, alignItems:'center',}}>
            <Ionicons name='body' size={25}></Ionicons>
            <Text>Aksebilitas</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',}}>
            <Ionicons name='chevron-forward' size={20}></Ionicons>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container }>
            <View style={{flexDirection:'row', gap:10, alignItems:'center',}}>
            <Ionicons name='people' size={25}></Ionicons>
            <Text>Ajak teman, dapat voucher</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',}}>
            <Ionicons name='chevron-forward' size={20}></Ionicons>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container }>
            <View style={{flexDirection:'row', gap:10, alignItems:'center',}}>
            <Ionicons name='notifications' size={25}></Ionicons>
            <Text>Notefikasi</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',}}>
            <Ionicons name='chevron-forward' size={20}></Ionicons>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container }>
            <View style={{flexDirection:'row', gap:10, alignItems:'center',}}>
            <Ionicons name='shield' size={25}></Ionicons>
            <Text>Keamanan akun</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',}}>
            <Ionicons name='chevron-forward' size={20}></Ionicons>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container }>
            <View style={{flexDirection:'row', gap:10, alignItems:'center',}}>
            <Ionicons name='cog' size={25}></Ionicons>
            <Text>Prngaturan akun</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',}}>
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
        height:50,
        margin:10,
        borderBottomWidth:0.6,
        borderColor:'#B3C8CF',
        alignItems:'center',
        
    }
})