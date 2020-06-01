import React from 'react'
import Constants from 'expo-constants';
import { WebView } from 'react-native-webview'
import { View } from 'react-native';
import { Entypo, MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';

function Chat({ navigation }) {
    return (
        <>
            <View style={{paddingTop: Constants.statusBarHeight + 0, backgroundColor:'#FFF'}}>
            <AntDesign name="arrowleft" size={24} color="#051A77" style={{padding:15}} />
            </View>
            <WebView 
                style={{ flex: 1}} source={{ uri: `https://app.cosmobots.io/landing/541bb950-a347-11ea-8104-5ff706eadbf3` }}/>

        </>
    )
   }

export default Chat