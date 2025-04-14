import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './styles'; 
import { salvarProduto } from '../../../hooks/Banco'; 


////////CONEXAO COM O DB



export default function ProdutosModal({ onClose }) {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [valor, setValor] = useState('');
  const [vencimento, setVencimento] = useState('');
  const [quantidade, setQuantidade] = useState('');






  const handleSalvar = async () => {
    if (!nome || !tipo || !valor || !vencimento || !quantidade) {
      alert('Preencha todos os campos!');
      return;
    }





    const novoProduto = {
      nome,
      tipo,
      valor: parseFloat(valor),
      vencimento,
      quantidade: parseInt(quantidade), 

    };





    await salvarProduto(novoProduto);



    //// LIMPA CAMPO
    setNome('');
    setTipo('');
    setValor('');
    setVencimento('');
    setQuantidade('');
    
    //////FECHA O MODAL



    onClose();



  };


////////////VIEW UX

  return (
    <View style={styles.modalContainer}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Tipo de Produto"
        value={tipo}
        onChangeText={setTipo}
      />

      <TextInput
        style={styles.input}
        placeholder="Valor"
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Ano de Vencimento"
        value={vencimento}
        onChangeText={setVencimento}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Quantidade em Estoque"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />

      <Button title="Salvar Produto" onPress={handleSalvar} />
      <Button title="Cancelar" onPress={onClose} color="red" />
    </View>
  );
}
