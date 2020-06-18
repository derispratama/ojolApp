import React, {useState} from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Input, Button } from '../../components';
import { colors } from '../../utils';

const Register = () => {
    const [form, setForm] = useState({
        fullname: '',
        email: '',
        password: ''
    })

    const sendData = () => {
        console.log('data yang dikirim ', form)
    }

    const onInputChange = (value,input) => {
        setForm({
            ...form,
            [input]: value,
        });
    }
    return (
        <View style={styles.wrapper.pages}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.iconBack}></View>
                <View style={styles.illutration}></View>
                <Text style={styles.text.desc}> Mohon isi beberapa data untuk proses daftar anda</Text>
                <View style={styles.space(64)}/>
                <Input placeholder="nama lengkap" value={form.fullname} onChangeText={(value) => onInputChange(value,'fullname')}/>
                <View style={styles.space(33)} />
                <Input placeholder="email" value={form.email} onChangeText={(value) => onInputChange(value,'email')}/>
                <View style={styles.space(33)} />
                <Input placeholder="password" value={form.password} onChangeText={(value) => onInputChange(value, 'password')} secureTextEntry={true}/>
                <View style={styles.space(83)}/>
                <Button title="Daftar" onPress={sendData}/>
            </ScrollView>
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