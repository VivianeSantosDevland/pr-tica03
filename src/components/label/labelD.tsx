import {LabelStyle, Texto} from './label.styles'
import {View, Text, StyleSheet, TextProps} from 'react-native';

interface LabelProps extends TextProps {
 texto: string, 
 color?: string,
 fontSize?: number,
 labelFor?: string
}

const LabelD: React.ElementType<LabelProps> = ({texto, color, fontSize, labelFor}) =>{
  return(
    <View style={styles.container}>
      <Text>{texto}</Text>
    </View>
     
  );
}


const styles = StyleSheet.create({
  font: {
    fontSize: 16,
    color: '#000000',
    fontWeight: "500",
  },
  container:{
    backgroundColor: 'yellow',
    width: 100,
    height: 50,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export {LabelD}
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