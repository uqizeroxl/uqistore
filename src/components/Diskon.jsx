import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default  function Diskon ({nomer, voucher,}) {



  return (
    <View>
    <View style={styles.container}>
    <View style={styles.box}>
      <Text style={styles.nota}>{nomer}</Text>  
      <Text style={styles.paket}>{voucher}</Text>
      <View style={styles.garis}></View>
    </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box:{
    margin:20,
    backgroundColor:'#fff',
    width:380,
    height:75,
    padding:15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderRadius:10,
  },

  nota:{
    fontSize:17,
    paddingBottom:5,
    fontWeight:'700',
  },

  paket:{
    fontWeight:'600',
  },

  garis:{
    borderBottomWidth:'3',
    borderRadius:10,
    paddingTop:5,
    borderBlockColor:'#F97300',
  },


})