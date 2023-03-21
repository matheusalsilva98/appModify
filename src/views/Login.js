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
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default props => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [correct, setCorrect] = useState(true);
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View
        style={{
          flex: 2.5,
          width: useWindowDimensions().width,
          backgroundColor: 'white',
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}></View>
        <Image source={require('../../assets/imagem_logo.png')} />
        <View style={{flex: 1}}></View>
      </View>
      <Image
        source={require('../../assets/linha_separadora.png')}
        style={{width: useWindowDimensions().width}}></Image>
      <KeyboardAvoidingView
        style={{
          flex: 10,
          backgroundColor: 'white',
          width: useWindowDimensions().width,
          alignItems: 'center',
        }}>
        <ScrollView>
          <View style={{flex: 1}}></View>
          <View style={{width:'100%', alignItems:'center'}}>
            <Image source={require('../../assets/icone_login.png')} />
          </View>
          <View style={{flex: 6, marginTop: 30}}>
            <View style={{width: useWindowDimensions().width * 0.82}}>
              <TextInput
                value={email}
                placeholder="E-mail"
                onChangeText={email => setEmail(email)}
                placeholderTextColor="black"
                style={styles.boxFillDefault}
              />
            </View>
            <View>
              <TextInput
                value={senha}
                placeholder="Senha"
                placeholderTextColor="black"
                onChangeText={senha => setSenha(senha)}
                style={styles.boxFillDefault}
              />
            </View>
            <View flexDirection="row">
              <TouchableOpacity
                onPress={() => {
                  if (email === '' && senha === '') {
                    setEmail('');
                    setSenha('');
                    navigation.navigate('MyDrawer');
                  } else {
                    setCorrect(false);
                  }
                }}>
                <View style={[styles.button, {marginRight: 5}]}>
                  <Text style={styles.textoButton}>Login</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Registrar');
                }}>
                <View style={styles.button}>
                  <Text style={styles.textoButton}>Resgistrar</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonEsqueceuSenha}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('EsqueceuSenha');
                }}>
                <View>
                  <Text style={styles.textoButton}>Esqueceu sua senha ?</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.engrenagem}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('MyDrawerLinguagem');
              }}>
              <Image
                source={require('../../assets/set_linguage.png')}
                style={{width: 70, height: 70, marginTop: 20, marginLeft: 35}}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: window.innerWidth,
    height: window.innerHeight,
  },
  linha: {
    alignItems: 'center',
    marginBottom: 0,
  },
  boxFillDefault: {
    borderRadius: 10,
    backgroundColor: '#6E91C6',
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 3,
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#6BBD45',
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'center',
    marginBottom: 10,
    width: 144,
  },
  textoButton: {
    color: 'black',
    marginBottom: 10,
    marginTop: 10,
  },
  buttonEsqueceuSenha: {
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'center',
  },
  engrenagem: {
    marginBottom: 20,
    marginLeft: 170,
  },
});
