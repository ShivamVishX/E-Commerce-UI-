import { Text, StyleSheet, View } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

    const cartData =useSelector((state)=>state.reducer)
    const[cartItems ,setcartItems]=useState(0);
  
    useEffect(()=>{
        setcartItems(cartData.length)
    },[cartData])
    
    return (
        <View style={{ alignItems: "flex-end", padding: 5,  backgroundColor: "orange" }}>
            <Text style={styles.text}>
               {cartItems}
            </Text>
        </View>

    )
}


const styles = StyleSheet.create({

    text: {
        fontSize: 30,
        padding:10,
        color:"black",
        width:"bold"

    }
})
export default Header;