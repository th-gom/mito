import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import styles from './styles';
import { salvarPedido } from '../../../hooks/Banco';




////////////////CONEXAO COM O DB

export default function PedidosModal({ onClose }) {


  
  const [nomePessoa, setNomePessoa] = useState('');
  const [nomeProduto, setNomeProduto] = useState('');
  const [valorProduto, setValorProduto] = useState('');
  const [valorPago, setValorPago] = useState(false); 
  const [statusEnvio, setStatusEnvio] = useState('embalado'); 






  const handleSalvar = async () => {

    const pedido = {
      nomePessoa,
      nomeProduto,
      valorProduto,
      valorPago,
      statusEnvio,
    };


    await salvarPedido(pedido);

    // LIMPA O CACHE
    setNomePessoa('');
    setNomeProduto('');
    setValorProduto('');
    setValorPago(false);
    setStatusEnvio('embalado');
    
    // FECHA
    onClose();
  };


////// CAMPOS DO VIEW

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.titulo}>Novo Pedido</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome da pessoa"
        value={nomePessoa}
        onChangeText={setNomePessoa}
      />

      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        value={nomeProduto}
        onChangeText={setNomeProduto}
      />

      <TextInput
        style={styles.input}
        placeholder="Valor do produto"
        keyboardType="numeric"
        value={valorProduto}
        onChangeText={setValorProduto}
      />

      <View style={styles.input}>
        <Text>Valor pago?</Text>
        <Picker
          selectedValue={valorPago}
          onValueChange={(itemValue) => setValorPago(itemValue)}
        >
          <Picker.Item label="Não" value={false} />
          <Picker.Item label="Sim" value={true} />
        </Picker>
      </View>

      <View style={styles.input}>
        <Text>Status do envio</Text>
        <Picker
          selectedValue={statusEnvio}
          onValueChange={(itemValue) => setStatusEnvio(itemValue)}
        >
          <Picker.Item label="Embalado" value="embalado" />
          <Picker.Item label="Em Transporte" value="em_transporte" />
          <Picker.Item label="Entregue" value="entregue" />
        </Picker>
      </View>

      <Button title="Salvar" onPress={handleSalvar} />
      <Button title="Cancelar" onPress={onClose} />
    </View>
  );
}
