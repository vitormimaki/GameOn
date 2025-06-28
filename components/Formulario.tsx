import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Alert,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MultiSelect } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

import * as Location from 'expo-location';
// import axios from 'axios';


export default function Formulario() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [selected, setSelected] = useState([]);

    const data = [
        { label: 'Item 1', value: '1', icon: 'smileo' },
        { label: 'Item 2', value: '2', icon: 'meh' },
        { label: 'Item 3', value: '3', icon: 'frowno' },
        { label: 'Item 4', value: '4', icon: 'star' },
        { label: 'Item 5', value: '5', icon: 'like2' },
        { label: 'Item 6', value: '6', icon: 'dislike2' },
        { label: 'Item 7', value: '7', icon: 'hearto' },
        { label: 'Item 8', value: '8', icon: 'checkcircleo' },
    ];

    const renderItem = (item) => (
        <View style={styles.item}>
            <AntDesign name={item.icon} size={20} color="black" style={styles.icon} />
            <Text style={styles.selectedTextStyle}>{item.label}</Text>
        </View>
    );

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permissão negada', 'Não foi possível acessar a localização');
                return;
            }
        
            let location = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = location.coords;
        
            try {
                const [address] = await Location.reverseGeocodeAsync({ latitude, longitude });
                console.log('Endereço retornado:', address);

                if (address) {
                const cidade = address.city || address.subregion || address.district || 'Cidade';
                const estado = address.region || 'Estado';
                const pais = address.country || 'País';
        
                setLocalizacao(`${cidade} - ${estado} - ${pais}`);
                } else {
                setLocalizacao(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
                }
            } catch (error) {
                console.log('Erro no reverseGeocodeAsync:', error);
                setLocalizacao(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
            }
        })();
    }, []);      

    // const GOOGLE_API_KEY = '';

    // useEffect(() => {
    // (async () => {
    //     try {
    //     let { status } = await Location.requestForegroundPermissionsAsync();
    //     if (status !== 'granted') {
    //         Alert.alert('Permissão negada', 'Não foi possível acessar a localização');
    //         return;
    //     }

    //     let { coords } = await Location.getCurrentPositionAsync({});
    //     console.log('Coordenadas:', coords);

    //     const { latitude, longitude } = coords;

    //     // Chamada manual à API do Google
    //     const response = await axios.get(
    //         `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`
    //     );

    //     if (response.data.results.length > 0) {
    //         const components = response.data.results[0].address_components;

    //         const cidade = components.find(c => c.types.includes('locality'))?.long_name;
    //         const estado = components.find(c => c.types.includes('administrative_area_level_1'))?.short_name;
    //         const pais = components.find(c => c.types.includes('country'))?.long_name;

    //         const enderecoFormatado = `${cidade || 'Cidade'} - ${estado || 'Estado'} - ${pais || 'País'}`;
    //         console.log('Endereço formatado:', enderecoFormatado);
    //         setLocalizacao(enderecoFormatado);
    //     }

    //     } catch (error) {
    //     console.error('Erro ao obter localização:', error);
    //     }
    // })();
    // }, []);



    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setNome}
                value={nome}
                placeholder="Nome"
                placeholderTextColor="gray"
                keyboardType="default"
            />
            <TextInput
                style={styles.input}
                onChangeText={setDescricao}
                value={descricao}
                placeholder="Descrição"
                placeholderTextColor="gray"
                keyboardType="default"
            />
            <TextInput
                style={styles.input}
                onChangeText={setIdade}
                value={idade}
                placeholder="Idade"
                placeholderTextColor="gray"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                value={localizacao}
                onChangeText={setLocalizacao}
                placeholder="Localização"
                placeholderTextColor="gray"
            />
            <Picker
                style={styles.input}
                selectedValue={sexo}
                onValueChange={(itemValue) => setSexo(itemValue)}
            >
                <Picker.Item label="Selecione o sexo" value="" />
                <Picker.Item label="Masculino" value="m" />
                <Picker.Item label="Feminino" value="f" />
                <Picker.Item label="Não-Binário" value="nb" />
            </Picker>

            <MultiSelect
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                labelField="label"
                valueField="value"
                placeholder="Selecione os itens"
                value={selected}
                search
                searchPlaceholder="Buscar..."
                onChange={setSelected}
                renderLeftIcon={() => (
                    <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                )}
                renderItem={renderItem}
                renderSelectedItem={(item, unSelect) => (
                    <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                        <View style={styles.selectedStyle}>
                            <AntDesign name={item.icon} size={17} color="black" style={styles.icon} />
                            <Text style={styles.textSelectedStyle}>{item.label}</Text>
                            <AntDesign color="black" name="delete" size={17} />
                        </View>
                    </TouchableOpacity>
                )}
            />
            <MultiSelect
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                labelField="label"
                valueField="value"
                placeholder="Selecione os itens"
                value={selected}
                search
                searchPlaceholder="Buscar..."
                onChange={setSelected}
                renderLeftIcon={() => (
                    <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                )}
                renderItem={renderItem}
                renderSelectedItem={(item, unSelect) => (
                    <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                        <View style={styles.selectedStyle}>
                            <AntDesign name={item.icon} size={17} color="black" style={styles.icon} />
                            <Text style={styles.textSelectedStyle}>{item.label}</Text>
                            <AntDesign color="black" name="delete" size={17} />
                        </View>
                    </TouchableOpacity>
                )}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#f9f9f9',
        flex: 1,
    },
    input: {
        height: 40,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    dropdown: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        marginTop: 12,
    },
    placeholderStyle: {
        fontSize: 16,
        color: 'gray',
    },
    selectedTextStyle: {
        fontSize: 14,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    icon: {
        marginRight: 8,
    },
    item: {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    selectedStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: 'white',
        shadowColor: '#000',
        marginTop: 8,
        marginRight: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    textSelectedStyle: {
        marginRight: 5,
        fontSize: 16,
    },
});
