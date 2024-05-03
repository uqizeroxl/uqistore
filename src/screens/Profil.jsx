import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profile from '../components/Profile'
import Akun from '../components/Akun'

const Profil = () => {
  return (
    <View>
      <Profile/>
      <Text style={{margin:17, fontSize:17, fontWeight:'500',}}>Akun</Text>
      <Akun name="home" size={30} color={"black"} />
      <Akun/>
      <Akun/>
    </View>
  )
}

export default Profil

const styles = StyleSheet.create({})