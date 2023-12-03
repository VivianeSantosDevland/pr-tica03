
import {View, Text, StyleSheet, Button, Pressable, Alert} from 'react-native';
import {styles} from './button.style'
interface ButtonProps {
  title:string,
  pressOn: any
};

const ButtonD: React.ElementType<ButtonProps> = ({title, pressOn}) =>{
  return(
   <Pressable style={styles.button} onPress={pressOn}>
    <Text style={styles.buttonText}>{title}</Text>
   </Pressable>
  );
 }


export {ButtonD}

