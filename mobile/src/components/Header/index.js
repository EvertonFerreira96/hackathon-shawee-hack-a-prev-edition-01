import React, {useState} from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Logo from '../../assets/logo.png';
import Perfil from '../../assets/perfil.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
  const navigation = useNavigation();
  const [ onP, setOnP ] = useState(false);

  return (
    <>
    <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate('Home')}>
      <Image source={Logo} />
      <Text style={{color:"#FFF",fontSize: 24, paddingHorizontal: 5, fontWeight: '500',}}>
        Dibs
      </Text>
    </TouchableOpacity>
    <View style={{flexDirection: "row", justifyContent:"space-between", alignItems: "center", paddingTop: 10, }}>
      <Image source={Perfil} />
      <Text style={{color: "#051A77", fontSize: 24,padding:20 }}>
          Ana Medrado
      </Text>
    </View>
    <TouchableOpacity onPress={()=> setOnP(true)}>
      <FontAwesome5 name="arrow-alt-circle-down" size={24} color="#051A77"  style={{display: (onP ? 'none' : 'flex')}}/>
    </TouchableOpacity>
    <View style={[{justifyContent:'space-between',alignItems:'center'}], {display: (onP ? 'flex' : 'none')}}>
      <Text style={{paddingTop:5}}>Meu Perfil</Text>
      <Text style={{paddingTop:5}}>Informações</Text>
      <Text style={{paddingTop:5}}>Ajuda</Text>
      <Text style={{paddingTop:5}}>Sair</Text>
      <TouchableOpacity onPress={()=> setOnP(false)} style={{alignItems: "center"}}>
        <FontAwesome5 name="arrow-alt-circle-up" size={24} color="#051A77" style={{paddingTop:15}} />
      </TouchableOpacity>
    </View>
    </>
  );
}

export default Header;