import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.imagemLogin} source={require('./assets/burguer.jpg')}/>
      <Text>Sistema</Text>
      <Text style={styles.titulo}>Comanda</Text>
      <TextInput style={styles.input} placeholder='E-mail'/>
      <TextInput style={styles.input} secureTextEntry placeholder='Senha'/>
      <Text style={styles.botao}>Entrar</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfbff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color:'#121A2C',
    fontSize: 32,
    fontWeight:'bold'
  },
  input:{
    paddingVertical:12,
    paddingHorizontal:16,
    borderRadius:4,
    borderColor:'#747474',
    borderWidth:1,
    marginVertical:20
  },
  botao:{
    backgroundColor:'#121A2C',
    borderRadius:4,
    color:'#FFBA26',
    paddingVertical:12,
    paddingHorizontal:60,
    borderRadius:4,
    borderWidth:1,
    cursor:'pointer',
  },
  imagemLogin:{
    width:'100%',
    height:200,
    position:'absolute',
    top:0
  }
});
