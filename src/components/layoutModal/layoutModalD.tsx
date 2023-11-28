/*  Este componente deve oferecer possibilidade de apresentar uma caixa de diálogo modal com no mínimo um botão "close(fechar)". O componente deve acomodar um ou mais componentes*/

import  styled  from 'styled-components/native';
import {View, Text, StyleSheet, Modal} from 'react-native';
import { Buttonbtn } from './button';
import { ButtonD } from './button/buttonD';
import {useState} from 'react';

interface propsModal{
  title?: string, 
  children?: any 
}


 const styles = StyleSheet.create({
  boxModal:{
    backgroundColor: "#26003A",
    flex:0.5, 
    margin: 'auto', 
    height: 500, 
    borderRadius: 8,
  },
  boxModalClose:{
    display: 'none'
  }
})



/*

const [isOpen, setIsOpen] = useState(false);
const LayoutModalD: React.ElementType<propsModal> = ({title, children}) =>{
  return(
     <View style={styles.boxModal}>
      <Text>{title}</Text>
        {children}
        <ButtonD title='Close' pressOn={setIsOpen(!isOpen)}>Click</ButtonD>
     </View>
 
  );
 }

style={({pressed}) => [
          {
            backgroundColor: pressed ? 'red' : 'blue',
          },
          styles.button,
        ]}
*/
 /*exemplo de css condicional
  <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'red' : 'blue',
          },
          styles.button,
        ]}
        onPress={() => Alert.alert('Button Pressionado!')}>
        <Text style={styles.buttonText}>Button</Text>
      </Pressable>

/*
  React.ElementType<ButtonProps> = ({title, pressOn}) =>

function LayoutModalD(){
 return(
    <View style={styles.boxModal}>

      <ButtonD title='Close' pressOn={closeModal}>Click</ButtonD>
    </View>
  
 );
}
*/

