import {LabelStyle, Texto} from './label.styles'
import {View, Text, StyleSheet} from 'react-native';



const Label= (content:string) =>{
  return(
     <Text style={styles.colorText}></Text>
  );
}


const styles = StyleSheet.create({
  fontSize: {
    fontSize: 20,
    color: 'blue'
  },
  colorText: {
    color: 'red',
  },
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