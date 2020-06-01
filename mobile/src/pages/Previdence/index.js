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
        <TouchableOpacity style={{backgroundColor: '#FFF',padding:30, flexDirection:'row',justifyContent:'space-between', width:'100%',margin:15,}}>
          <View style={{}}>
            <Text style={{color:'rgba(15, 51, 119, 1)', fontSize: 20, fontWeight:'700',paddingBottom:10,}}>Criar novo investimento</Text>
            <Text style={{color:'rgba(165, 165, 165, 1)', fontSize: 10}}>Descubra outros investimentos disponíveis para o seu formato de carteira.</Text>
          </View>
          <Entypo name="arrow-with-circle-right" size={30} color="rgba(15, 51, 119, 1)" />
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: '#FFF',padding:30, flexDirection:'row',justifyContent:'space-between', width:'100%',margin:15,}}>
          <View style={{}}>
            <Text style={{color:'rgba(15, 51, 119, 1)', fontSize: 20, fontWeight:'700',paddingBottom:10,}}>Portabilidade de carteira</Text>
            <Text style={{color:'rgba(165, 165, 165, 1)', fontSize: 10}}>Quer trazer uma carteira de investimento?</Text>
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