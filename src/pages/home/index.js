import React, { useState } from 'react';
import { View, Button, Modal, Text } from 'react-native';
import styles from './styles';
import PedidosModal from './modal/pedidos/pedidosModal';
import ClientesModal from './modal/clientes/clienteModal';
import ProdutosModal from './modal/produtos/produtosModal';

export function Home() {

                           //////// DEIXA O MODAL OCULTO 
  const [modalPedidosVisible, setModalPedidosVisible] = useState(false);
  const [modalClientesVisible, setModalClientesVisible] = useState(false);
  const [modalProdutosVisible, setModalProdutosVisible] = useState(false); 


  return (

                            /////////////////////// FAZ O MODAL APARECER QUANDO VC APERTA O OBTAO E VOLTAR

    <View style={styles.container}>

      <Text>Projeto</Text> 
      <Button title="Adicionar Pedido" onPress={() => setModalPedidosVisible(true)}   />
      <Button title="Adicionar Cliente" onPress={() => setModalClientesVisible(true)} />
      <Button title="Adicionar Produto" onPress={() => setModalProdutosVisible(true)} /> 




      <Modal visible={modalPedidosVisible} animationType="slide">
        <PedidosModal onClose={() => setModalPedidosVisible(false)} />     </Modal>

      <Modal visible={modalClientesVisible} animationType="slide">
        <ClientesModal onClose={() => setModalClientesVisible(false)} />   </Modal>

      <Modal visible={modalProdutosVisible} animationType="slide">
        <ProdutosModal onClose={() => setModalProdutosVisible(false)} />   </Modal>
        
    </View>


  );


}
