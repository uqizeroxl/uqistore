import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Diskontol ({nama}) {


  return (
    <ScrollView>
        <View style={styles.kode}>
            <Text style={styles.text}>{nama}</Text>
        </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    kode:{
        backgroundColor:'#fff',
        margin:10,
        height:40,
        borderRadius:20,
        borderColor:'#9AC8CD',
        borderWidth:1,
    },

    text:{
        padding:13,
        fontWeight:'500',

    },
})