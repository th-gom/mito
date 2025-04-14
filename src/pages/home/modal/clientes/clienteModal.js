import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './styles'; 
import { salvarUsuario } from '../../../hooks/Banco';



//////CONEXAO COM O DB

export default function UsuariosModal({ onClose }) {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [sexo, setSexo] = useState('');



  const handleSalvar = () => {
    if (!nome || !endereco || !telefone || !sexo) {
      alert('Preencha todos os campos!');
      return;
    }

    const novoUsuario = {
      nome,
      endereco,
      telefone,
      sexo,
    };

    salvarUsuario(novoUsuario);
    setNome('');
    setEndereco('');
    setTelefone('');
    setSexo('');
    onClose();
  };




/////////////// VIEW E CAIXAS DE CONTATO
  return (


    <View style={styles.modalContainer}>


      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />


      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />


      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />


      <Text style={styles.label}>Sexo</Text>
      <View style={styles.sexContainer}>
        {['Masculino', 'Feminino'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.sexOption,
              sexo === item && styles.selected,
            ]}
            onPress={() => setSexo(item)}
          >
            <Text style={styles.sexText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Button title="Salvar" onPress={handleSalvar} />
      <Button title="Cancelar" onPress={onClose} color="red" />

      
    </View>


  );
}
