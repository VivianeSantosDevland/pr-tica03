
import  styled  from 'styled-components/native';
import {View, Text, StyleSheet} from 'react-native';

interface ButtonProps {
  children:string,
};

const Buttonbtn: React.ElementType<ButtonProps> = ({children}) =>{
 return(
  <button style={{backgroundColor: '#33A0AA', width: 100, height:40,margin: 'auto', borderRadius: 5, border: 'none'}}>
  <Text style={{color: '#f2f2f2'}}>{children}</Text>
  </button>
 );
}
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

export {Buttonbtn}

