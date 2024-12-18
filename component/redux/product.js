import { Text, StyleSheet, View, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { addToCart,removeFromCart } from './action'
import { useDispatch, useSelector } from 'react-redux'

const Product = (props) => {

  const cartItems = useSelector((state) => state.reducer)
  const [isAdded, setisAdded] = useState(false);

  useEffect(() => {
    if (cartItems && cartItems.length) {
      cartItems.forEach((element) => {
        console.warn(element);
        if (element.name === item.name) {
          setisAdded(true);
        }

      });
    }
  })

  const item = props.item
  const dispatch = useDispatch();

  const handleaddToCart = (item) => {
    dispatch(addToCart(item));
  }
  const handleRemoveToCart = (item) => {
    dispatch(removeFromCart(item.name));
  }
  return (
    <View style={{ alignItems: "center", borderBottomColor: "orange", borderBottomWidth: 2, marginBottom: 50, padding: 10 }}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.text}>{item.price}</Text>
      <Text style={styles.text}>{item.color}</Text>
      <Image style={styles.image} source={item.image} />
      {
        isAdded ?
          <Button title='Remove from cart' onPress={() => { handleRemoveToCart(item) }} />
          : <Button title='Add to cart' onPress={() => { handleaddToCart(item) }} />
      }

    </View>

  )
}


const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    margin: 10
  },
  text: {
    fontSize: 25,
  },

})
export default Product;