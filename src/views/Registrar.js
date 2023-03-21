import React, {useState} from 'react';
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

export default props => {

    const [esqueceuSenha, setEsqueceuSenha] = useState('');
    const [correct, setCorrect] = useState(true);

    return (
        <View style={[{flex:1, alignItems: 'center', flexDirection: 'column'}]}>
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
                        props.navigation.navigate('Login')
                    }}>
                        <Image source={require('../../assets/icone_tela_login.png')} style={{width:70, height:70}} />
                    </TouchableOpacity>
                </View>
            </View>
            <Image
                source={require('../../assets/linha_separadora.png')}
                style={{width: useWindowDimensions().width}}/>
            <View style={{
                flex: 10,
                backgroundColor: 'white',
                width: useWindowDimensions().width,
                alignItems: 'center',
                }}>
                <ScrollView>
                    <View style={{flex:1, marginTop: 30}}>
                        <View style={{width:
                        useWindowDimensions().width*0.82, marginTop: 55}}>
                            <TextInput 
                                value={esqueceuSenha}
                                placeholder='Nome'
                                placeholderTextColor='black'
                                onChangeText={esqueceuSenha => setEsqueceuSenha(esqueceuSenha)}
                                style={styles.boxFillDefault}
                            />
                            <TextInput 
                                value={esqueceuSenha}
                                placeholder='Sobrenome'
                                placeholderTextColor='black'
                                onChangeText={esqueceuSenha => setEsqueceuSenha(esqueceuSenha)}
                                style={styles.boxFillDefault}
                            />
                            <TextInput 
                                value={esqueceuSenha}
                                placeholder='E-mail'
                                placeholderTextColor='black'
                                onChangeText={esqueceuSenha => setEsqueceuSenha(esqueceuSenha)}
                                style={styles.boxFillDefault}
                            />
                            <TextInput 
                                value={esqueceuSenha}
                                placeholder='Senha'
                                placeholderTextColor='black'
                                onChangeText={esqueceuSenha => setEsqueceuSenha(esqueceuSenha)}
                                style={styles.boxFillDefault}
                            />
                            <TextInput 
                                value={esqueceuSenha}
                                placeholder='Confirmar Senha'
                                placeholderTextColor='black'
                                onChangeText={esqueceuSenha => setEsqueceuSenha(esqueceuSenha)}
                                style={styles.boxFillDefault}
                            />
                        </View>
                        <View>
                            <TouchableOpacity 
                                onPress={() => {
                                    if (esqueceuSenha === props.esqueceuSenha) {
                                        props.navigation.navigate(props.avancar)
                                    } else {
                                        setCorrect(false)
                                    }
                                }}
                            >
                                <View style={[styles.button, {marginRight: 5}]}>
                                    <Text style={[styles.textoButton, {color: 'black'}]}>Registrar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    boxFillDefault: {
        borderRadius: 10,
        backgroundColor: '#6E91C6',
        marginBottom: 10,
        borderColor: 'black',
        borderWidth: 3,
    },
    textoEnviarEmail: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 25,
        marginLeft: 55,
        marginRight: 55,
    },
    button: {
        borderRadius: 10,
        backgroundColor: '#6BBD45',
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'center',
        marginBottom: 10,
        width: 144,
        marginLeft: 70,
        marginRight: 70
      },
    textoButton: {
        color: 'black',
        marginBottom: 10,
        marginTop: 10,
    },
})