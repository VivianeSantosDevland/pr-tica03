import {LabelStyle, Texto} from './label.styles'
import {View, Text, StyleSheet, TextProps} from 'react-native';

interface LabelProps extends TextProps {
 texto: string, 
 color?: string,
 fontSize?: number,
 labelFor?: string
}

const Label: React.ElementType<LabelProps> = ({texto, color, fontSize, labelFor}) =>{
  return(
     <Text style={styles.font}>{texto}</Text>
     
  );
}


const styles = StyleSheet.create({
  font: {
    fontSize: 16,
    color: 'blue',
    fontWeight: "500",
    marginLeft: 20,
  }
});


export {Label}
/*
interface labelProps{
  fontSize?: number,
  colorFont?: string,
  content: string
};

 function Label ({fontSize,
  colorFont,
  content}
  : labelProps){
  return(
    <LabelStyle style={{fontSize: {fontSize}, color: {colorFont}}}>{content}</LabelStyle>
  )
}


const LabelTarget: React.ElementType<labelProps> = ({fontSize=20, colorFont="red", content}: labelProps) =>{
  return (
   <LabelStyle></LabelStyle>
  )
}
export {Label, LabelTarget}*/