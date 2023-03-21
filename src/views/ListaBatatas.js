import React, {useState} from 'react';
import { DrawerActions } from 'react-navigation'
import TextoCentral from '../components/TextoCentral';
import PassoStack from '../components/PassoStack';
import AssinaturaMarca from '../../assets/logo_assinatura.svg';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default props => {
    const navigation = useNavigation()

    return (
        <View style={[
            styles.container,
            {
                flexDirection: 'column',
            }
        ]}>
            <View style={{
                flex: 2.5,
                width: useWindowDimensions().width,
                backgroundColor: 'white',
                alignItems: 'center',
            }}>
                <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
                    <Image 
                        source={require('../../assets/imagem_logo.png')}></Image>
                    <TouchableOpacity onPress={() => {
                        props.navigation.openDrawer()
                    }}>
                        <Image source={require('../../assets/icone_editar_perfil.png')} style={{width:100, height:100}}/>
                    </TouchableOpacity>
                </View>
            </View>
            <Image
                source={require('../../assets/linha_separadora.png')}
                style={{width: useWindowDimensions().width}}/>
            <View style={{flex: 10}}>
                <View style={{flex:4}}>
                    <ScrollView style={{
                        backgroundColor: 'white',
                        width: useWindowDimensions().width,
                        flex:14}}>                        
                    <View>
                        <Image source={require('../../assets/icone_scan_qr_code.png')} style={{width: 70, height: 70, position: 'absolute', left: 0, top: 0, right: 0, bottom: 0}}/>
                    </View> 
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: window.innerWidth,
        height: window.innerHeight,
      },
    scan: {
        
    },
})