
import  styled  from 'styled-components/native';
import { Container} from './layoutSpliter.styles';
import {View, Text, StyleSheet} from 'react-native';

interface LayoutSplitterProps{
  orientacao: string,
  tamanhoBox1: number,
  tamanhoBox2: number,
  children: any
};


function LayoutSplitter(){
 return(
  <View style={{ height: 600, backgroundColor: '#000000', flex:1, flexDirection: 'column'}}>
    <View style={{backgroundColor: '#410751', flex:0.3}}></View>
    <View style={{backgroundColor: '#26003A', flex:0.7}}></View>
  </View>
 );
}
function LayoutSpl(){
  return(
    <Container></Container>
  )};




export {LayoutSplitter, LayoutSpl}

