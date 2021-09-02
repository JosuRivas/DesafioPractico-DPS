import React from 'react'; 
import {StyleSheet, Text, View} from 'react-native';

export default function Result(props) { 
    const {size, type, amount, payment, total, errorMessage} = props;
    var sizename = "";
    switch (size) {
      case 1.0:
        sizename = 'short';
        break;
      case 1.50:
        sizename = 'tall';
        break;
      case 2.0:
        sizename = 'grande';
        break;
      default:
        break;
    }
    var typename = "";
    switch(type){
      case 2.0:
        typename = 'mocha';
        break;
      case 2.50:
        typename = 'te chai';
        break;
      case 1.50:
        typename = 'americano';
        break;
      case 3.0:
        typename = 'frappe';
        break;
      default:
        break;
    }
    var paymenttype = '';
    var percent = 0;
    switch (payment) {
      case 0.15:
        paymenttype = 'efectivo';
        percent = payment*100;
        break;
      case 0.05:
        paymenttype = 'crédito';
        percent = payment*100;
        break;
      default:
        break;
    }
    return(
        <View style={styles.content}>
            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>RESUMEN</Text>
                    <DataResult title="Cantidad solicitada:" value={`${amount}`} />
                    <DataResult title="Tamaño:" value={`${sizename}`} />
                    <DataResult title="Tipo Café:" value={`${typename}`} />
                    <DataResult title="Tipo de pago:" value={`${paymenttype}`} />
                    <DataResult title="Descuento %:" value={`${total.discount}$`} />
                    <DataResult 
                    title="Total a pagar:"
                    value={`${total.total}$`}
                    />
                </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
}

function DataResult(props) { 
    const {title, value} = props; 
   
    return ( 
      <View style={styles.value}> 
        <Text>{title}</Text> 
        <Text>{value}</Text> 
      </View> 
    ); 
  }
  const styles = StyleSheet.create({ 
    content: { 
      marginHorizontal: 40, 
    }, 
    boxResult: { 
      padding: 30, 
    }, 
    title: { 
      fontSize: 25, 
      textAlign: 'center', 
      fontWeight: 'bold', 
      marginBottom: 20, 
    }, 
    value: { 
      flexDirection: 'row',
      justifyContent: 'space-between', 
    marginBottom: 20, 
  }, 
  error: { 
    textAlign: 'center', 
    color: '#f00', 
    fontWeight: 'bold', 
    fontSize: 20, 
  }, 
}); 