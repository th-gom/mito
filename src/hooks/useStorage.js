import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    const getItem = async (key) => {
        try {
            const data = await AsyncStorage.getItem(key);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error("Erro ao buscar:", error);
            return [];
        }
    };

    const saveItem = async (key, value) => {
        if (!value) return;
        try {
            let data = await getItem(key);
            data.push(value);
            await AsyncStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error("Erro ao salvar:", error);
        }
    };

    const removeItem = async (key, item) => {
        try {
            let data = await getItem(key);
            let newData = data.filter((p) => JSON.stringify(p) !== JSON.stringify(item));
            await AsyncStorage.setItem(key, JSON.stringify(newData));
            return newData;
        } catch (error) {
            console.error("Erro ao deletar:", error);
        }
    };

    return { getItem, saveItem, removeItem };
};

export default useStorage;
