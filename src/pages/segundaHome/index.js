import styles from './styles';
import React, { useState } from 'react';
import { View, Button, Modal, Text } from 'react-native';
import PedidosModal from './modal/vizualizarPedidos/verPedidos'; 
import ClientesModal from './modal/visualizarClientes/verClientes';  
import ProdutosModal from './modal/vizualizarProdutos/verProdutos';  

export function Pedidos() {

  ///////////////////////// SET DOS MODAIS

  const [modalPedidosVisible, setModalPedidosVisible] = useState(false);
  const [modalClientesVisible, setModalClientesVisible] = useState(false);
  const [modalProdutosVisible, setModalProdutosVisible] = useState(false);

  return (




  <View style={styles.container}>



      
      <Text>Pedidos em Andamento</Text>

                                     {/* BOTOES DOS MODAIS */}
      <Button title="Ver Pedidos" onPress={() => setModalPedidosVisible(true)} />
      <Button title="Ver Clientes" onPress={() => setModalClientesVisible(true)} />
      <Button title="Ver Produtos" onPress={() => setModalProdutosVisible(true)} />

                                  {/*FECHAR EM SI */}
                                  
      <Modal visible={modalPedidosVisible} animationType="slide">
        <PedidosModal onClose={() => setModalPedidosVisible(false)} />        </Modal>
      
      <Modal visible={modalClientesVisible} animationType="slide"> 
        <ClientesModal onClose={() => setModalClientesVisible(false)} />      </Modal>

      <Modal visible={modalProdutosVisible} animationType="slide">
        <ProdutosModal onClose={() => setModalProdutosVisible(false)} />      </Modal>
    </View> 
  );
}
