import React from 'react';
import {  } from "module";
import { View ,Text, StyleSheet, FlatList, ScrollView} from 'react-native'
import Product from '../HotDealProduct/Product';
import TrendingProduct from '../TrendingProduct/Product';

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

function MarketScreen() {
  return (
    <View>
      <View style= {styles.headPart}>
            <View style = {styles.topNavigation}>
              <Text style = {styles.Back}>Back</Text>
              <Text style = {styles.Market}>Market</Text>
            </View>
        <View style={styles.videoCover}></View>
      </View>
      <ScrollView>

        <View style = {styles.hotDealsPart}>
          <Text style = {styles.hotDealsTitle}>Hot deals</Text>
          <FlatList horizontal={true} data = {hotDealData}  keyExtractor={(item)=>item.id.toString()} renderItem={({item})=>(<Product data={item}/>)}></FlatList>
        </View>

        <View style= {styles.trending}>
          <Text style = {styles.trendingTitle}>Trending</Text>
          <FlatList horizontal={true} data = {hotDealData}  keyExtractor={(item)=>item.id.toString()} renderItem={({item})=>(<TrendingProduct data={item}/>)}></FlatList>

        </View>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  headPart: {
    backgroundColor:"#5DB075",
    width:"100%",
  },
  Back: {
    fontSize:16,
    fontWeight:"500",
    color: "#FFFFFF"
  },
  Market: {
    fontSize:30,
    fontWeight:"600",
    color: "#FFFFFF"
  },
  topNavigation:{
    display:"flex",
    width:"60%",
    marginLeft: '3%',
    marginBottom: 32,
    flexDirection:"row",
    justifyContent:"space-between",
  },
  videoCover: {
    width:343,
    height:200,
    backgroundColor: "#FFFFFF",
    margin:"auto",
    marginBottom: 32,
    // marginLeft: 16,
    // marginRight: 16, 
    borderRadius:12
  },
  hotDealsPart: {
    marginTop: 16

  },
  hotDealsTitle: {
    fontSize: 24,
    fontWeight: "500",
    margin: 16
  },
  trending: {
    marginTop: 16

  },
  trendingTitle: {
    margin: 16,
    fontSize: 24,
    fontWeight: '500',
  }

})

export default MarketScreen;
