/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState,useEffect} from 'react';

 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import Result from './src/components/Result';
import colors from './src/utils/colors'; 

export default function App(){
  const [size, setSize] = useState(null);
  const [type, setType] = useState(null);
  const [payment, setPayment] = useState(null);
  const [amount, setAmount] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() =>{
    if (size && type && payment && amount) {
        calculate();
    }
    else{
      reset();
    }},[size,type,payment,amount]);

    const calculate = () => {
      reset();
      if (!size) {
        setErrorMessage('Debe seleccionar un tamaño');
      }else if(!type){
        setErrorMessage('Debe seleccionar un tipo de café');
      }else if(!payment){
        setErrorMessage('Debe seleccionar el tipo de pago');
      }else if(!amount){
        setErrorMessage('Debe seleccionar la cantidad');
      }else{
        const subtotal = (size + type)*amount;
        const discount = subtotal*payment;
        const aggregate = subtotal - discount;
        setTotal({
          total:aggregate.toFixed(2).replace('.',','),
          discount:discount.toFixed(2).replace('.',','),
        });
      }
    };

    const reset = () =>{
      setErrorMessage('');
      setTotal(null);
    };

  return(
    <>
    <StatusBar barStyle="light-content"/>
    <SafeAreaView style={styles.Header}>
      <Text style={styles.HeadApp}>StarBosco APP</Text>
      <Form 
        setSize = {setSize}
        setType = {setType}
        setPayment = {setPayment}
        setAmount = {setAmount}
        setTotal = {setTotal}
        
      />
    </SafeAreaView>
    <Result 
    size={size}
    type={type}
    payment = {payment}
    amount = {amount}
    total = {total}
    errorMessage ={errorMessage}
    />
    <Footer></Footer>
    </>
  );
}
const styles = StyleSheet.create({
  Header:{
    backgroundColor:colors.PRIMARY_COLOR,
    height:300,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:'center'
  },
  HeadApp:{
    fontSize:25,
    fontWeight:'bold',
    color:'#fff',
    marginTop:15,
  }
});

