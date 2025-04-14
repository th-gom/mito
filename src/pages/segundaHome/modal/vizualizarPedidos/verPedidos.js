// src/pages/segundaHome/modal/vizualizarPedidos/verPedidos.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function PedidosModal({ onClose }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Pedidos em Andamento</Text>
      <Text>Pedido 1: Produto X</Text>
      <Text>Pedido 2: Produto Y</Text>
      <Text>Pedido 3: Produto Z</Text>

      <Button title="Fechar" onPress={onClose} />
    </View>
  );
}
