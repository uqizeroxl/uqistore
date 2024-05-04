import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profile from '../components/Profile'
import Akun from '../components/Akun'
import End from '../components/End'
const Profil = () => {
  return (
    <View>
  <ScrollView>
      <Profile/>
      <Text style={{margin:17, fontSize:17, fontWeight:'500',}}>Akun</Text>
      <Akun/>
      <Text style={{margin:17, fontSize:17, fontWeight:'500',}}>Info lainnya</Text>
    <End/>
    </ScrollView>
    </View>
  )
}

export default Profil

const styles = StyleSheet.create({})