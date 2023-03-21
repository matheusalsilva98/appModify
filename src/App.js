import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import TextoCentral from './components/TextoCentral';
import TelaA from './views/Login';
import TelaB from './views/TelaB';
import TelaC from './views/TelaC';

export default props => (
    <SafeAreaView style={{flex: 1}}>
        <TelaA />
        <TelaB />
        <TelaC />
    </SafeAreaView>
)