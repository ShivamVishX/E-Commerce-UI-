import { Text, StyleSheet, View, Image, Button, ScrollView } from 'react-native';
import React from 'react';
import Header from './component/redux/header';

import Product from './component/redux/product';

const App = () => {
  const products = [
    {
      name: "Samsung",
      image: require('./component/images/pexels-lastly-699122.jpg'),
      price: 3000,
      color: "white"
    },
    {
      name: "Lava",
      image: require('./component/images/pexels-lastly-699122.jpg'),
      price: 3000,
      color: "black"
    },
    {
      name: "iPhone",
      image: require('./component/images/pexels-lastly-699122.jpg'),
      price: 3000,
      color: "pink"
    },
    {
      name: "iPhone",
      image: require('./component/images/pexels-lastly-699122.jpg'),
      price: 3000,
      color: "pink"
    },
    {
      name: "iPhone",
      image: require('./component/images/pexels-lastly-699122.jpg'),
      price: 3000,
      color: "pink"
    },
  ];

  return (
    <View>
      <Header />
      <ScrollView  >
        {
          products.map((item) =>

            <Product item={item} />
          )
        }
      </ScrollView >
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
