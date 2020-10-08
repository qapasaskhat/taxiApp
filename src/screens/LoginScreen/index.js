import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { taxi_logo } from '../../assets'
import { Button } from '../../components'

const warn = `Ваш номер телефона \nне зарегистрирован в таксопарке.\nУбедитесь что номер телефона верный \nили зарегистрируйтесь, это быстро!`

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      not_auth: false
    };
  }
  login=()=>(
    <View>
      <View>
        <Text style={styles.txtInput}>Телефон</Text>
        <TextInput keyboardType='number-pad' style={styles.input} placeholder='+7 (   )' />
      </View>
      <View style={{height: 32}} />
      <Button title='Войти' />
    </View>
  )
  register=()=>(
    <View style={{marginTop: -48}}>
          <View>
            <Text style={styles.text}>{warn}</Text>
          </View>
          <View style={{height: 32}} />
          <Button title='Зарегистрироваться' />
          <TouchableOpacity style={{
            marginVertical: 24
          }}>
            <Text style={styles.exit}>Выйти</Text>
          </TouchableOpacity>
        </View>
  )

  render() {
    return (
      <SafeAreaView style={{flex:1, backgroundColor: '#F7F7F7'}}>
        <Image source={taxi_logo} style={{
          width: '50%',
          resizeMode: 'contain',
          alignSelf: 'center',
        }} />
        { this.state.not_auth ? this.register() : this.login()}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  input:{
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#272727',
    paddingVertical: 15,
    marginHorizontal: 16,
    paddingLeft: 16
},
txtInput:{
  backgroundColor:'#F7F7F7',
  marginLeft: 32,
  position: 'absolute',
  top: -10,
  zIndex: 101,
  color: '#636363',
  fontSize: 12,
},
text:{
  textAlign: 'center',
  fontWeight: '400',
  fontSize: 14,
  color: '#414141',
  lineHeight: 19
},
exit:{
  textAlign: 'center',
  color:'#FB0000',
  fontSize: 18,
  fontWeight: '400'
}
})
export default LoginScreen;
