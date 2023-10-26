import { MaterialIcons } from '@expo/vector-icons';
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from '../style.js';

export default function Comanda({navigation}) {
    return (
        <View style={styles.containerBetween}>
            <View style={styles.header}>
                <View>
                    <Text>Bem Vindo,</Text>
                    <Text style={styles.title}>Gustavo</Text>
                </View>
                <MaterialIcons name="exit-to-app" size={24} color="black" />
            </View>

            <View>
                <TextInput style={styles.input} placeholder="N° Compra" />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Produtos')}>
                    <Text style={styles.buttonText}>confirmar</Text>
                </TouchableOpacity>
            </View>

            <Text>Digite o Numero Referente a sua compra!</Text>

        </View>
    )
}