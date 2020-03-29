import React from 'react';
import {Feather} from '@expo/vector-icons'
import {useNavigation, useRoute} from '@react-navigation/native'
import { View , Image, TouchableOpacity, Text, Linking} from 'react-native';
import styles from './styles';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

export default function Index(){
    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;
    
    const message = `Olá ${incident.nome}, estou entrando em contato pois gostaria de ajudar no caso ${incident.title}`;

    function navigateBack(){
        avigation.goBack();
        

    }
    function sendMail(){
        MailComposer.composeAsync({
            subject: `Herói do Caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }
    function sentMessege(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Image source={logoImg}/>
            
            <TouchableOpacity>
                <Feather name="arrow-rigth" size={16} color="#e02041"/>
            </TouchableOpacity>
            </View>
            <View style={styles.incident}>
            <Text style={styles.incident.Property, {marginTop: 0}}>ONG: </Text>
    <Text style={styles.incident.Value}>{incident.nome} de {incident.cidade}/ {incident.uf} </Text>

                    <Text style={styles.incident.Property}>Caso: </Text>
             <Text style={styles.incident.Value}>{incident.title}</Text>

                    <Text style={styles.incident.Property}>Valor: </Text>
                    <Text style={styles.incident.Value}>
                        {Intl.NumberFormat('pt-BR', {
                        style: 'currency', 
                        currency: 'BRL'
                        }).format(incident.value)}
                        </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o Dia</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}> Entre em contato: </Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sentMessege}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
                        
    )
}