import React from 'react';
import { View, Text } from 'react-native';
import ActionButton from './ActionButton';
import { colors } from '../../utils';

const WelcomeAuth = () => {
    return (
        <View style={styles.wrapper.page}>
            <View style={styles.wrapper.illustration}></View>
            <Text style={styles.text.welcome}>Selamat Datang di Ojol App</Text>
            <ActionButton desc="Silahkan Masuk,Jika anda sudah memiliki akun" title="Masuk"/>
            <ActionButton desc="atau Silahkan Daftar,Jika anda belum memiliki akun" title="Daftar"/>
        </View>
    );
};

const styles = {
    wrapper: {
        page: {
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            flex: 1
        },
        illustration: {
            width: 219,
            height: 117,
            backgroundColor: colors.default,
            marginBottom: 10
        }
    },
    text: {
        welcome: {
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.default,
            marginBottom: 76
        }
    }
}
export default WelcomeAuth;