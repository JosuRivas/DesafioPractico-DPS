import React from 'react'; 
import {StyleSheet, View} from 'react-native'; 
import RNPickerSelect from 'react-native-picker-select'; 
import NumericInput from 'react-native-numeric-input';
import colors from '../utils/colors'; 
//render de los elementos del formulario
export default function Form(props) {
    const{setSize, setType, setPayment, setAmount} = props; //set de nombre y salario base

    return(
        <View style={styles.viewForm}>
          <View style={styles.viewInputs}>
          <RNPickerSelect 
            style={picketSelectStyles}
            onValueChange={(value) => setSize(value)}
            palceholder={{
                label:'Selecciona tamaño de café',
                value: null,
            }}
            items={[
                {label:'Short 8 onz. $1.00', value:1.0},
                {label:'Tall 12 onz. $1.50', value:1.50},
                {label:'Grande 16 onz. $2.00', value:2.0},
            ]}
            />
            </View>
            <View style={styles.viewInputs}>
            <RNPickerSelect 
            style={picketSelectStyles}
            onValueChange={(value) => setType(value)}
            palceholder={{
                label:'Selecciona tipo de café',
                value: null,
            }}
            items={[
                {label:'Mocha $2.00', value:2.0},
                {label:'Te chai $2.50', value:2.50},
                {label:'Americano $1.50', value:1.50},
                {label:'Frappe $3.00', value:3.0},
            ]}
            />
            </View>
            <View style={styles.viewInputs}>
            <RNPickerSelect 
            style={picketSelectStyles}
            onValueChange={(value) => setPayment(value)}
            palceholder={{
                label:'Tipo de pago',
                value: null,
            }}
            items={[
                {label:'Efectivo', value:0.15},
                {label:'Tarjeta  de credito', value:0.05},
            ]}
            />
            </View>
            <View style={styles.viewInputs}>
                <NumericInput 
                  onChange = {(value) => setAmount(value)}
                  step={1}
                  valueType='integer'
                  minValue={0}
                />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({ 
    viewForm: { 
      position: 'absolute',  
      width: '85%',
      top:'20%', 
      paddingHorizontal: 50, 
      backgroundColor: colors.PRIMARY_COLOR_DARK, 
      borderRadius: 10, 
      height: 240, 
      justifyContent: 'center', 
    }, 
    viewInputs: { 
      flexDirection: 'row',
      paddingTop:5,
      paddingBottom:5,
      justifyContent:'center',
    }, 
    input: { 
      height: 45, 
      backgroundColor: '#fff', 
      borderWidth: 1, 
      borderColor: colors.PRIMARY_COLOR, 
      borderRadius: 5, 
      width: '90%', 
      marginRight: 5, 
      marginLeft: -5, 
      marginBottom: 10, 
      color: '#000', 
      paddingHorizontal: 20, 
    }, 
  });

  const picketSelectStyles = StyleSheet.create({ 
    inputIOS: { 
      fontSize: 16,
      paddingVertical: 12, 
    paddingHorizontal: 10, 
    borderWidth: 1, 
    borderColor: 'grey', 
    borderRadius: 4, 
    color: 'black', 
    paddingRight: 30, 
    backgroundColor: '#fff', 
    marginLeft: -5, 
    marginRight: -5, 
  }, 
  inputAndroid: { 
    fontSize: 16, 
    paddingHorizontal: 10, 
    paddingVertical: 8, 
    borderWidth: 0.5, 
    borderColor: 'grey', 
    borderRadius: 8, 
    color: 'black', 
    paddingRight: 200, 
    backgroundColor: '#fff', 
  }, 
}); 
