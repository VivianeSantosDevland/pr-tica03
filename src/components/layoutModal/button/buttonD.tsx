
import  styled  from 'styled-components/native';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';

interface ButtonProps {
  title:string,
};

const ButtonD: React.ElementType<ButtonProps> = ({title}) =>{
 return(
  <Pressable style={styles.btn}>
    <Text style={styles.text}>{title}</Text>
  </Pressable>
 );
}

const styles = StyleSheet.create({
  btn:{
    backgroundColor: "#33A0AA", 
    width: 100, 
    height: 40,
    margin: 'auto', 
    borderRadius: 5, 
    border: 'none',
  },
  text:{
    color: "#fdfefe",
    fontSize: 16,
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



