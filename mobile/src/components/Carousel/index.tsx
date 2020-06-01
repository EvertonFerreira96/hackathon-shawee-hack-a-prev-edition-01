import React  from 'react'
import { View, ScrollView, Text, TextComponent, Image, TouchableOpacity } from 'react-native'
import { Stat } from './Stat';
import { Slide } from './Slide';
import { styles } from './styles';

import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

const Graph =  require("../../assets/graph.png")

export const Carousel = (props: any) => {
  const navigation = useNavigation();
  const { items, style } = props;
  const itemsPerInterval = props.itemsPerInterval === undefined
    ? 1
    : props.itemsPerInterval;

  const [interval, setInterval] = React.useState(1);
  const [intervals, setIntervals] = React.useState(1);
  const [width, setWidth] = React.useState(0);

  const init = (width: number) => {
    // initialise width
    setWidth(width);
    // initialise total intervals
    const totalItems = items.length;
    setIntervals(Math.ceil(totalItems / itemsPerInterval));
  }

  const getInterval = (offset: any) => {
    for (let i = 1; i <= intervals; i++) {
      if (offset < (width / intervals) * i) {
        return i;
      }
      if (i == intervals) {
        return i;
      }
    }
  }

  let bullets = [];
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        style={{
          ...styles.bullet,
          opacity: interval === i ? 0.5 : 0.1
        }}
      >
        &bull;
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ ...styles.scrollView, width: `${100 * intervals}%` }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => init(w)}
        onScroll={data => {
          setWidth(data.nativeEvent.contentSize.width);
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast"
      >
      <TouchableOpacity style={[styles.slide, {backgroundColor:"#EEB83B"}]} onPress={() => navigation.navigate('Previdence')}>
        <View style={{marginBottom: 20,paddingBottom:10, paddingHorizontal:40, backgroundColor: '#FFF', borderBottomEndRadius: 25,borderBottomStartRadius:25}}>
          <Text style={{color:"#051A77",fontWeight:'700', fontSize: 16, paddingTop: 5}}>+ 19,85</Text>
        </View>
        <View style={{flex: 1, justifyContent:"space-between",alignItems:"center"}}>
          <Image source={Graph} width={10} height={100}/>
          <View style={{flexDirection: 'row', justifyContent:'space-between',alignItems:'center',marginBottom:50}}>
            <View style={{flex: 1}}>
              <Text style={{fontSize:19, fontWeight:'700', color:'#FFF',paddingVertical:10}}>Investimentos</Text>
              <Text style={{fontSize:10, fontWeight:'700', color:'#FFF'}}>Crie novos investimentos ou veja o progresso de seus investimentos existentes.</Text>
            </View>
            <TouchableOpacity>
              <Entypo name="arrow-with-circle-right" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      <View style={[styles.slide, {backgroundColor:"#EEB83B"}]}>
         <Text></Text>
      </View>
      <View style={[styles.slide, {backgroundColor:"#EEB83B"}]}>
        <Text></Text>
      </View>
      </ScrollView>
      <View style={styles.bullets}>
        {bullets}
      </View>
    </View>
  )
}

export default Carousel;

//<Image source={Graph} width={50} height={50}/>