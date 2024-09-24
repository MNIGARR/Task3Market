import React from 'react';
import { StyleSheet, View,Text } from 'react-native';


const hotDealData = [
    {
      id: 1,
      description: "Item #1 Name Goes Here",
      price: 19.99,
      image: ""
    },
    {
      id: 2,
      description: "Item #1 Name Goes Here",
      price: 19.99,
      image: ""
    },
    {
      id: 3,
      description: "Item #1 Name Goes Here",
      price: 19.99,
      image: ""
    },
    {
      id: 4,
      description: "Item #1 Name Goes Here",
      price: 19.99,
      image: ""
    },
    {
      id: 5,
      description: "Item #1 Name Goes Here",
      price: 19.99,
      image: ""
    }
  ]

function Product({data}:any) {
  return (
    <View style={styles.hotDeals}>
    <View >
        <View style={styles.image}></View>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.price}>${data.price}</Text>
    </View>
  </View>
  )
}

const styles=StyleSheet.create({
    hotDeals: {
        marginLeft:16
    },
    description: {
        fontSize: 14,
        fontWeight: "400",
        width: 110,
        height: 34,
        lineHeight: 17
    },
    price:{
        fontSize: 14,
        fontWeight: "600",
        marginTop: 8
    },
    image: {
        width: 110,
        height: 110,
        backgroundColor: "#F6F6F6",
    },
    
})

export default Product;