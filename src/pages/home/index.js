import React, { useState } from 'react';
import { 
    View, TextInput, Button, Alert, StyleSheet, Modal, Text, TouchableOpacity 
} from 'react-native';
import useStorage from '../../hooks/useStorage';

export function Home() {
    const { saveItem } = useStorage();
    const [pedido, setPedido] = useState('');
    const [modalStatusVisible, setModalStatusVisible] = useState(false);
    const [modalInfoVisible, setModalInfoVisible] = useState(false);
    const [pedidoAtual, setPedidoAtual] = useState(null);
    const [statusAtual, setStatusAtual] = useState('');
    const [valorNota, setValorNota] = useState('');
    const [localEntrega, setLocalEntrega] = useState('');
    const [nomeCliente, setNomeCliente] = useState('');
    const [pago, setPago] = useState(false);

    function adicionarPedido() {
        if (pedido.trim() === '') {
            Alert.alert("Erro", "Digite um pedido antes de salvar.");
            return;
        }

        setPedidoAtual(pedido);
        setModalStatusVisible(true); // Abre o modal para escolher o status
    }

    function selecionarStatus(status) {
        setStatusAtual(status);
        setModalStatusVisible(false);
        setModalInfoVisible(true); // Abre o modal para preencher as informações
    }

    async function salvarPedido() {
        if (!valorNota || !localEntrega || !nomeCliente) {
            Alert.alert("Erro", "Preencha todas as informações antes de salvar.");
            return;
        }

        const pedidoCompleto = {
            nome: pedidoAtual,
            status: statusAtual,
            valorNota,
            localEntrega,
            nomeCliente,
            pago
        };

        await saveItem("pedido", pedidoCompleto);
        setPedido('');
        setValorNota('');
        setLocalEntrega('');
        setNomeCliente('');
        setPago(false);
        setModalInfoVisible(false);
        Alert.alert("Sucesso", "Pedido salvo com sucesso!");
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Digite o nome do pedido"
                value={pedido}
                onChangeText={setPedido}
            />
            <Button title="Adicionar Pedido" onPress={adicionarPedido} />

            {/* Modal para escolher o status */}
            <Modal
                visible={modalStatusVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalStatusVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Escolha o status do pedido</Text>
                        <TouchableOpacity style={styles.statusButton} onPress={() => selecionarStatus("Sendo preparado")}> 
                            <Text style={styles.statusText}>Sendo preparado</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.statusButton} onPress={() => selecionarStatus("Em trânsito")}> 
                            <Text style={styles.statusText}>Em trânsito</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.statusButton} onPress={() => selecionarStatus("Entregue")}> 
                            <Text style={styles.statusText}>Entregue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Modal para preencher informações adicionais */}
            <Modal
                visible={modalInfoVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalInfoVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Preencha as informações do pedido</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Valor da Nota (R$)"
                            keyboardType="numeric"
                            value={valorNota}
                            onChangeText={setValorNota}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Local de Entrega"
                            value={localEntrega}
                            onChangeText={setLocalEntrega}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Nome do Cliente"
                            value={nomeCliente}
                            onChangeText={setNomeCliente}
                        />
                        <TouchableOpacity
                            style={[styles.statusButton, { backgroundColor: pago ? 'green' : 'red' }]}
                            onPress={() => setPago(!pago)}
                        >
                            <Text style={styles.statusText}>{pago ? "Pago" : "Não Pago"}</Text>
                        </TouchableOpacity>
                        <Button title="Salvar Pedido" onPress={salvarPedido} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
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
        alignItems: 'center',
        width: '80%',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    statusButton: {
        backgroundColor: '#007bff',
        padding: 10,
        marginVertical: 5,
        width: 200,
        alignItems: 'center',
        borderRadius: 5,
    },
    statusText: {
        color: '#fff',
        fontSize: 16,
    },
});
