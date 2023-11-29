import {LabelStyle, Texto} from './label.styles'
import {View, Text, StyleSheet} from 'react-native';

interface LabelProps{
 children: string
}

const LabelD: React.ElementType<LabelProps> = ({children}) =>{
  return(
     <Text style={styles.font}>{children}</Text>
  );
}


const styles = StyleSheet.create({
  font: {
    fontSize: 16,
    color: '#000000',
    fontWeight: "500",
    marginLeft: 20,
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