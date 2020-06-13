import React from 'react';
import { View, Text } from 'react-native';
import { Input } from '../../components';
import { colors } from '../../utils';

const Register = () => {
    return (
        <View style={styles.wrapper.pages}>
            <View style={styles.iconBack}></View>
            <View style={styles.illutration}></View>
            <Text style={styles.text.desc}> Mohon isi beberapa data untuk proses daftar anda</Text>
            <View style={styles.space(64)}/>
            <Input placeholder="nama lengkap"/>
            <View style={styles.space(33)}/>
            <Input placeholder="email"/>
            <View style={styles.space(33)}/>
            <Input placeholder="password"/>
        </View>
    );
};

const styles = {
    wrapper: {
        pages: {
            padding:20
        }
    },
    iconBack: { width: 25, height: 25, backgroundColor: 'blue' },
    illutration: { width: 106, height: 115, backgroundColor: colors.default, marginTop: 8 },
    text: {
        desc:{ fontSize: 14, fontWeight: 'bold', color: colors.default, maxWidth: 200 }
    },
    space: (value) => {
        return {
            height: value
        }
    }
}

export default Register;