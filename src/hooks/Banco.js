import AsyncStorage from '@react-native-async-storage/async-storage';

const PEDIDOS_KEY = '@pedidos_lista';
const USUARIOS_KEY = '@usuarios_lista';






export const salvarPedido = async (pedido) => {
  try {
    const pedidosSalvos = await AsyncStorage.getItem(PEDIDOS_KEY);
    const pedidos = pedidosSalvos ? JSON.parse(pedidosSalvos) : [];




    
///// ADICIONAR PEDIDOS
    pedidos.push({
      id: Date.now(),
      nomePessoa: pedido.nomePessoa,
      nomeProduto: pedido.nomeProduto,
      valorProduto: pedido.valorProduto,
      valorPago: pedido.valorPago,
      statusEnvio: pedido.statusEnvio,
    });






/////////////////// SALVAR PEDIDOS
    await AsyncStorage.setItem(PEDIDOS_KEY, JSON.stringify(pedidos));
    console.log('Pedido salvo com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar pedido:', error);
  }
};







// LISTAR PEDIDOS PARA A SEGUNDA HOME
export const listarPedidos = async () => {
  try {
    const pedidosSalvos = await AsyncStorage.getItem(PEDIDOS_KEY);
    return pedidosSalvos ? JSON.parse(pedidosSalvos) : [];
  } catch (error) {
    console.error('Erro ao listar pedidos:', error);
    return [];
  }
};





export const salvarUsuario = async (usuario) => {
  try {
    const dadosExistentes = await AsyncStorage.getItem(USUARIOS_KEY);
    const lista = dadosExistentes ? JSON.parse(dadosExistentes) : [];
    lista.push(usuario);
    await AsyncStorage.setItem(USUARIOS_KEY, JSON.stringify(lista));
  } catch (error) {
    console.error('Erro ao salvar usuário:', error);
  }
};







export const listarUsuarios = async () => {
  try {
    const dados = await AsyncStorage.getItem(USUARIOS_KEY);
    return dados ? JSON.parse(dados) : [];
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    return [];
  }
};








export const buscarPedidos = async () => {
    try {
      const pedidos = await AsyncStorage.getItem('pedidos');
      return pedidos ? JSON.parse(pedidos) : [];
    } catch (error) {
      console.error('Erro ao buscar pedidos:', error);
      return [];
    }
  };





  export const salvarProduto = async (produto) => {
    try {
      const produtosSalvos = await AsyncStorage.getItem('produtos');
      const produtos = produtosSalvos ? JSON.parse(produtosSalvos) : [];
  



///////////////// NOVOS PRODUTOS



      produtos.push(produto);




  
///////////SALVA DNV
      await AsyncStorage.setItem('produtos', JSON.stringify(produtos));
      alert('Produto cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar produto', error);
      alert('Erro ao salvar produto');
    }
  };


  
  
  

  export const carregarProdutos = async () => {
    try {
      const produtosSalvos = await AsyncStorage.getItem('produtos');
      return produtosSalvos ? JSON.parse(produtosSalvos) : [];
    } catch (error) {
      console.error('Erro ao carregar produtos', error);
      return [];
    }
  };
  
  
