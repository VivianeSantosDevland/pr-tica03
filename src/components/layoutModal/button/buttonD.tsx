
import  styled  from 'styled-components/native';
import {View, Text, StyleSheet, Button, Pressable, Alert} from 'react-native';

interface ButtonProps {
  title:string,
  pressOn: any
};
/*
const ButtonD: React.ElementType<ButtonProps> = ({title}) =>{
 return(
  <Pressable style={styles.button} onPress={createSimpleAlert}>
    <Text style={styles.buttonText}>{title}</Text>
  </Pressable>
 );
}*/
const ButtonD: React.ElementType<ButtonProps> = ({title, pressOn}) =>{
  return(
   <Pressable style={styles.button} onPress={pressOn}>
    <Text style={styles.buttonText}>Hello</Text>
   </Pressable>
  );
 }

 function beta(){
  alert('Hellooooooo');
 }
 /*
const ButtonD: React.ElementType<ButtonProps> = ({title}) =>{
  return(
   <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
    <Text style={styles.buttonText}>Hello</Text>
   </Pressable>
  );
 }
 */



const styles = StyleSheet.create({
  button:{
    backgroundColor: "#33A0AA", 
    width: 100, 
    height: 40,
    margin: 'auto', 
    borderRadius: 5, 
    border: 'none',
  },
  buttonText:{
    color: "#fdfefe",
    fontSize: 16,
    margin: 'auto'
  }
});


export {ButtonD}
/*
interface ButtonProps {
    children:string,
    bg?:string,
    w?:string,
}

const Button: React.ElementType<ButtonProps> = ({children,w='120px',bg='#968787'}) =>{
    return (
        <ButtonContainer bg={bg} width={w}>
            <ButtonText>{children}</ButtonText>
        </ButtonContainer>
    )
}

*/



