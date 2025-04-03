import React, { useEffect, useState, useCallback } from 'react';
import { 
    View, Text, FlatList, TouchableOpacity, Modal, Button, StyleSheet 
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import useStorage from '../../hooks/useStorage';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function Pedidos() {
    const { getItem, removeItem } = useStorage();
    const [pedidos, setPedidos] = useState([]);
    const [pedidoSelecionado, setPedidoSelecionado] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    async function carregarPedidos() {
        const pedidosSalvos = await getItem("pedido");
        setPedidos(pedidosSalvos);
    }

    useFocusEffect(
        useCallback(() => {
            carregarPedidos();
        }, [])
    );

    function abrirPedido(pedido) {
        setPedidoSelecionado(pedido);
        setModalVisible(true);
    }

    async function excluirPedido() {
        if (!pedidoSelecionado) return;
        const novosPedidos = await removeItem("pedido", pedidoSelecionado);
        setPedidos(novosPedidos);
        setModalVisible(false);
    }

    // Função para retornar o ícone correto com base no status
    function getStatusIcon(status) {
        switch (status) {
            case 'Entregue':
                return <Ionicons name="checkmark-circle" size={24} color="green" />;
            case 'Separado':
                return <Ionicons name="cube-outline" size={24} color="orange" />;
            case 'Em trânsito':
                return <Ionicons name="car-outline" size={24} color="blue" />;
            default:
                return <Ionicons name="help-circle-outline" size={24} color="gray" />;
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pedidos Salvos:</Text>
            {pedidos.length === 0 ? (
                <Text style={styles.emptyText}>Nenhum pedido salvo.</Text>
            ) : (
                <FlatList
                    data={pedidos}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.itemContainer} onPress={() => abrirPedido(item)}>
                            <Text style={styles.item}>{item.nome}</Text>
                            {getStatusIcon(item.status)}
                        </TouchableOpacity>
                    )}
                />
            )}

            {/* Modal para exibir detalhes do pedido */}
            <Modal visible={modalVisible} animationType="slide" transparent={true} onRequestClose={() => setModalVisible(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Detalhes do Pedido</Text>
                        <Text>Nome: {pedidoSelecionado?.nome}</Text>
                        <Text>Status: {pedidoSelecionado?.status}</Text>
                        <Text>Valor da Nota: R$ {pedidoSelecionado?.valorNota}</Text>
                        <Text>Local de Entrega: {pedidoSelecionado?.localEntrega}</Text>
                        <Text>Cliente: {pedidoSelecionado?.nomeCliente}</Text>
                        <Button title="Excluir Pedido" color="red" onPress={excluirPedido} />
                        <Button title="Fechar" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    emptyText: {
        textAlign: 'center',
        color: 'gray',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: "#fff",
        marginBottom: 10,
        borderRadius: 8,
        elevation: 3,
    },
    item: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});