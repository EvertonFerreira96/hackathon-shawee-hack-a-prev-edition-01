import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Logo from '../../assets/logo.png';
import Perfil from '../../assets/perfil.png';

const Header = () => {
  return (
    <>
    <View style={styles.container}>
      <Image source={Logo} />
      <Text style={{color:"#FFF",fontSize: 24, paddingHorizontal: 5, fontWeight: '500',}}>
        Dibs
      </Text>
    </View>
    <View style={{flexDirection: "row", justifyContent:"space-between", alignItems: "center", paddingTop: 10, }}>
      <Image source={Perfil} />
      <Text style={{color: "#051A77", fontSize: 24,padding:20 }}>
          Ana Medrado
      </Text>
    </View>
    </>
  );
}

export default Header;