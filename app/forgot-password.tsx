import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Icon } from '@rneui/themed'; // Ensure you have @rneui/themed installed
import { StyleSheet } from 'react-native'; // Import StyleSheet for styling

export default function ForgotPassword() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Esqueci minha senha</Text>
            <Text style={{ fontSize: 16, marginBottom: 20 }}>
                Digite seu e-mail para receber instruções de recuperação de senha.
            </Text>
            <TextInput
                style={{
                    width: "80%",
                    borderColor: "#ccc",
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 5,
                    marginBottom: 10,
                    color: "#333",
                }}
                placeholder="Digite seu e-mail"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="done"
                onSubmitEditing={() => console.log("E-mail enviado")}
            />
            <TouchableOpacity
                style={{
                    backgroundColor: "black",
                    padding: 10,
                    borderRadius: 5,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                }}
                onPress={() => console.log("E-mail enviado")}
            >
                <Icon name="envelope" type="font-awesome" color="#fff" />
                <Text style={{ color: "#fff", fontSize: 18, textAlign: "center", fontWeight: "bold" }}>
                    Enviar e-mail de recuperação
                </Text>
            </TouchableOpacity>
            <Link href="/" style={{ marginTop: 20 }}>
                
                <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
                    Voltar para o login
                </Text>
            </Link>
        </View>
    );
}