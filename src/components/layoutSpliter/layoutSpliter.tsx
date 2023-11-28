
import { Container} from './layoutSpliter.styles';
import {View, Text, StyleSheet} from 'react-native';

interface LayoutSplitterProps{
  orientacao: string,
  tamanhoBox1: number,
  corBox1: string,
  tamanhoBox2: number,
  corBox2: string,
  children: any
};

function LayoutSplitter(){
 return(
  <View style={{ height: 600, backgroundColor: '#000000', flex:1, flexDirection: 'row'}}>
    <View style={{backgroundColor: '#ffffff', flex:0.3}}></View>
    <View style={{backgroundColor: '#3A0000', flex:0.7}}></View>
  </View>
 );
}





export {LayoutSplitter}

