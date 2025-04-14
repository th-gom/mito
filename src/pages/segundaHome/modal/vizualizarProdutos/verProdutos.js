// src/pages/segundaHome/modal/vizualizarProdutos/verProdutos.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ProdutosModal({ onClose }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Produtos em Estoque</Text>
      <Text>Produto 1: Camisa</Text>
      <Text>Produto 2: Calça</Text>
      <Text>Produto 3: Jaqueta</Text>

      <Button title="Fechar" onPress={onClose} />
    </View>
  );
}
