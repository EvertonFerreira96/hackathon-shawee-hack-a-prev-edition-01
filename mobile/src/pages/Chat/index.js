import React from 'react'
import { WebView } from 'react-native-webview'

function Chat({ navigation }) {
    return <WebView style={{ flex: 1}} source={{ uri: `https://app.cosmobots.io/landing/541bb950-a347-11ea-8104-5ff706eadbf3` }}/>
}

export default Chat