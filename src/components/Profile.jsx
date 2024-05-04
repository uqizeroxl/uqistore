import { StyleSheet, Text, TouchableOpacity, View,  } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.nav}>
        <Ionicons name='arrow-back-outline' size={'30'}></Ionicons>
        <Text style={styles.text}>Profil saya</Text>
      </TouchableOpacity>
      <View style={styles.lengkap}>
    <Ionicons name='person-circle-outline' color={'#4CCD99'} size={'50'} style={styles.prof}></Ionicons>
    <View>
    <Text style={styles.nama}>Kholqi</Text>
    <Text style={styles.email}>mohkholqimaulana@gmail.com</Text>
    <Text style={styles.nomor}>+62 87747679147</Text>
    </View>
      </View>
      <View style={styles.verifikasi}>
        <View style={styles.apa}>
        <Text style={styles.isinya}>Verifikasi email sekarang untuk akun lebih aman.</Text>
        </View>
        <View style={styles.yaapa}>
      <TouchableOpacity style={styles.aneh}>
        <Text style={styles.tom}>Verifikasi</Text>
      </TouchableOpacity>
        </View>
      </View>
      
    </View>
  )
}

export default Profile;

const styles = StyleSheet.create({
  nav:{
    flexDirection:'row',
    alignItems:'center',
    margin:10,
  },

  text:{
    fontSize:20,
    marginLeft:20,
    fontWeight:'700',
  },

  prof:{
    margin:10,
  },

  lengkap:{
    flexDirection:'row',
    marginTop:10,
    alignItems:'center',
  },

  nama:{
    fontSize:20,
    fontWeight:'700',
    paddingBottom:4,
  },

  email:{
    fontSize:19,
    paddingBottom:4,
  },

  nomor:{
    fontSize:15,
    paddingBottom:4,
  },

  verifikasi:{
    margin:12,
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'red',
    height:65,
    width:380,
    borderRadius:20,
    flexDirection:'row',
  },

  isinya:{
    padding:7,
    fontSize:17,
    color:'#fff',
  },

  apa:{
    width:280,
  },

  yaapa:{
    fontSize:20,
  },
  tom:{
    borderWidth:1,
    borderColor:'#fff',
    borderRadius:17,
    padding:8,

    color:'#fff',
    fontSize:15,
    fontWeight:'500',
    margin:5,

  },
  aneh:{
    padding:5,
  }
});
