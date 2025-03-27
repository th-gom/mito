import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from './src/components/botao';
import { Input } from './src/components/input';
import { useState } from 'react';



export default function App() {

  const [name, setName] = useState("")

  function proximaTela(){
    

  }



  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Gerenciador de Ordens/Perdidos</Text>
      <Text style={styles.titulo}> Oi, {name} </Text>

      <Input onChangeText={setName} />

      <StatusBar style="auto" />

      <Button title= "Entrar" onPress={proximaTela}  />
      <Button title= "Sair"/>

       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    gap:16,
  },

  titulo:{
    
    marginTop: 10,
    fontSize: 18,
    fontWeight:"bold",



  },

  logo:{

    marginBottom: 200,
    marginTop: 100,

    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
});
