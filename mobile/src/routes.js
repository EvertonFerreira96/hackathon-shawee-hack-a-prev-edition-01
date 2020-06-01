import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import Previdence from './pages/Previdence';
import Chat from './pages/Chat';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Previdence" component={Previdence} />
                <AppStack.Screen name="Chat" component={Chat} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}