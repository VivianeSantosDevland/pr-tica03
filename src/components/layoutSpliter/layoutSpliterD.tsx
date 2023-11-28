
import  styled  from 'styled-components/native';
import { Container} from './layoutSpliter.styles';
import {View, Text, StyleSheet} from 'react-native';

interface LayoutSplitterProps{
  orientacao: string,
  tamanhoBox1: number,
  tamanhoBox2: number,
  children: any
};


function LayoutSplitterD(){
 return(
  <View style={{
    height: 600, 
    backgroundColor: '#000000',
    flex:1, 
    flexDirection: 'column',
  }}>
    <View style={styles.box1}></View>
    <View style={styles.box2}></View>
  </View>
 );
}
function LayoutSpl(){
  return(
    <Container></Container>
  )};

  const styles = StyleSheet.create({
    container:{
      height: 600, 
      backgroundColor: '#000000',
      flex:1, 
      flexDirection: 'column',
    },
    box1:{
      backgroundColor: '#410751',
       flex:0.3,
    },
    box2:{
      backgroundColor: '#26003A',
       flex:0.7,
    }
  })



export {LayoutSplitterD, LayoutSpl}

