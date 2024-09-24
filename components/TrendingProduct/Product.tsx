import React from 'react';
import { StyleSheet, View,Text } from 'react-native';


function TrendingProduct({data}:any) {
    return (
      <View style={styles.trendingPart}>
      <View >
          <View style={styles.image}></View>
      </View>
    </View>
    )
  }
  
  const styles=StyleSheet.create({
      trendingPart: {
          marginLeft:16
      },
      image: {
          width: 110,
          height: 110,
          backgroundColor: "#F6F6F6",
      },
      
  })
  
  export default TrendingProduct;