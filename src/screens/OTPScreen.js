import React, { PureComponent } from 'react';
import {
    Platform,
    StyleSheet, PixelRatio, TextInput,
    Text, TouchableOpacity, ActivityIndicator, Dimensions,
    View, ScrollView,
    Image
} from 'react-native';
import email from '../assets/email.png'
import close from '../assets/close.png'
import back from '../assets/back.png'
import link from '../assets/link.png'
import phone from '../assets/phone.png'

import { Icon } from 'native-base'
import { Actions } from 'react-native-router-flux';
import OtpInputs from 'react-native-otp-inputs'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height
export default class OTPScreen extends PureComponent {

    constructor() {
        super()
        this.state = {
            logintxt: ''

        };

    }


    render() {
        return (
            <KeyboardAwareScrollView style={styles.container}>
                <View style={{ width: width, height: height }}>
                    <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => Actions.pop()} style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={back} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                        <View style={{ width: '60%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

                        </View>
                        <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={close} style={{ width: 30, height: 30 }} />
                        </View>
                    </View>

                    <View style={{ width: '100%', height: '40%', backgroundColor: null, justifyContent: 'center', alignItems: 'center' }}>
                       {this.props.value=="Phone"? <Image source={phone} style={{ height: '30%', width: '30%', resizeMode: 'contain' }} />: <Image source={email} style={{ height: '50%', width: '50%', resizeMode: 'contain' }} />}
                        <Text style={{ fontSize: 26, marginTop: 10, color: 'grey', fontWeight: 'bold' }}>Verification Code</Text>
                        <Text style={{ fontSize: 12, color: 'grey', marginTop: 10, width: '80%' }}>Please type the 4 digit Verification code sent on abc@gmail.com</Text>

                    </View>
                    <View style={{ width: '100%', height: '15%', backgroundColor: null, justifyContent: 'center', alignItems: 'center' }}>
                        <OtpInputs
                            handleChange={code => console.log(code)}
                            numberOfInputs={4}
                            inputStyles={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}
                            inputContainerStyles={{ width: '16%', justifyContent: 'center', alignItems: 'center' }}
                            placeholder='.'
                        />
                        <Text style={{ fontSize: 15, color: 'grey', marginTop: 10, marginLeft: '50%' }}>5:00 Time Left</Text>
                    </View>

                    <View style={{ width: '100%', height: '20%', backgroundColor: null, justifyContent: 'center', alignItems: 'center' }}>



                        <Text style={{ fontSize: 12, color: 'grey', marginTop: 20, textAlign: 'center' }}>Did'nt Recieve OTP? Resend Now</Text>


                        <TouchableOpacity onPress={()=>Actions.push('Tabs')} style={{ width: '45%', height: '30%', borderRadius: 10, borderWidth: 1, borderColor: 'grey', backgroundColor: '#f5f5f5', marginTop: 15, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, color: 'grey' }}>VERIFY NOW</Text>
                        </TouchableOpacity>

                    </View>


                </View>

            </KeyboardAwareScrollView>


        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#fff',
    },
    results: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {

        width: 300,
        height: 300
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 100
    },
});