// src/pages/segundaHome/modal/visualizarClientes/verClientes.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ClientesModal({ onClose }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Clientes Cadastrados</Text>
      <Text>Cliente 1: João Silva</Text>
      <Text>Cliente 2: Maria Oliveira</Text>
      <Text>Cliente 3: Pedro Santos</Text>

      <Button title="Fechar" onPress={onClose} />
    </View>
  );
}
