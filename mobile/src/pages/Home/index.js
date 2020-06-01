import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Carrosel from '../../components/Carousel';
import Header from '../../components/Header';
import Constants from 'expo-constants';
import { Entypo } from '@expo/vector-icons';

const Home = () => {
  return (
  <>
    <View style={{backgroundColor: '#051A77'
                , flex:1
                , paddingTop: Constants.statusBarHeight + 20}}>
      
      <View style={styles.container}>
        <Header/>
        <Carrosel
        items={[1,2,3]}
        />
        <TouchableOpacity style={{backgroundColor: '#FFF',padding:30, flexDirection:'row', width:'100%',margin:15,}}>
          <View style={{}}>
            <Text style={{color:'rgba(15, 51, 119, 1)', fontSize: 20, fontWeight:'700',paddingBottom:10,}}>Escola do investidor</Text>
            <Text style={{color:'rgba(165, 165, 165, 1)', fontSize: 10}}>Descubra mais sobre investimentos e compartilhe suas conquistas com seus amigos.</Text>
          </View>
          <Entypo name="arrow-with-circle-right" size={30} color="rgba(15, 51, 119, 1)" />
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#FFF',padding:30, flexDirection:'row', width:'100%',margin:15,}}>
          <View style={{}}>
            <Text style={{color:'rgba(15, 51, 119, 1)', fontSize: 20, fontWeight:'700',paddingBottom:10,}}>Indicar amigos</Text>
            <Text style={{color:'rgba(165, 165, 165, 1)', fontSize: 10}}>Mostre aos seus amigos como é fácil e prático investir.</Text>
          </View>
          <Entypo name="arrow-with-circle-right" size={30} color="rgba(15, 51, 119, 1)" />
        </TouchableOpacity>
      </View>
    </View>
  </>
  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    margin: 20,
    borderRadius: 10,
    backgroundColor: '#F2F2F2',

  },
});

export default Home;